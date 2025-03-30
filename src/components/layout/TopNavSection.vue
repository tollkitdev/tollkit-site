<template>
  <header class="flex items-center justify-between px-6 py-4 border-b border-base-300 bg-base-100">
    <div class="flex">
      <TermIcon class="h-6 w-6 svg-primary mr-2" />

      <span class="font-semibold font-mono text-xl">Tollkit</span>
    </div>

    <button v-if="route.name === 'Home'" @click="scrollToWaitlist" class="btn">
      Join Waitlist
    </button>

    <button v-else @click="goHome" class="btn">Home</button>
  </header>
</template>

<script setup lang="ts">
import TermIcon from '@/components/TermIcon.vue'
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
