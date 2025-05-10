<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
            <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <!-- This is where the routed components will be displayed -->
      <RouterView />
    </main>
  </div>
</template>

<style scoped>


</style>
