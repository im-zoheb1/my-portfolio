<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar__list">
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/' }"
            class="navbar__item--link"
            >Home</nuxt-link
          >
        </li>
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/', hash: '#features' }"
            class="navbar__item--link"
            >Features</nuxt-link
          >
        </li>
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/', hash: '#about' }"
            class="navbar__item--link"
            >About</nuxt-link
          >
        </li>
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/', hash: '#skills' }"
            class="navbar__item--link"
            >Skills</nuxt-link
          >
        </li>
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/', hash: '#portfolio' }"
            class="navbar__item--link"
            >Portfolio</nuxt-link
          >
        </li>
        <li class="navbar__item">
          <nuxt-link
            exact-active-class="active"
            :to="{ path: '/', hash: '#contact' }"
            class="navbar__item--link"
            >Contact</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div id="_progress"></div>
  </nav>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('scroll', function () {
      let scrollTop =
        document.documentElement['scrollTop'] || document.body['scrollTop']
      let scrollBottom =
        (document.documentElement['scrollHeight'] ||
          document.body['scrollHeight']) - document.documentElement.clientHeight
      let scrollPercent = (scrollTop / scrollBottom) * 100 + '%'
      document
        .getElementById('_progress')
        .style.setProperty('--scroll', scrollPercent)
    })
  },
}
</script>

<style lang="scss" scoped>
#_progress {
  --scroll: 0%;
  background: linear-gradient(
    to right,
    $accent-color var(--scroll),
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 100;
}
.navbar {
  // border-bottom: 3px solid $accent-color;
  background-color: $dark-bg;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  @include respond(phone) {
    display: none;
  }
  &__list {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
    font-size: $text-small;
    font-weight: 400;
    color: $text-light;
    letter-spacing: 2px;
    justify-content: center;
    @include respond(phone) {
      flex-direction: column;
      text-align: center;
    }
  }
  &__item {
    padding: 1.2rem 1.6rem;
    &--link {
      text-decoration: none;
      color: $text-light;
      //  &.active {
      //   font-weight: 500;
      //   color: $accent-color;
      // }
    }
  }
}
</style>
