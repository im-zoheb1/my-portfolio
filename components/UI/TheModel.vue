<template>
  <div
    class="model"
    :class="{ 'toggle-model': toggleModel }"
    @click="checkModel"
  >
    <div class="model__box">
      <svg
        class="model__close"
        @click="checkModel"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width="2em"
        height="2em"
        style="
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        "
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 42 42"
      >
        <path
          fill-rule="evenodd"
          d="M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z"
          fill="#626262"
        />
      </svg>
      <template v-if="statusCode == 200">
        <div class="model__title heading--secondary">
          Hey! Thanks for reaching out.
        </div>
        <div class="model__paragraph paragraph--normal">
          I have received your message and i will contact you shortly
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
      </template>
      <template v-else-if="statusCode == 500">
        <svg
          class="model__icon error"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          style="
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          "
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z"
            fill="#626262"
          />
          <path
            d="M424 748a32 32 0 1 0 64 0a32 32 0 1 0-64 0zm0-178a32 32 0 1 0 64 0a32 32 0 1 0-64 0z"
            fill="#626262"
          />
          <path
            d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6C64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9c-27-3.4-52.5-15.2-72.1-34.5c-24-23.5-37.2-55.1-37.2-88.6c0-28 9.1-54.4 26.2-76.4c16.7-21.4 40.2-36.9 66.1-43.7l37.9-10l13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5c14.9-19.2 32.6-36 52.4-50c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50c15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6l37.8 10c54.2 14.4 92.1 63.7 92.1 120c0 33.6-13.2 65.1-37.2 88.6c-19.5 19.2-44.9 31.1-71.9 34.5c-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8c101.7-9.2 182.5-94 183.2-198.2c.6-93.4-62.7-172.1-148.6-194.9z"
            fill="#626262"
          />
        </svg>
        <div class="model__title heading--secondary">Server Error</div>
        <div class="model__paragraph paragraph--normal">
          Either server is down, or check your internet connection.
        </div>
      </template>
      <template v-else>
        <svg
          class="model__icon error"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          style="
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          "
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
        >
          <g fill="none">
            <path d="M7.5 9.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="#626262" />
            <path d="M13.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="#626262" />
            <path
              d="M13.562 13.39a.5.5 0 0 1-.7-.075l-.003-.003a1.91 1.91 0 0 0-.137-.137a3.069 3.069 0 0 0-.507-.37c-.461-.27-1.187-.555-2.213-.555s-1.753.284-2.216.556a3.088 3.088 0 0 0-.508.37a1.92 1.92 0 0 0-.138.137l-.003.003a.5.5 0 0 1-.777-.63l.39.314l-.39-.313v-.001l.002-.001l.002-.002l.005-.006l.014-.018l.049-.054c.04-.043.098-.102.174-.17c.152-.138.375-.316.674-.491c.6-.353 1.5-.694 2.722-.694c1.221 0 2.12.34 2.72.694c.3.176.522.353.673.49a2.907 2.907 0 0 1 .222.226l.015.017l.005.006l.002.003s.001.002-.389.314l.39-.312a.5.5 0 0 1-.078.702z"
              fill="#626262"
            />
            <path
              d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16zm-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0z"
              fill="#626262"
            />
          </g>
        </svg>
        <div class="model__title heading--secondary">
          Oops! Something went wrong
        </div>
        <div class="model__paragraph paragraph--normal">
          The issue is being resolved. Please try again later!
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleModel: false,
      statusCode: 0,
    }
  },
  methods: {
    checkModel(event) {
      // if (!event.target.closest('.model__box')) this.toggleModel = false
      this.toggleModel = false
    },
  },
  mounted() {
    this.$nuxt.$on('display-model-event', (value) => {
      this.toggleModel = value[0]
      this.statusCode = value[1]
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
  overflow: hidden;
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
  &__close {
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    path {
      fill: #333333;
      stroke: 1px;
    }
  }
  &__box {
    position: relative;
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
    margin-bottom: 1.5rem;
  }
  &__icon {
    height: 5rem;
    width: auto;
    path {
      fill: $gradient-color-1;
    }
  }
  &__icon.error {
    path {
      fill: #f44336;
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
