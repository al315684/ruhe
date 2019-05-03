<template>
  <v-app style="background-color: #EFEFEF">
    <div class="ma-2 pa-2">
      <Navbar/>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
