<template>
  <header class="flex items-center justify-between px-6 py-4 border-b border-base-300">
    <h1 class="text-lg font-semibold">Tollkit</h1>

    <button
      v-if="route.name === 'Home'"
      @click="scrollToWaitlist"
      class="btn bg-primary hover:bg-primary-focus"
    >
      Join Waitlist
    </button>

    <button v-else @click="goHome" class="btn bg-primary hover:bg-primary-focus">Home</button>
  </header>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goHome() {
  router.push('/')
}

function scrollToWaitlist() {
  const waitlistEl = document.getElementById('waitlist')

  if (waitlistEl) {
    waitlistEl.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
