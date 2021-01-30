<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <ul class="footer__nav paragraph--small">
          <li class="footer__nav--link">
            <nuxt-link :to="{ path: '/', hash: '#features' }"
              >Features</nuxt-link
            >
          </li>
          <li class="footer__nav--link">
            <nuxt-link :to="{ path: '/', hash: '#about' }"
              >What i do?</nuxt-link
            >
          </li>
          <li class="footer__nav--link">
            <nuxt-link :to="{ path: '/', hash: '#skills' }">Skills</nuxt-link>
          </li>
          <li class="footer__nav--link">
            <nuxt-link :to="{ path: '/', hash: '#portfolio' }"
              >Portfolio</nuxt-link
            >
          </li>
          <li class="footer__nav--link">
            <nuxt-link :to="{ path: '/', hash: '#contact' }">Ping me</nuxt-link>
          </li>
        </ul>
        <ul class="footer__social-media">
          <a
            href="https://web.facebook.com/Zuhaib02/"
            target="blank"
            class="footer__social-media--icon"
          >
            <img src="~assets/svg/facebook.svg" alt="facebook" />
          </a>
          <a
            href="https://codepen.io/zuhaib_khan"
            target="blank"
            class="footer__social-media--icon"
          >
            <img src="~assets/svg/codepen.svg" alt="codepen" />
          </a>
          <a
            href="https://www.instagram.com/im_zoheb/"
            target="blank"
            class="footer__social-media--icon"
          >
            <img src="~assets/svg/instagram.svg" alt="instagram" />
          </a>
          <a
            href="https://stackoverflow.com/users/11512006/zuhaib-khan"
            target="blank"
            class="footer__social-media--icon"
          >
            <img src="~assets/svg/stackoverflow.svg" alt="stackoverflow.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/zohaib-khan-96a3841b5/"
            target="blank"
            class="footer__social-media--icon"
          >
            <img src="~assets/svg/linkedin.svg" alt="linkedin" />
          </a>
        </ul>
      </div>
      <div class="footer__copyright paragraph--small">
        2021 &copy; all copyrights are reserved by Zohaib Khan
      </div>
    </div>
  </footer>
</template>
