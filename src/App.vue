<script setup lang="ts">
import FooterSection from '@/components/layout/FooterSection.vue'
import TopNavSection from '@/components/layout/TopNavSection.vue'
</script>

<template>
  <TopNavSection class="sticky top-0" />
  <div class="w-full min-h-screen overflow-x-hidden">
    <div class="max-w-screen w-full overflow-x-hidden">
      <router-view></router-view>
      <FooterSection />
    </div>
  </div>
</template>

<style>
.Vue-Toastification__toast--default.black {
  background-color: black;
}
</style>
