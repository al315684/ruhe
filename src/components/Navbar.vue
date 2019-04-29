<template>
  <div class="navbar">
    <v-toolbar flat app color="#17A2B8" dark style="color: #DDF0F3">
            <v-toolbar-side-icon @click="drawer = !drawer" style="color: #DDF0F3"></v-toolbar-side-icon>
            <v-toolbar-title>
                RUHE
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat style="color: #DDF0F3">Perfil</v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary">
            <p>Holi</p>
        </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
