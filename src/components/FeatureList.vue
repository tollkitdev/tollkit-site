<template>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="card">
      <h3 class="text-lg font-semibold text-primary mb-2">Feature Access by Plan</h3>
      <p class="text-sm text-neutral-600">
        Gate any route, button, or component with
        <code class="bg-neutral text-white px-1 rounded">canAccess('pro')</code>. Tollkit handles
        the logic.
      </p>
    </div>
    <div class="card">
      <h3 class="text-lg font-semibold text-primary mb-2">No Webhooks. No Syncing.</h3>
      <p class="text-sm text-neutral-600">
        Skip the headache of syncing Stripe plans or dealing with edge cases. Just query and go.
      </p>
    </div>
    <div class="card">
      <h3 class="text-lg font-semibold text-primary mb-2">Self-Host or Use Ours</h3>
      <p class="text-sm text-neutral-600">
        Need control? Self-host easily. Don’t care? We’ll manage infra, auth, and billing for you.
      </p>
    </div>
  </div>
</template>
