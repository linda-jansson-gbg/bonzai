<template>
  <section v-if="showLanding" id="app">
    <section class="landing">
      <img
        src="./assets/clear.svg"
        class="clear"
        alt=""
        @click="closeLanding"
        v-on:keyup.enter="closeLanding"
        tabindex="0"
      />
      <h1>Just say bonz.ai</h1>
      <img src="./assets/logo.png" class="logo" alt="" />
    </section>
  </section>
  <section v-else id="app">
    <div class="skip-link">
      Gå direkt till <a href="#goto">textinnehållet</a> eller
      <a href="#footer">botten av sidan</a>
    </div>
    <section class="navigation">
      <section class="container">
        <nav>
          <router-link class="nav-link" to="/"
            ><img src="./assets/menu-logo.png" alt="bonz.ai"
          /></router-link>
          <router-link class="nav-link" to="/rooms">våra uterum</router-link>
          <router-link class="nav-link" to="/about">om hotellet</router-link>
          <router-link class="nav-link" to="/contact">kontakt</router-link>
          <router-link class="nav-link" to="/book">boka</router-link>
        </nav>
      </section>
    </section>
    <section class="mobile-nav">
      <img
        src="./assets/menu.png"
        @click="toggleMenu"
        class="menu-button"
        alt="bonz.ai"
      />
      <router-link to="/"
        ><img class="logo" src="./assets/menu-logo.png" alt="bonz.ai"
      /></router-link>
    </section>
    <section class="menu-items" v-if="showNav">
      <ul @click="toggleMenu">
        <li>
          <router-link class="nav-link" to="/rooms">våra uterum</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">om hotellet</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/contact">kontakt</router-link>
        </li>
        <li><router-link class="nav-link" to="/book">boka</router-link></li>
      </ul>
    </section>
    <span id="goto"></span>
    <router-view />

    <Footer />
  </section>
</template>
<script>
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Footer,
  },
  data() {
    return {
      showNav: false,
      showLanding: true,
    };
  },
  methods: {
    toggleMenu() {
      this.showNav = !this.showNav;
    },
    closeLanding() {
      this.showLanding = false;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="scss">
.landing {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background: url('./assets/images/bonzai.png') center center $white no-repeat;
  background-size: 25rem;
  z-index: 2000;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h1 {
    margin-top: 7rem;
  }
  .clear {
    position: absolute;
    top: 0;
    right: 0;
    margin: 3rem 3rem 0 0;
    cursor: pointer;
  }
  .logo {
    width: 8rem;
    position: absolute;
    right: 3rem;
    bottom: 20%;
  }
  @media only screen and (max-width: 375px) {
    background-size: 15rem;
    h1 {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 414px) {
    h1 {
      font-size: 48px;
    }
  }
  @media only screen and (max-width: 596px) {
    .logo {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 10%;
      margin: 0 auto;
    }
  }
}
.skip-link {
  background: $darkGrey;
  color: $white;
  line-height: 3rem;
  width: 100%;
  position: absolute;
  z-index: 2000;
  transform: translateY(-100%);
  transition: transform 0.3s;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.1em;
  a {
    color: $white;
  }
}
.skip-link:focus-within {
  transform: translateY(0%);
}
/** hidden block to skip navigation */
#goto {
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
}
/** navigation */
.navigation {
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid $lightGrey;
  position: fixed;
  background: $white;
  z-index: 1000;
  @include vertical-center;
  section {
    width: 100%;
  }
  nav {
    @include vertical-center;
    justify-content: flex-end;
    img {
      width: 132px;
      margin-right: auto;
    }
  }
}
.nav-link {
  text-transform: uppercase;
  color: $darkGrey;
  text-decoration: none;
  margin: 0 0 0 2rem;
  font-weight: 500;
  &:first-child {
    margin: 0 auto 0 0;
  }
  &.router-link-exact-active {
    color: $green;
  }
}
.mobile-nav {
  height: 5rem;
  padding: 0 2rem;
  display: none;
  position: fixed;
  width: 100%;
  background: $white;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $lightGrey;
  z-index: 1000;
  .menu-button {
    width: 30px;
  }
  .logo {
    width: 132px;
    padding-right: 4rem;
  }
}
.menu-items {
  z-index: 100;
  position: fixed;
  width: 100%;
  background: $white;
  top: 5.1rem;
  display: none;
  ul {
    list-style: none;
    li {
      height: 60px;
      padding: 0 1.2rem;
      border-bottom: 1px solid $lightGrey;
      display: flex;
      align-items: center;
    }
  }
}
@media only screen and (max-width: 596px) {
  .navigation {
    display: none;
  }
  .mobile-nav {
    display: flex;
  }
  .menu-items {
    display: block;
  }
}
@media only screen and (min-width: 596px) {
}
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
