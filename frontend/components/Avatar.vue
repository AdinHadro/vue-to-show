<template>
  <client-only>
    <nuxt-link tag="div" class="avatar" v-bind:class="{'avatar-hover':hover}" :to="`/tramperi/${user.username}`" exact>
        <div class="image-wrapper">
          <img v-if="!image" src="~/assets/images/user.png" />
          <img v-if="image" :src="image" />
        </div>
    </nuxt-link>
  </client-only>
</template>

<script>
export default {
  props: {
    hover: false,
    user: {}
  },
  computed: {
    image: function() {
      return this.user && this.user.image && this.user.image.url
        ? process.env.CMS_URL + this.user.image.url
        : "";
    }
  }
};
</script>