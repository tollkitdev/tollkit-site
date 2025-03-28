// composables/useWaitlist.ts
import { ref } from 'vue'

interface WaitlistResponse {
  id: string
  email: string
  referral_code: string
  referral_link: string
}

export interface WaitlistSignup {
  amount_referred: number
  created_at: string
  email: string
  priority: number
  referral_link: string
  referral_token: string
  referred_by_signup_token: string | null
  removed_date: string | null
  uuid: string
  verified: boolean
  waitlist_api_key: string
  waitlist_id: number
}

export interface WaitlistConfig {
  id: number
  configuration_style_json: {
    social_links: {
      facebook: string
      instagram: string
      linkedin: string
      pinterest: string
      twitter: string
    }
    status_description: string
    status_font_color: string
    status_main_color: string
    widget_background_color: string
    widget_button_color: string
    widget_font_color: string
  }
  logo: string | null
  spots_to_move_upon_referral: number
  uses_firstname_lastname: boolean
  uses_leaderboard: boolean
  uses_signup_verification: boolean
  waitlist_name: string
  waitlist_url_location: string
  statistics: {
    total_signups: number
    current_signups: number
  }
  title: string | null
  success_title: string | null
  required_contact_detail: 'EMAIL' | 'PHONE' | string
  widget_shows_social_links: boolean
  signup_button_title: string
  hide_counts: boolean
  leaderboard_length: number
  remove_widget_headers: boolean
  questions: {
    question_value: string
    optional: boolean
    answer_value: string[]
  }[]
  twitter_message: string
  organization_uuid_fk: string
}

export function useWaitlist(waitlistId: string) {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const response = ref<WaitlistResponse | null>(null)

  async function createSignup(email: string) {
    loading.value = true
    error.value = null

    try {
      const res = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          waitlist_id: waitlistId,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || 'Unknown error')
      }

      response.value = data
    } catch (err: unknown) {
      console.log(err, 'error')
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unexpected error occurred'
      }
    } finally {
      loading.value = false
    }
  }

  async function getSignup(email: string) {
    loading.value = true
    error.value = null

    try {
      const res = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          waitlist_id: waitlistId,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || 'Unknown error')
      }

      return data as WaitlistSignup
    } catch (err: unknown) {
      console.log(err, 'error')
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unexpected error occurred'
      }
    } finally {
      loading.value = false
    }
  }

  async function getWaitlist() {
    loading.value = true
    error.value = null

    try {
      const res = await fetch(
        `https://api.getwaitlist.com/api/v1/waitlist?waitlist_id=${waitlistId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.message || 'Unknown error')
      }

      return data as WaitlistConfig
    } catch (err: unknown) {
      console.log(err, 'error')
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'An unexpected error occurred'
      }
    } finally {
      loading.value = false
    }
  }

  return {
    createSignup,
    getSignup,
    getWaitlist,
    loading,
    error,
  }
}
