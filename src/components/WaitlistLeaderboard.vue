<template>
  <div class="text-center">
    <div v-if="!signupUser">
      <h1 class="text-2xl my-10">Get Early Access to TollKit</h1>

      <form @submit.prevent="getUser" class="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          v-model="email"
          type="email"
          name="email"
          required
          class="input border-2 rounded-md"
          placeholder="you@domain.com"
        />
        <button type="submit" class="btn bg-primary hover:bg-primary-focus text-white">
          Check Status
        </button>
      </form>
    </div>

    <section v-if="signupUser" class="max-w-xl mx-auto text-center py-12">
      <h2 class="text-2xl font-bold mb-8 text-accent">🎉 You're on the waitlist!</h2>

      <div v-if="signupUser?.referral_link" class="mb-12">
        <p class="text-neutral">Your referral link:</p>

        <!-- <input
          v-if="signupUser?.referral_link"
          :value="signupUser?.referral_link"
          name="Referral Link"
          class="input mr-2 border-2 rounded-md"
          placeholder="Referral Link"
        /> -->

        <p class="text-xl my-3">{{ signupUser?.referral_link }}</p>
        <button
          @click="copyToClipboard(signupUser?.referral_link)"
          type="submit"
          class="btn bg-primary hover:bg-primary-focus text-white"
        >
          Copy
        </button>
      </div>

      <!-- <div>
        <p class="mb-2 text-neutral">
          Your current position:
          <span class="font-semibold text-primary">#{{ signupUser?.priority }}</span>
        </p>

        <p class="mb-2 text-neutral">
          Total waitlist signups:
          <span v-if="waitlist?.statistics?.total_signups" class="font-semibold">{{
            waitlist.statistics.total_signups
          }}</span>
        </p>
      </div> -->

      <h2 class="text-xs mt-6">
        🚀 Want early access faster? Share your link — each referral moves you up the list!
      </h2>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { getWaitlistUserByEmail } from '@/lib/waitlist'

const signupUser = ref(null)
const route = useRoute()
const email = ref('')

async function getUser() {
  if (!email.value) {
    console.log('Invalid email')
    return
  }

  signupUser.value = await getWaitlistUserByEmail(email.value)
  signupUser.value.referral_link = `${window.location.origin}?ref=${signupUser.value.referral_code}`
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy: ', err)
    return false
  }
}

onMounted(() => {
  email.value = route.query?.email?.toString() ?? null

  if (email.value) {
    getUser()
  }
})
</script>

<style lang="scss" scoped></style>
