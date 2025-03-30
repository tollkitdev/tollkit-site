<template>
  <section>
    <div class="max-w-2xl mx-auto text-center mb-6">
      <h2 class="font-bold mb-2">Feature access in one line</h2>
      <p class="">
        No boilerplate, no backend setup. Just drop in and gate any component, route, or feature.
      </p>
    </div>

    <div
      class="card rounded-card p-6 max-w-xl mx-auto shadow-lg font-mono text-left text-sm overflow-x-auto"
    >
      <pre><code>
  if (canAccess('feature')) {
    showDownloadButton()
  }
        </code></pre>
    </div>
  </section>
</template>
