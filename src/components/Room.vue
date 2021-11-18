<template>
  <section class="images container">
    <img
      v-for="(room, index) in rooms"
      :key="index"
      :src="require('../assets/images/' + room.url)"
      :alt="room.title"
    />
  </section>
</template>

<script>
export default {
  props: {
    rooms: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.images {
  padding: 0 2rem 3rem;
  img:first-child {
    grid-column: auto / span 4;
    grid-row: auto / span 2;
    height: 21.3rem;
  }
  img {
    grid-column: auto / span 2;
    object-fit: cover;
    width: 100%;
    height: 10rem;
  }
  @include layout-grid;
}
</style>
