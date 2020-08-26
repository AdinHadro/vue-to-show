export default {
  mode: "universal",
  head: {
    title: "The Fashion Trampa",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,900,900italic,700italic"
      }
    ],
    script: [
      { src: "/js/jquery-2.1.4.min.js" },
      { src: "/js/jquery-ui.js" },
      { src: "/js/modernizr.custom.js" },
      { src: "/js/easy-responsive-tabs.js" },
      { src: "/js/responsiveslides.min.js" },
      { src: "/js/jquery.waypoints.min.js" },
      { src: "/js/jquery.countup.js" },
      { src: "/js/move-top.js" },
      { src: "/js/jquery.easing.min.js" },
      { src: "/js/bootstrap.js" },
      { src: "/js/bootstrap-dropdownhover.min.js" },
      { src: "/js/imagezoom.js" },
      { src: "/js/jquery.flexslider.js" },
      { src: "/js/trampa.js" }
    ]
  },
  loading: { color: "#fff" },
  css: [
    "@/assets/css/jquery-ui.css",
    "@/assets/css/bootstrap.css",
    "@/assets/css/font-awesome.css",
    "@/assets/css/easy-responsive-tabs.css",
    "@/assets/css/bootstrap-dropdownhover.min.css",
    "@/assets/css/flexslider.css",
    "@/assets/css/style.css"
  ],
  plugins: [{ src: "~/plugins/timeago.js", ssr: false }],
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-154970443-1"
      }
    ]
  ],
  modules: [
    "@nuxtjs/apollo",
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-8644912652068983"
      }
    ]
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://admin.fashiontrampa.ba/graphql",
        tokenName: "jwt",
        authenticationType: "Bearer"
      }
    }
  },
  build: {
    extend(config, ctx) {}
  },
  env: {
    CMS_URL: "https://admin.fashiontrampa.ba"
  },
  debug: {
    enabled: true,
    sendHitTask: true
  }
};
