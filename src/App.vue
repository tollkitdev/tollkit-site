<script setup lang="ts">
import FooterSection from '@/components/layout/FooterSection.vue'
import TopNavSection from '@/components/layout/TopNavSection.vue'
</script>

<template>
  <div>
    <TopNavSection />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>

<style>
.Vue-Toastification__toast--default.black {
  background-color: black;
}
</style>
