<template>
  <section id="waitlist">
    <h2 class="text-2xl font-bold mb-4">→ Get early access</h2>
    <p class="mb-6">We’ll email you when we’re ready to launch. No spam, ever.</p>

    <!-- Replace with Tally/Formspree or native -->
    <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4 justify-center">
      <input
        v-model="email"
        type="email"
        name="email"
        required
        class="input border-2 rounded-md"
        placeholder="you@domain.com"
      />
      <button type="submit" class="btn bg-primary hover:bg-primary-focus">Notify Me</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { addToWaitlist } from '@/lib/waitlist'
import { useToast } from 'vue-toastification'

const email = ref('')
const route = useRoute()
const router = useRouter()
const referredBy = ref<string | null>(null)
const toast = useToast()

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function handleSubmit() {
  if (!email.value) {
    console.log('Invalid email')
    return
  }

  try {
    if (!isValidEmail(email.value)) {
      toast.error('Invalid Email')
      return
    }

    await addToWaitlist(email.value, referredBy.value)
    router.push(`/waitlist-status?email=${email.value}`)
    toast.success('Success!')
  } catch (error) {
    console.log(error, 'error adding to waitlist')
  }
}

onMounted(() => {
  referredBy.value = route.query.ref?.toString() ?? null
  console.log('referredBy', referredBy.value)
})
</script>
