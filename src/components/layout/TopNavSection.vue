<template>
  <header class="flex items-center justify-between px-6 py-4 bg-white border-b border-base-300">
    <h1 class="text-lg font-semibold text-gray-800">Tollkit</h1>

    <button @click="goHome" class="btn bg-primary hover:bg-primary-focus text-white">Home</button>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>
