<template>
  <section>
    <div class="mb-8 text-center">
      <h3 class="font-bold text-lg mb-2">Centralized access logic, zero duplication</h3>
      <p class="text-gray-300">
        Define your access rules once and use them across your frontend and backend — no
        duplication, no fragile logic.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto font-mono text-sm">
      <!-- Before Tollkit -->
      <div>
        <div class="text-xs text-gray-400 uppercase mb-2">Without Tollkit</div>
        <div class="rounded-card bg-gray-900 p-4 shadow-lg overflow-x-auto">
          <pre><code class="text-left text-white">
<span class="text-gray-400">// Frontend</span>
const user = useCurrentUser();
const team = useCurrentTeam();

const hasAccess = (
  (user.plan === 'pro' || user.plan === 'team') &&
  user.trialEnded &&
  team.role === 'admin'
);

if (hasAccess) {
  showAnalyticsDashboard();
}

<span class="text-gray-400">// Backend</span>
if (
  (user.plan !== 'pro' && user.plan !== 'team') ||
  !user.trialEnded ||
  user.team.role !== 'admin'
) {
  return res.status(403).json({ error: 'Access denied' });
}
          </code></pre>
        </div>
      </div>

      <!-- With Tollkit -->
      <div>
        <div class="text-xs text-gray-400 uppercase mb-2">With Tollkit</div>
        <div class="rounded-card bg-gray-900 p-4 shadow-lg overflow-x-auto mb-4">
          <pre><code class="text-left text-white">
<span class="text-gray-400">// Frontend</span>
if (<span class="text-accent">canAccess</span>(<span class="text-primary">'analytics_dashboard'</span>)) {
  <span class="text-accent">showAnalyticsDashboard</span>();
}

<span class="text-gray-400">// Backend</span>
if (!<span class="text-accent">checkAccess</span>(user, <span class="text-primary">'analytics_dashboard'</span>)) {
  return res.forbidden();
}
          </code></pre>
        </div>

        <div class="rounded-card bg-gray-800 p-4 shadow overflow-x-auto">
          <div class="text-xs text-gray-400 uppercase mb-2">access.config.js</div>
          <pre><code class="text-left text-white">
export default {
  rules: {
    analytics_dashboard: {
      plans: ['pro', 'team'],
      trialEnded: true,
      role: ['admin']
    }
  }
}
          </code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
