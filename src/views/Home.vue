<template>
  <main>
    <header class="home-hero">
      <h1>Upplev dina drömmar hos bonz.ai</h1>
      <section class="buttons">
        <button @click="$router.push('about')">läs mer</button>
        <button @click="$router.push('book')" class="white-btn">boka nu</button>
      </section>
    </header>
    <section class="container">
      <Booking msg="sök" />
      <article class="info">
        <h5 tabindex="0">Modernt och stilrent rum nästan var du vill</h5>
        <p>
          Slappna av och ladda batterierna framför stilla Kolsjön i Norrland, på
          stranden i Maldiverna eller blå lagunen på Island.<br />Hos oss kan du
          vara där dina drömmar är. Gå bara ut till laddplatsen och säg bonz.ai.
        </p>
      </article>
    </section>

    <Room v-bind:rooms="rooms" />
  </main>
</template>

<script>
// @ is an alias to /src
import Booking from '@/components/Booking.vue';
import Room from '@/components/Room.vue';

export default {
  name: 'Home',
  components: {
    Booking,
    Room,
  },
  data() {
    return {
      rooms: [
        { title: 'uteplats', url: '09-day.jpg' },
        { title: 'inomhus trappa', url: '01-night.jpg' },
        { title: 'inomhus mot uteplats', url: '07-day.jpg' },
        { title: 'inomhus soffa', url: '05-day.jpg' },
        { title: 'inomhus säng', url: '04-day.jpg' },
        { title: 'inomhus mot uteplats', url: '08-day.jpg' },
        { title: 'inomhus mot uteplats öppen spis kväll', url: '02-night.jpg' },
        { title: 'inomhus öppen spis kväll', url: '07-night.jpg' },
        { title: 'inomhus från sängen mot vattnet', url: '03-day.jpg' },
        { title: 'inomhus mot uteplats', url: '02-day.jpg' },
        { title: 'inomhus med trappa', url: '06-day.jpg' },
        { title: 'inomhus från sängen mot vattnet kväll', url: '03-night.jpg' },
        { title: 'inomhus säng kväll', url: '04-night.jpg' },
      ],
    };
  },
  methods: {
    goTo() {
      this.$router.push('about');
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.home-hero {
  @include hero;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url('../assets/hero-start.jpeg') center right;
  background-size: 120%;
  h1 {
    max-width: 50rem;
  }
  button {
    margin: 2.5rem 1rem 1rem;
  }
}
@media only screen and (max-width: 428px) {
  main .info {
    text-align: center;
  }
}
</style>
