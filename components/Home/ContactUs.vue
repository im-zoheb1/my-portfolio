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
            rows="6"
            placeholder="Message"
            v-model="message"
          ></textarea>
          <button class="contact__form--btn form--btn" type="submit">
            Send
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
      name: null,
      email: null,
      message: null,
    }
  },
  methods: {
    contact() {
      console.log('submit method executed')
      const credentials = {
        name: this.name,
        email: this.email,
        subject: "Mail from Zohaib's portfolio",
        message: this.message,
      }
      console.log(credentials)
      this.$axios
        .post('https://contactupapi.herokuapp.com/contact_us', credentials)
        .then(() => {
          console.log('thanks for contacting')
        })
        .catch((err) => {
          console.log('error contacting')
        })
    },
  },
}
</script>
