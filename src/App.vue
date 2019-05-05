<template>
  <v-app style="background-color: #EFEFEF">
    <div v-if="start">
      <div style="width: 80%" class="ma-5 pa-5">
        <h1 class="display-4" style="text-align: center; color: #17a2b8; margin-left: 20rem">Iniciar sesión</h1>
        <v-form>
          <v-container style="margin: 5%; margin-left: 10%">
            <v-layout align-center justify-center row wrap>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="email"
                  append-icon="supervised_user_circle"
                  :rules="[rules.required, rules.min]"
                  hint="Mínimo 8 caracteres"
                  outline
                  color="primary"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'visibility' : 'visibility_off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  outline
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn color="#17a2b8" dark style="color: #DDF0F3" @click="start = false">Acceder</v-btn>
          </v-container>
        </v-form>
      </div>
    </div>
    <div v-else class="ma-2 pa-2">
      <Navbar/>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      email: "albaricoque@gmail.com",
      password: "albaricoque123",
      start: true,
      showPassword: false,
      showType: true,
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  }
};
</script>
<style>
</style>
