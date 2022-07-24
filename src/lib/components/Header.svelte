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

  .Header {
    display: grid;
    justify-content: center;
    grid:
      'primary secondary' 1fr
      / 3fr 1fr;
    gap: $spacing-16;
    padding: 10px;
  }

  .Header-primary {
    grid-area: primary;
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
