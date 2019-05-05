<template>
  <div class="navbar">
    <v-toolbar flat app color="#17A2B8" dark style="color: #DDF0F3">
            <v-toolbar-side-icon @click="drawer = !drawer" style="color: #DDF0F3"></v-toolbar-side-icon>
            <v-toolbar-title>
                <v-btn flat router :to="index" style="color: #DDF0F3; font-size: 1.875rem">RUHE</v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="text-xs-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    v-on="on"
                    style="color: #DDF0F3"
                    flat
                  >
                    Perfil
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in items"
                    :key="index"
                    router :to="item.link"
                  >
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </div>
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
      index: "/",
      drawer: false,
      options: [ { name: 'Informes', link: '/reports' },
                 { name: 'Pacientes', link: '/patients'},
                 { name: 'Psicólogos', link: '/psycologists'},
                 { name: 'Chats', link: '/chat'} ],
      items: [
        { title: 'Perfil', link: '/' },
        { title: 'Cerrar sesión', link: '/' }
      ]
    }
  }
}
</script>
