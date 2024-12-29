<template>
  <div class="flex h-full flex-col">
    <nav class="px-10 flex text-white h-16 items-center bg-slate-700">
      <div class="w-3/4">
        New Code
      </div>
      <div class="flex w-1/4 justify-between">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/ruankao">
          软考
        </NuxtLink>
        <NuxtLink to="/project">
          project
        </NuxtLink>
        <NuxtLink to="/update-log">
          更新日志
        </NuxtLink>
      </div>
    </nav>
    <main class="flex-1 py-10 bg-slate-200">
      <article class="prose mx-auto">
        <NuxtPage />
      </article>
    </main>
    <footer>
      <!-- <div class="flex h-16 justify-between p-4">
        <p>&copy; 2024 New Code. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@newcode.com">info@newcode.com</a></p>
        <p><a href="/sitemap">Site Map</a></p>
        <p><a href="#top">Back to Top</a></p>
      </div> -->
    </footer>
  </div>
</template>


<style lang="css">
  #__nuxt {
    height: 100%;
  }
</style>