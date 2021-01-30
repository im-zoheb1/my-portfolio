<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact__content">
        <div class="contact__discr">
          <h1 data-aos="fade-up" class="contact__discr--title heading--primary">
            Get in touch
          </h1>
          <div
            data-aos="fade-up"
            class="contact__discr--description paragraph--normal"
          >
            Do you have a project on your mind? Do you want to make your
            business grow or look awesome? Contact me and I'll help you to bring
            your ideas to life
          </div>
          <ul class="contact__discr--list">
            <li data-aos="fade-up" class="contact__discr--list-item">
              <img
                class="contact__discr--list-icon"
                src="~assets/svg/whatsapp.svg"
              />
              <div class="contact__discr--list-text paragraph--normal">
                +923436113530
              </div>
            </li>
            <li data-aos="fade-up" class="contact__discr--list-item">
              <img
                class="contact__discr--list-icon"
                src="~assets/svg/email.svg"
              />
              <div class="contact__discr--list-text paragraph--normal">
                zuhaibkhan.pakistan@gmail.com
              </div>
            </li>
          </ul>
        </div>
        <form data-aos="fade" class="contact__form" @submit.prevent="contact">
          <h2 class="contact__form--title heading--secondary">Contact me</h2>
          <input
            class="contact__form--input form--input form--input--text"
            type="text"
            placeholder="First name"
            required
            v-model="name"
          />
          <input
            class="contact__form--input form--input form--input--text"
            type="email"
            required
            validator
            placeholder="Email address"
            v-model="email"
          />
          <textarea
            class="contact__form--textarea form--input form--input--textarea"
            required
            rows="6"
            placeholder="Message"
            v-model="message"
          ></textarea>
          <button
            v-if="!loading"
            class="contact__form--btn form--btn"
            type="submit"
          >
            Send
          </button>
          <button
            v-else
            disabled
            class="contact__form--btn form--btn"
            type="submit"
          >
            <div class="loader"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    // clear credentials method
    clearCredentials() {
      this.name = ''
      this.email = ''
      this.message = ''
    },
    // emit the event method
    emitModel(status) {
      this.$nuxt.$emit('display-model-event', [true, status])
      setTimeout(() => {
        this.$nuxt.$emit('display-model-event', [false, status])
      }, 3000)
    },
    // sending the email
    contact() {
      // the credentials of contact form
      const credentials = {
        name: this.name,
        email: this.email,
        subject: "Mail from Zohaib's portfolio",
        message: this.message,
      }
      this.loading = true
      this.$axios
        .post('https://contactupapi.herokuapp.com/contact_us', credentials)
        .then(({ status }) => {
          this.loading = false
          this.emitModel(status)
          this.clearCredentials()
        })
        .catch(({ response }) => {
          this.loading = false
          this.emitModel(response.status)
        })
    },
  },
}
</script>
