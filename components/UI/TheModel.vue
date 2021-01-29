<template>
  <div
    class="model"
    :class="{ 'toggle-model': toggleModel }"
    @click="checkModel"
  >
    <div class="model__background"></div>
    <div class="model__box">
      <div class="model__title heading--secondary">
        Hey! Thanks for contacting
      </div>
      <div class="model__paragraph paragraph--normal">
        I will get back to you shortly
      </div>
      <svg
        class="model__icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width="5em"
        height="5em"
        toggle
        style="
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        "
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <g fill="#626262">
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75a.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25a.5.5 0 0 1 .183-.683z"
          />
          <path
            d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleModel: false,
    }
  },
  methods: {
    checkModel(event) {
      // if (!event.target.closest('.model__box')) this.toggleModel = false
    },
  },
  mounted() {
    this.$nuxt.$on('display-model-event', (value) => {
      this.toggleModel = value
    })
  },
}
</script>

<style lang="scss">
.model {
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.25);
  // backdrop-filter: blur(1px);
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.14, 0.68, 0.5, 0.92);
  color: $text-dark;
  // overflow: hidden;
  @include respond(phone) {
    padding: 2rem;
  }
  &__box {
    background-color: $white-color;
    padding: 5rem;
    border-radius: 3px;
    margin: 0 auto;
    margin-top: 7rem;
    max-width: 50rem;
    text-align: center;
    transform: translateY(-4rem);
    transition: transform 0.2s cubic-bezier(0.14, 0.68, 0.5, 0.92);
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &__title {
    margin-bottom: 1rem;
  }
  &__paragraph {
    margin-bottom: 1rem;
  }
  &__icon {
    height: 5rem;
    width: auto;
    path {
      fill: $gradient-color-1;
    }
  }
}

.toggle-model {
  height: 100vh;
  opacity: 1;
  .model__box {
    transform: translateY(0);
  }
}
</style>
