<template>
  <section>
    <div class="max-w-2xl mx-auto text-center mb-6">
      <h2 class="text-2xl font-bold mb-2">Feature access in one line</h2>
      <p class="text-neutral-600">
        No boilerplate, no backend setup. Just drop in and gate any component, route, or feature.
      </p>
    </div>

    <div
      class="bg-neutral text-white rounded-card p-6 max-w-xl mx-auto shadow-lg font-mono text-left text-sm overflow-x-auto"
    >
      <pre><code>
  if (canAccess('feature')) {
    showDownloadButton()
  }
        </code></pre>
    </div>
  </section>
</template>
