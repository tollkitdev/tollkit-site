<template>
  <div>
    <HeroSection class="mx-auto max-w-4xl text-center px-10 py-15 md:py-20 md:mt-30" />
    <!-- <WaitlistForm class="my-20" /> -->

    <VisualPreview class="py-16 px-6 md:px-12 lg:px-20 max-w-8xl mx-auto" />

    <FOMOSection class="mx-auto max-w-4xl text-center px-10 py-15 md:py-20" />

    <WhySection class="py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto" />

    <FounderNote class="mx-auto max-w-4xl text-center px-10 py-15 md:py-20" />
    <!-- <FeatureList class="mx-auto max-w-4xl text-center px-10 py-15 md:py-20" /> -->

    <!-- <SimplicitySection class="mx-auto max-w-4xl text-center py-15 px-10 md:py-20" /> -->

    <!-- <WhoFor class="mx-auto max-w-4xl text-center px-10 py-15 md:py-20" /> -->

    <!-- <FeatureBenefitOutcome /> -->

    <WaitlistForm class="mx-auto max-w-6xl text-center px-10 py-15 md:py-20" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import WaitlistForm from '@/components/WaitlistForm.vue'
import FOMOSection from '@/components/FOMOSection.vue'
// import FeatureList from '@/components/FeatureList.vue'
// import WhoFor from '@/components/WhoFor.vue'
// import SimplicitySection from '@/components/SimplicitySection.vue'
// import FeatureBenefitOutcome from '@/components/FeatureBenefitOutcome.vue'

import VisualPreview from '@/components/VisualPreview.vue'
import FounderNote from '@/components/FounderNote.vue'

import WhySection from '@/components/WhySection.vue'
</script>
