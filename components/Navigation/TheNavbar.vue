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
  height: 3px;
  z-index: 100;
}
</style>
