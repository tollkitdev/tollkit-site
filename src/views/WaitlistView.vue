<template>
  <div>
    <HeroSection class="mx-auto max-w-4xl text-center px-10 py-20 md:mt-30" />
    <!-- <WaitlistForm class="my-20" /> -->

    <VisualPreview class="mx-auto max-w-4xl text-center px-10 py-20" />

    <FOMOSection class="mx-auto max-w-4xl text-center px-10 py-20" />

    <FeatureList class="mx-auto max-w-4xl text-center px-10 py-20" />

    <SimplicitySection class="mx-auto max-w-4xl text-center px-10 py-20" />

    <WhoFor class="mx-auto max-w-4xl text-center px-10 py-20" />

    <FounderNote class="mx-auto max-w-4xl text-center px-10 py-20" />

    <!-- <FeatureBenefitOutcome /> -->

    <WaitlistForm class="mx-auto max-w-4xl text-center px-10 py-20" />
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
