<template>
  <footer class="bg-base-100 border-t border-base-300 text-sm text-neutral-500 py-8 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-center md:text-left">
        <p>© {{ new Date().getFullYear() }} Tollkit, Inc. All rights reserved.</p>
      </div>
      <div class="flex gap-4">
        <a href="https://github.com/tollkitdev" class="hover:text-neutral-800 transition">GitHub</a>
        <!-- <a href="#" class="hover:text-neutral-800 transition">Docs</a>
        <a href="#" class="hover:text-neutral-800 transition">Privacy</a>
        <a href="#" class="hover:text-neutral-800 transition">Terms</a> -->
      </div>
    </div>
  </footer>
</template>
