<template>
  <div>
    <div class="page-head_agile_info_w3l">
      <div class="container">
        <h3>
         
          <span>{{product.name}} </span>
        </h3>
        <!--/w3_short-->
        
        <!--//w3_short-->
      </div>
    </div>
    <div class="banner-bootom-w3-agileits">
      <div class="container">
        <div class="col-md-4 single-right-left">
          <div class="grid images_3_of_2">
            <div class="flexslider">
              <ul class="slides">
                <li
                  v-for="(image, index) in product.images"
                  v-bind:key="index"
                  :data-thumb="image.url"
                >
                  <div class="thumb-image">
                    <img :src="image.url" data-imagezoom="true" class="img-responsive" />
                  </div>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="col-md-8 single-right-left simpleCart_shelfItem">
          <h3>{{product.name}}</h3>
          <p>
            <span class="item_price">{{product.price}} KM</span>
          </p>
          <div class="rating1">
            <span class="starRating">
              <input id="rating5" type="radio" name="rating" value="5" />
              <label for="rating5">5</label>
              <input id="rating4" type="radio" name="rating" value="4" />
              <label for="rating4">4</label>
              <input id="rating3" type="radio" name="rating" value="3" checked />
              <label for="rating3">3</label>
              <input id="rating2" type="radio" name="rating" value="2" />
              <label for="rating2">2</label>
              <input id="rating1" type="radio" name="rating" value="1" />
              <label for="rating1">1</label>
            </span>
          </div>
          <div class="description">
            <h5>{{ product.description }}</h5>
          </div>

          <div class="col-md-6 occasional">
            <h5>Specifikacije artikla :</h5>
            <p>Boja</p>
            <li v-for="color in product.colors" v-bind:key="'color' + color.id">{{ color.name }}</li>
            <p>Brend</p>
            <li v-for="brand in product.brands" v-bind:key="'brand' + brand.id">{{brand.name}}</li>
            <p>Veličina</p>
            <li v-for="size in product.sizes" v-bind:key="'size' + size.id">{{size.name}}</li>
            <p>Stanje</p>
            <li>{{ product.condition && product.condition.name }}</li>
            <p>Tagovi</p>
            <li v-for="taggy in product.tags" v-bind:key="'tag' + taggy.id">{{taggy.name}}</li>

            <!-- <h5 v-for="ime in product.user" v-bind:key="'user.username' + ime.id">{{ime.username}}</h5> -->

            <div class="clearfix"></div>
          </div>

          
          <div class="col-md-6 responsive_tabs_agileits">
            <div id="horizontalTab">
              <div class="avatar nuxt-link-exact-active nuxt-link-active">
              <ul class="resp-tabs-list">
                <li>Pošalji poruku</li>
              </ul>
              </div>
              <div class="send-msg">
                
                <div class="resp-tabs-container">
                  <div class="tab2">
                    <div class="single_page_agile_its_w3ls">
                      <div class="bootstrap-tab-text-grids">
                        <div class="bootstrap-tab-text-grid">
                          <div class="avatar-edit-2"> 
                            <avatar :user="product.user" />
                          </div>
                      
                          <div class="user-name">
                            <h5>Korisničko ime: {{ product.user.username }}</h5>
                          </div>
                        </div>
                         <div class="not-logged-in" v-if="!user.id">
                           
                           <h1>Da bi bili u mogućnosti da pošaljete poruku morate biti prijavljeni kao korisnik moloimo Vas da izvršite prijavu. </h1>
                           <div class="button-login">
                           <Login/>
                           </div>
                           
                           </div> 

                         <div class="logged-in-msg" v-if="user.id">
                        <div class="add-review">
                          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
                        
                        <v-textarea
                        v-model="messageText"
                        placeholder="Poruka"
                        v-on:keyup.enter="sendMessage"
                        :rules="[rules.max]"
                        ></v-textarea>

                      <div class="button1">
                      <v-btn color="success" class="mr-4" @click="sendMessage">
                       <v-icon>mdi-send</v-icon>
                      </v-btn>
                      </div>
                      

                       </v-form>
                           
                          
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul class="social-nav model-3d-0 footer-social w3_agile_social single_page_w3ls">
            <li class="share">Share On :</li>
            <li>
              <a href="#" class="facebook">
                <div class="front">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div class="back">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="twitter">
                <div class="front">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div class="back">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="instagram">
                <div class="front">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div class="back">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="pinterest">
                <div class="front">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                <div class="back">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="clearfix"></div>

        <!-- /new_arrivals -->

        <!-- //new_arrivals -->
        <!--/slider_owl-->
      </div>
    </div>
    <!--//single_page-->
    <!--/grids-->
  </div>
</template>


<script>
import Avatar from "~/components/Avatar.vue";
import productQuery from "~/apollo/queries/product/products.gql";
import strapi from "~/utils/Strapi";
import Login from "~/components/Login.vue";


export default {
components: {
    Login,
    Avatar
  },
  data() {
    return {
      breadcrumb: [{ name: "Pretraga" }],
      valid: true,
      rules: {
        max: v => !v || v.length <= 1000 || "Maksimalno 1000 karaktera"
      },
      messageText: "",
      product: { colors: [{}], images: [], condition: {}, user: {} }
    };
  },
  watch: {
    product: function() {
      this.$nextTick(function() {
        $(".flexslider").flexslider({
          animation: "slide",
          controlNav: "thumbnails"
        });
      });
    }
  },

  methods: {

   async sendMessage() {
      if (
        this.$refs.form.validate() &&
        this.messageText &&
        this.messageText.length
      ) {
        let res = await strapi.createEntry("messages", {
          fromUser: this.user.id,
          toUser: this.product.user.id,
          text: this.messageText
        });

       
      }

      this.$router.push({
        path: "/poruke",
        
      });
    },
  },

  async created() {
    const res = await this.$apollo.query({
      query: productQuery,
      variables: { where: { id: this.$route.params.id } }
    });

    this.product = res.data.products[0];
    this.product.images.forEach(
      image => (image.url = process.env.CMS_URL + image.url)
    );
    this.product.userImage = process.env.CMS_URL + this.product.user.image.url;
  },

  
  mounted() {
    $("#horizontalTab").easyResponsiveTabs({
      type: "default",
      width: "auto",
      fit: true,
      closed: "accordion",
      activate: function(event) {
        var $tab = $(this);
        var $info = $("#tabInfo");
        var $name = $("span", $info);
        $name.text($tab.text());
        $info.show();
      }
    });
  },

computed: {
    user() {
      return this.$store.getters["auth/user"];
    }
  },




};
</script>

<style scoped>

.button-login {
margin-left: 125px;
margin-bottom: 15px;
}


.not-logged-in h1 {
  text-align: center;
    font-size: 15pt;
    font-style: normal;
    font-family: cursive;
    color: grey;
    padding: 33px;
}
.avatar-edit-2 {
  margin-left:40px;
}

.button1 v-btn {

  min-width: 340px !important;
}

.v-application .success {
    background-color: #008080 !important;
    border-color: #4caf50 !important;
}

.send-msg {
  max-width: 100%;
}



.resp-tab-item.resp-tab-active {
  background:#cd9865;
  width: 92%;
  border-bottom: 4px solid #cd9865;
}

.resp-tab-item.resp-tab-active::before {
border-top: 10px solid #cd9865;
}
.user-name {
  margin-left: 30px;
  padding-top: 24px;
}
</style>