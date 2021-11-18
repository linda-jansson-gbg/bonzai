<template>
  <section class="book-container container">
    <div>
      <p class="label">Incheckning</p>
      <div class="select focus-only" tabindex="0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"
            fill="#2E3A59"
          />
        </svg>
        <input
          type="date"
          id="start"
          name="trip-start"
          value="åååå-mm-dd"
          min="2021-11-01"
          max="2022-12-31"
        />
      </div>
    </div>

    <div>
      <p class="label">Utcheckning</p>
      <div class="select focus-only" tabindex="0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"
            fill="#2E3A59"
          />
        </svg>
        <input
          type="date"
          id="end"
          name="trip-end"
          value="åååå-mm-dd"
          min="2021-11-01"
          max="2022-12-31"
        />
      </div>
    </div>
    <div>
      <p class="label">Rum och personer</p>
      <div class="select focus-only" tabindex="0">
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5C13 7.76142 10.7614 10 8 10C5.23858 10 3 7.76142 3 5ZM8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
            fill="#2E3A59"
          />
          <path
            d="M2.34315 13.3431C0.842855 14.8434 0 16.8783 0 19H2C2 17.4087 2.63214 15.8826 3.75736 14.7574C4.88258 13.6321 6.4087 13 8 13C9.5913 13 11.1174 13.6321 12.2426 14.7574C13.3679 15.8826 14 17.4087 14 19H16C16 16.8783 15.1571 14.8434 13.6569 13.3431C12.1566 11.8429 10.1217 11 8 11C5.87827 11 3.84344 11.8429 2.34315 13.3431Z"
            fill="#2E3A59"
          />
        </svg>
        <p>1 rum, 1 vuxen</p>
        <img
          src="../assets/arrow-down.svg"
          class="arrow-btn"
          alt=""
          tabindex="0"
          @click="toggleRoomSelect"
          v-on:keyup.enter="toggleRoomSelect"
          v-on:blur="hideRoomSelect"
        />
      </div>
      <div class="room-select-overlay" v-if="showOption">
        <div class="select option">
          <p>1 rum, 1 vuxen</p>
        </div>
        <div class="select option white">
          <p>1 rum, 2 vuxna</p>
        </div>
      </div>
    </div>
    <button v-if="msg === 'boka'" @click="showOverlay = true">{{ msg }}</button>
    <button v-else @click="$router.push('book')">{{ msg }}</button>
    <section v-if="showOverlay" class="overlay">
      <article>
        <h1>Tyvärr</h1>
        <h3>
          bonz.ai är än sålänge inte på riktigt<br />
          vi jobbar hårt på teknologin
        </h3>
        <p>...titta in om ett år igen så kanske det har hänt saker</p>
        <button @click="showOverlay = false">okej</button>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      showOption: false,
      showOverlay: false,
    };
  },
  methods: {
    toggleRoomSelect() {
      this.showOption = !this.showOption;
    },
    hideRoomSelect() {
      this.showOption = false;
    },
  },
};
</script>

<style lang="scss">
input {
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 1rem;
  background: $white;
}
input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 1;
  display: block;
  background-image: url('../assets/arrow-down.svg');
  background-repeat: no-repeat;
  background-size: 160%;
  background-position: center center;
}
input[type='date']::-webkit-calendar-picker-indicator:focus-visible {
  outline: 3px solid $green;
}
.arrow-btn:focus-visible {
  outline: 3px solid $green;
  outline-offset: -3px;
}
.room-select-overlay {
  position: absolute;
}
.overlay {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  position: absolute;
  top: 0;
  left: 0;
  @include column-center;
  article {
    width: 60%;
    height: 60%;
    background: $white;
    @include column-center;
    justify-content: space-between;
    text-align: center;
    padding: 4rem;
    button {
      margin-bottom: 3rem;
    }
  }
}
</style>
