<script lang="ts">
  import feedMyPixelLogo from '$assets/images/feed-my-pixel.svg';
</script>

<header class="Header">
  <div class="Header-primary">
    <h1>feedMyPixel Ltd.</h1>
  </div>
  <div class="Header-secondary">
    <img class="Header-logo" src={feedMyPixelLogo} alt="feedMyPixel Ltd." />
  </div>
</header>

<style lang="scss">
  @use '../assets/stylesheets/settings/spacing' as *;
  @use '../assets/stylesheets/settings/font' as *;

  .Header {
    display: grid;
    justify-items: start;
    align-items: end;
    grid:
      'primary secondary' 1fr
      / 3fr 1fr;
    gap: $spacing-16;
    padding: $spacing-20;
  }

  .Header-primary {
    grid-area: primary;
    font-size: $font-21;
  }

  .Header-secondary {
    grid-area: secondary;
    justify-self: end;
  }

  .Header-logo {
    width: #{$spacing-40 * 2};
    height: #{$spacing-40 * 2};
  }
</style>
