<template>
  <footer id="footer" tabindex="0">
    <section class="container">
      <section class="info">
        <h4>bonz.ai coorporation</h4>
        <p>Stora gatan 24<br />658 34 Köping</p>
        <p>Org.nr 9375773903</p>
        Tel: <a href="tel:+766-779 999 99">766-779 999 99</a><br />
        Mail: <a href="mailto:info@bonz.ai">info@bonz.ai</a>
      </section>
      <section class="social">
        <a href="https://www.facebook.com/" target="_blank"
          ><img src="../assets/fb.png" alt="follow us on facebook"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img src="../assets/insta.png" alt="follow us on instagram"
        /></a>
      </section>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background: $darkGrey;
  color: $white;
  width: 100%;
  padding: 3rem 0;
  a {
    text-decoration: none;
    color: $white;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .info {
    p {
      margin: 1.2rem 0;
    }
  }
  .social {
    img {
      width: 42px;
      margin-left: 2rem;
    }
  }
  @media only screen and (max-width: 428px) {
    .container {
      align-items: center;
    }
    .social {
      display: flex;
      flex-direction: column-reverse;
      img {
        padding: 1rem 0;
      }
    }
  }
}
</style>
