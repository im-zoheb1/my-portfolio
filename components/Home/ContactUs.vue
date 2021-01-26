<template>
  <section class="contact">
    <div class="container">
      <div class="contact__content">
        <div class="contact__discr">
          <h1 class="contact__discr--title heading--primary">Get in touch</h1>
          <div class="contact__discr--description paragraph--normal">
            Do you have a project on your mind? Do you want to make your
            business grow or look awesome? Contact me and I'll help you to bring
            your ideas to life
          </div>
          <ul class="contact__discr--list">
            <li class="contact__discr--list-item">
              <img
                class="contact__discr--list-icon"
                src="~assets/svg/whatsapp.svg"
              />
              <div class="contact__discr--list-text paragraph--normal">
                +923436113530
              </div>
            </li>
            <li class="contact__discr--list-item">
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
        <form class="contact__form">
          <h2 class="contact__form--title heading--secondary">Contact me</h2>
          <input
            class="contact__form--input form--input form--input--text"
            type="text"
            placeholder="First name"
          />
          <input
            class="contact__form--input form--input form--input--text"
            type="text"
            placeholder="Email address"
          />
          <textarea
            class="contact__form--textarea form--input form--input--textarea"
            rows="6"
            placeholder="Message"
          ></textarea>
          <button class="contact__form--btn form--btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
