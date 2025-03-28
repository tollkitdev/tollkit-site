<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <div class="max-w-7xl">
      <HeroSection class="mb-16 mt-40 max-w-4xl mx-auto" />
      <!-- <WaitlistForm class="my-20" /> -->

      <VisualPreview class="my-16" />
      <FOMOSection class="py-20 px-6 text-center bg-base-200" />
      <FeatureList class="my-16" />

      <SimplicitySection class="max-w-4xl mx-auto" />
      <WhoFor class="mx-auto bg-base-200 p-24" />

      <FounderNote class="py-20 px-6 max-w-xl mx-auto text-center" />
      <!-- <FeatureBenefitOutcome /> -->

      <WaitlistForm class="my-25" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import FeatureList from '@/components/FeatureList.vue'
import WaitlistForm from '@/components/WaitlistForm.vue'
import WhoFor from '@/components/WhoFor.vue'
import FOMOSection from '@/components/FOMOSection.vue'
import SimplicitySection from '@/components/SimplicitySection.vue'

import VisualPreview from '@/components/VisualPreview.vue'
import FounderNote from '@/components/FounderNote.vue'
// import FeatureBenefitOutcome from '@/components/FeatureBenefitOutcome.vue'
</script>
