<script setup>
const { title } = useAppConfig()
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row justify-center">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="Sink"
      >{{ title }}</a>
      <span class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
        &copy; {{ new Date().getFullYear() }} Dark の Short Link
      </span>
    </div>
  </section>
</template>
