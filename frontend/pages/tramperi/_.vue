<template>
  <div class="container">
    <div v-if="!loading">
      <div v-for="product in products" v-bind:key="product.id">
        <Product :product="product" :size="3" />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import productsQuery from "~/apollo/queries/product/products";
import Product from "../../components/Product";

export default {
  components: {
    Product
  },
  data() {
    return {
      loading: false,
      products: []
    };
  },
  watch: {},
  async created() {
    this.loadProducts();
  },
  mounted() {},
  methods: {
    async loadProducts() {
      const name = this.$route.path.toLowerCase().replace("/tramperi/", "");
      this.loading = true;
      const req = {
        query: productsQuery,
        variables: {
          where: {
            user: {
              username: name
            },
            _sort: "updated_at:DESC"
          },
          limit: 100,
          start: 0
        }
      };

      this.products = (await this.$apollo.query(req)).data.products;
      this.loading = false;
    }
  }
};
</script>