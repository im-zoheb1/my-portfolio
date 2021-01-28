<template>
  <nav class="navbar">
    <div class="navbar__header-mobile" @click="nav = !nav">
      <div></div>
      <div class="navbar__button">
        <div class="navbar__icon"></div>
      </div>
    </div>
    <div class="container">
      <ul class="navbar__list" :class="{ 'display-none': nav }">
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
    <div id="_progress-mobile"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: true,
    }
  },
  mounted() {
    document.addEventListener('scroll', function () {
      let scrollTop =
        document.documentElement['scrollTop'] || document.body['scrollTop']
      let scrollBottom =
        (document.documentElement['scrollHeight'] ||
          document.body['scrollHeight']) - document.documentElement.clientHeight
      let scrollPercent = (scrollTop / scrollBottom) * 100 + '%'
      document
        .getElementById('_progress-mobile')
        .style.setProperty('--scroll', scrollPercent)
    })
  },
}
</script>

<style lang="scss" scoped>
#_progress-mobile {
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

.navbar {
  // border-bottom: 3px solid $accent-color;
  background-color: $dark-bg;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  @include respond(phone) {
    display: block;
  }
  &__header-mobile {
    background-color: $dark-bg;
    border-bottom: 1px solid rgba($white-color, 0.05);
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // @include respond(phone) {
    //   display: flex;
    // }
  }
  &__button {
    background-color: $text-light;
    width: 6rem;
    height: 5rem;
    border-radius: 5px;
    z-index: 2;
    box-shadow: 2px 2px 4px 0 rgba($dark-bg, 0.25);
    cursor: pointer;
    display: grid;
  }
  &__icon {
    position: relative;
    margin: auto;
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: $dark-bg;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }
  &__list {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
    font-size: $text-large;
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
      /* &.active {
        font-weight: 500;
        color: $accent-color;
      } */
    }
  }
}

.display-none {
  display: none;
}
</style>
