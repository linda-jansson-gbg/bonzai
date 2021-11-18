<template>
  <main class="rooms">
    <span id="goto"></span>
    <section class="container">
      <h5 tabindex="0">
        Välj mellan vita stränder, vita snöfjäll, gröna landskap eller höga
        skyskrapor. Hos oss på bonz.ai kan du få vyerna du alltid drömt om.
      </h5>
      <section class="all-rooms">
        <SingleRoom v-bind:rooms="rooms" @handleClick="handleClick" />
      </section>
    </section>
  </main>
</template>

<script>
import SingleRoom from '@/components/SingleRoom.vue';

export default {
  name: 'Rooms',
  components: {
    SingleRoom,
  },
  data() {
    return {
      rooms: [
        { title: 'Maldiverna', url: 'maldives4.jpg', clickable: true },
        { title: 'Kenya', url: 'kenya.jpeg', clickable: false },
        { title: 'Island', url: 'island.jpeg', clickable: false },
        { title: 'New York', url: 'newyork.jpeg', clickable: false },
        { title: 'Charmonix', url: 'charmonix.jpeg', clickable: false },
        { title: 'Jukkasjärvi', url: 'jukkasjarvi.jpeg', clickable: false },
      ],
    };
  },
  methods: {
    handleClick(e) {
      if (e === 'Maldiverna') this.$router.push({ path: 'book' });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.rooms {
  h5 {
    margin: 3rem 0;
  }
}
</style>
