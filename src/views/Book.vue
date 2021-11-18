<template>
  <main>
    <section class="book-page">
      <section class="container">
        <Booking msg="boka" />
      </section>
      <section class="container">
        <header>
          <h3>Maldiverna</h3>
          <h5>3000 kr/natt</h5>
        </header>
        <p>
          Mammasay mammasa mamma oo sa, ultricies nizzle, hendrerizzle pizzle,
          adipiscing quis, dawg. Etiam velizzle leo, aliquizzle fo, pharetra
          pizzle, dictizzle go to hizzle, mofo. Vivamizzle da bomb. Crizzle
          lorizzle.
        </p>
      </section>
      <Room v-bind:rooms="rooms" />
    </section>
  </main>
</template>

<script>
import Booking from '@/components/Booking.vue';
import Room from '@/components/Room.vue';

export default {
  name: 'Book',
  components: {
    Booking,
    Room,
  },
  data() {
    return {
      rooms: [
        { title: 'maldiverna strand', url: 'maldives4.jpg' },
        { title: 'maldiverna strand med solskydd', url: 'maldives3.jpg' },
        {
          title: 'maldiverna strand utsikt mot vattenbungalows',
          url: 'maldives2.jpg',
        },
        { title: 'maldiverna strand palmgunga', url: 'maldives1.jpg' },
        { title: 'inomhus öppen spis kväll', url: '01-night.jpg' },
        { title: 'inomhus mot uteplats', url: '07-day.jpg' },
        { title: 'inomhus soffa', url: '05-day.jpg' },
        { title: 'inomhus säng', url: '04-day.jpg' },
        { title: 'inomhus mot uteplats', url: '08-day.jpg' },
        { title: 'inomhus mot uteplats öppen spis kväll', url: '02-night.jpg' },
        { title: 'inomhus öppen spis kväll', url: '07-night.jpg' },
        { title: 'inomhus från sängen mot vattnet', url: '03-day.jpg' },
        { title: 'inomhus mot uteplats', url: '02-day.jpg' },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.book-page {
  .container {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  p {
    max-width: 50%;
  }
  @include half-to-full-page-text;
}
</style>
