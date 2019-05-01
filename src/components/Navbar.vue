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
            <v-list>
              <v-list-tile v-for="(option, index) in options" :key="index" router :to="option.link">
                <v-list-tile-content>
                  <v-list-tile-title class="light-blue--text text--lighten-4" style="font-size: 1.55rem">{{ option.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
        </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      options: [ { name: 'Informes', link: '/reports' },
                 { name: 'Pacientes', link: '/patients'} ]
    }
  }
}
</script>
