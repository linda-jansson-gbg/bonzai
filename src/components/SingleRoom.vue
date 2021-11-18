<template>
  <section>
    <article class="room" v-for="(room, index) in rooms" :key="index">
      <figure>
        <img :src="require('../assets/images/' + room.url)" :alt="room.title" />
      </figure>
      <aside>
        <header>
          <h3>{{ room.title }}</h3>
          <h5>3000 kr/natt</h5>
        </header>
        <p>
          Donizzle bling bling auctor mauris. Phasellus daahng dawg elizzle ut
          nibh go to hizzle tincidunt. Dope a erat. Vestibulum in lacizzle ass
          gangster pot tristique. Tellivizzle bling bling tortor sizzle amet
          black ultrices porta. In uhuh ... yih! mammasay mammasa mamma oo sa,
          ultricies nizzle, hendrerizzle pizzle, adipiscing quis, dawg. Etiam
          velizzle leo, aliquizzle fo, pharetra pizzle, dictizzle go to hizzle,
          mofo. Vivamizzle da bomb. Crizzle lorizzle.
        </p>
        <div>
          <button>läs mer</button
          ><button class="invert" @click="$emit('handleClick', room.title)">
            boka nu
          </button>
        </div>
      </aside>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    rooms: Array,
  },
};
</script>

<style lang="scss">
.room {
  min-height: 20rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    object-fit: cover;
    width: 100%;
    height: 20rem;
  }
  figure {
    width: 49%;
  }
  aside {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 49%;
    height: 20rem;
    header {
      @include vertical-center;
      justify-content: space-between;
      width: 100%;
      h5 {
        margin: 0;
      }
    }
    button {
      margin: 0 2rem 0 0;
    }
  }
}
@media only screen and (max-width: 870px) {
  .room {
    flex-direction: column;
    margin-bottom: 2rem;
    figure,
    aside {
      width: 100%;
    }
    aside div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        margin: 0;
      }
    }
  }
}
@media only screen and (max-width: 428px) {
  h5 {
    text-align: center;
  }
  .room {
    //margin-bottom: 3rem;
    h3 {
      font-family: 'Quicksand', sans-serif;
      font-size: 22px;
      font-weight: 500;
      margin: 0.5rem 0;
    }
  }
}
</style>
