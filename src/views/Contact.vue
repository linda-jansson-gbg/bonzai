<template>
  <main>
    <section class="contact-page container">
      <h5>Hitta till oss</h5>
      <p>
        Vi finns i 10 olika städer runt om i Sverige. Alla hotell ser likadana
        ut och du kan välja mellan de olika uterummen på samtliga hotell.
      </p>
      <p>Använd kartan nedan för att hitta ett hotell när dig.</p>

      <div class="map-container">
        <img
          :src="require('../assets/images/' + city + '.png')"
          class="map"
          alt=""
          usemap="#workmap"
        />
        <map name="workmap">
          <area
            shape="circle"
            coords="270,275,30"
            alt="Gothenburg"
            @click="handleEvent('goteborg')"
            v-on:keyup.enter="handleEvent('goteborg')"
            tabindex="0"
          />
          <area
            shape="circle"
            coords="408,265,30"
            alt="Jonkoping"
            @click="handleEvent('jonkoping')"
            v-on:keyup.enter="handleEvent('jonkoping')"
            tabindex="0"
          />
          <area
            shape="circle"
            coords="660,90,30"
            alt="Stockholm"
            @click="handleEvent('stockholm')"
            v-on:keyup.enter="handleEvent('stockholm')"
            tabindex="0"
          />
          <area
            shape="rect"
            coords="0,0,980,400"
            @click="handleEvent('map')"
            v-on:keyup.enter="handleEvent('map')"
            alt=""
            tabindex="0"
          />
        </map>
        <img src="../assets/controls.png" class="controls" alt="" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      city: 'map',
    };
  },
  methods: {
    handleEvent(e) {
      this.city = e;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.contact-page {
  padding-bottom: 3rem;
  h5 {
    margin: 3rem 0 2rem 0;
    text-align: left;
  }
  p {
    max-width: 50%;
  }
  .map-container {
    height: 22rem;
    position: relative;
    .map {
      object-fit: cover;
      width: 100%;
      height: inherit;
    }
    .controls {
      top: 10px;
      right: 8px;
      position: absolute;
      width: 1.8rem;
    }
    area {
      cursor: pointer;
    }
  }

  @include half-to-full-page-text;
}
</style>
