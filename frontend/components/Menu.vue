[<template>
  <client-only>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div
          class="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          data-hover="dropdown"
          data-animations="fadeInDown fadeInRight fadeInUp fadeInLeft"
        >
          <ul class="nav navbar-nav">
            <li class="dropdown" v-for="category in categories" v-bind:key="category.id">
              <nuxt-link
                tag="a"
                :to="category.url"
                aria-expanded="false"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                exact
              >
                {{ category.name }}
                <span class="caret"></span>
              </nuxt-link>
              <ul class="dropdown-menu dropdownhover-bottom" role="menu">
                <li class="dropdown" v-for="sub in category.subCategories" v-bind:key="sub.id">
                  <nuxt-link tag="a" :to="sub.url" aria-expanded="false" exact>
                    {{ sub.name }}
                    <span v-if="sub.subCategories.length" class="caret"></span>
                  </nuxt-link>
                  <ul class="dropdown-menu dropdownhover-right">
                    <li v-for="subsub in sub.subCategories" v-bind:key="subsub.id">
                      <nuxt-link tag="a" :to="subsub.url" exact>{{subsub.name}}</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </client-only>
</template>

<script>
import { mapMutations } from "vuex";
import categoriesQuery from "~/apollo/queries/category/categories";

export default {
  data() {
    return {
      categories: [],
      query: ""
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  },
  watch: {
    categories: function() {
      this.$nextTick(function() {
        $(document).on("click touchend", function(e) {
          if ($(e.target).closest(".navbar").length == 0) {
            var opened = $(".navbar-collapse").hasClass("collapse in");
            if (opened === true) {
              $(".navbar-collapse").collapse("hide");
            }
          }
        });
      });
    }
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>