<script lang="ts">
  import Header from '$components/Header.svelte';
</script>

<Header />

<main class="Main">
  <slot />
</main>

<style lang="scss">
  @use '../lib/assets/stylesheets/settings/spacing' as *;

  .Main {
    margin: $spacing-0 auto;
    padding: $spacing-20;
  }
</style>
