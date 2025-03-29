import { supabase } from './supabase'

const tableName = 'WaitlistUsers'

export async function getWaitlistUserByEmail(email: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('email', email)
    .maybeSingle()

  if (error && error.code !== 'PGRST116') {
    // Not "No rows found"
    console.error('Fetch error:', error.message)
    throw error
  }

  return data
}

export async function addToWaitlist(email: string, referredBy?: string | null) {
  // Check if the user already exists
  const existingUser = await getWaitlistUserByEmail(email)
  if (existingUser) return existingUser

  // Get the current highest position
  const { data: last, error: posError } = await supabase
    .from(tableName)
    .select('position')
    .order('position', { ascending: false })
    .limit(1)

  const newPosition = (last?.[0]?.position || 0) + 1
  const referralCode = crypto.randomUUID().slice(0, 8)

  const { data, error } = await supabase
    .from(tableName)
    .insert([
      {
        email,
        position: newPosition,
        referral_code: referralCode,
        referred_by: referredBy || null,
      },
    ])
    .select()
    .maybeSingle()

  if (error) {
    console.error('Insert error:', error.message)
    throw error
  }

  // Optional: increment referral count of referrer
  if (referredBy) {
    const { data: referrer } = await supabase
      .from(tableName)
      .select('referral_count')
      .eq('referral_code', referredBy)
      .maybeSingle()

    if (referrer) {
      const { data: updated, error: updateError } = await supabase
        .from(tableName)
        .update({ referral_count: referrer.referral_count + 1 })
        .eq('referral_code', referredBy)
        .select()
        .maybeSingle()

      if (updateError) {
        console.log('Error updating referral count', updateError.message)
      }
    }
  }

  return data
}
