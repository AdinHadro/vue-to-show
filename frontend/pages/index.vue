<template>
  <div>
    <div class="page">
      <Slider />
      <Promo />
      <Handpicked />
    </div>
    <div class="sale-w3ls">
      <div class="container">
        <h6>
          Prvi BiH web second hand portal
          <span>FASHION</span> trampa
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "~/components/Slider.vue";
import Handpicked from "~/components/Handpicked.vue";
import Promo from "~/components/Promo.vue";

export default {
  components: {
    Slider,
    Handpicked,
    Promo
  },
  mounted() {
    window.pageMounted();
  }
};
</script>
