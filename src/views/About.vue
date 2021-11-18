<template>
  <main>
    <header class="about-hero"><h1>Om bonz.ai</h1></header>
    <section class="two-column-container container main">
      <article class="about">
        <h5 tabindex="0">Om bonz.ai</h5>
        <p>
          bonz.ai är ett helt nytt, unikt och högteknologiskt koncept. Genom den
          nya Lorem ipsum-teknologin har du nu möjlighet att få nästan vilken vy
          du vill framför dig. Stå bara på laddningsplattan, säg bonz.ai och
          välj sedan ett av våra uterumsalternativ. (Fler uterum skapas med
          tiden.)
        </p>
        <p>
          Alla innerum är dessutom utrustade med denna nya teknologi vilket gör
          att du var som helst inne i rummet kan säga bonz.ai och sedan be om,
          vad du nu än vanligtvis skulle använda telefonen för att be om.
          “bonz.ai, jag vill ha nya handdukar”, “bonz.ai, kan jag få en caffe
          latte.”.
        </p>
      </article>

      <aside><img src="../assets/bigicon.png" alt="" /></aside>
    </section>
    <Cards />
  </main>
</template>

<script>
import Cards from '@/components/Cards.vue';

export default {
  name: 'About',
  components: {
    Cards,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.about-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../assets/hero.jpeg') center center;
  @include hero;
}
.two-column-container {
  @include vertical-center;
  min-height: 20rem;
  justify-content: space-between;
  padding: 2rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 870px) {
    justify-content: center;
  }
  .about {
    max-width: 40rem;
  }
  aside {
    padding: 3rem;
    img {
      max-width: 12rem;
    }
  }
}
</style>
