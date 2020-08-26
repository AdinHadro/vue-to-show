<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">Prijava</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Prijava</v-card-title>

      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="identifier"
            label="Korisničko ime ili email"
            :rules="[rules.valid]"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.valid]"
            name="input-10-1"
            label="Šifra"
            @click:append="showPassword = !showPassword"
            v-on:keyup.enter="handleSubmit"
          ></v-text-field>
          <v-checkbox class="accept" v-model="rememberMe" label="Zapamti me?"></v-checkbox>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" color="success" class="mr-4" @click="handleSubmit">
          <v-progress-circular v-if="loading" indeterminate color="white"></v-progress-circular>
          <span v-if="!loading">Prijavi se</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import strapi from "~/utils/Strapi";


export default {
    data() {
    return {
      identifier: "",
      password: "",
      rememberMe: true,
      loading: false,
      showPassword: false,
      dialog: false,
      valid: true,
      rules: {
        valid: () => this.valid || "Pogrešan email/korisničko ime ili šifra"
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.valid = true;
        this.$refs.form.validate();
        this.loading = true;
        const response = await strapi.login(this.identifier, this.password);
        this.loading = false;
        this.setUser({
          user: response.user,
          rememberMe: this.rememberMe,
          $apolloHelpers: this.$apolloHelpers
        });
        this.dialog = false;
        this.valid = true;
      } catch (err) {
        this.valid = false;
        this.$refs.form.validate();
      }
      this.loading = false;
    },
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>