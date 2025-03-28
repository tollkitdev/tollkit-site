<template>
  <section class="py-20 px-6 bg-base-100">
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="text-left">
        <h3 class="text-lg font-semibold text-primary mb-2">🔐 Feature Gating</h3>
        <p class="text-sm text-neutral-600">
          <strong>Feature:</strong> Gate UI components, routes, or logic using `canAccess()`<br />
          <strong>Benefit:</strong> No need to wire up custom plan-checking logic<br />
          <strong>Outcome:</strong> Ship paid features without worrying about access edge cases
        </p>
      </div>

      <div class="text-left">
        <h3 class="text-lg font-semibold text-primary mb-2">💡 Webhook-Free Billing Logic</h3>
        <p class="text-sm text-neutral-600">
          <strong>Feature:</strong> Tollkit manages plan access in real time without webhooks<br />
          <strong>Benefit:</strong> No backend sync or Stripe event juggling<br />
          <strong>Outcome:</strong> Your billing “just works” — always in sync with Stripe
        </p>
      </div>

      <div class="text-left">
        <h3 class="text-lg font-semibold text-primary mb-2">🛠️ Hosted or Self-Host</h3>
        <p class="text-sm text-neutral-600">
          <strong>Feature:</strong> Choose managed or self-hosted Tollkit<br />
          <strong>Benefit:</strong> Keep control or move fast depending on your stack<br />
          <strong>Outcome:</strong> Flexibility to scale how you want — no lock-in
        </p>
      </div>
    </div>
  </section>
</template>
