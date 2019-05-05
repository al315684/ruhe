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
              <v-divider class="mt-4"></v-divider>
              <div class="mt-5">
                <p style="font-size: 1.55rem" class="light-blue--text text--lighten-4 text-xs-center">Notificaciones</p>
                <v-card flat class="ma-2 pa-2" color="#DDF0F3">
                  <div>
                    <span style="float: left; font-size: 1.2rem; color: #17A2B8; margin-left: 0.5rem">Nuevo informe</span>
                    <span style="float: right" class="font-weight-bold">07:39</span>
                  </div>
                  <br>
                  <br>
                  <div>
                    <span style="font-size: 1.3rem; text-align: left; color: #17A2B8">0415EGP.jpg</span>
                  </div>
                </v-card>
              </div>
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
                 { name: 'Psicólogos', link: '/psychologists'},
                 { name: 'Chats', link: '/chat'} ],
      items: [
        { title: 'Perfil', link: '/' },
        { title: 'Cerrar sesión', link: '/' }
      ]
    }
  }
}
</script>
