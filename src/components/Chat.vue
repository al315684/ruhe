<template>
  <div class="ma-5">
    <v-container fluid style="background-color: rgba(23, 162, 184, 0.1)" class="mt-5 pt-5">
      <v-layout>
        <v-flex xs12 md12 class="ma-3 pa-3" style="background-color: rgba(23, 162, 184, 0.3); border-radius: 15px">
          <div class="text-xs-left">
            <v-chip style="font-size: 1.3rem">
              <v-avatar color="primary">A</v-avatar> Psicólogo X
            </v-chip>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-3">
          <v-flex xs12 md12 v-for="(message, index) in messagesEmisor" :key="index" class="ma-1 pa-1">
            <v-card color="primary" flat style="border-radius: 15px; float: right">
                <v-card-title>{{message}}</v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md12 v-for="(message, index) in messageReceptor" :key="index" class="ma-1 pa-1">
            <v-card color="rgba(23, 162, 184, 0.4)" flat style="border-radius: 15px; float: left">
                <v-card-title>{{message}}</v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout>
          <v-flex xs12 md12 class="ma-2 pa-2">
              <v-text-field label="Escribe el siguiente mensaje" append-icon="message"></v-text-field>
          </v-flex>
      </v-layout>
  </div>
</template>
<script>
export default {
    data () {
        return {
            messagesEmisor: ['Hola', 'Gracias por atenderme. Ha sido dificil encontrar a alguien como usted', '¿Cuando podríamos hablar? Es una situación demasiado difícil y necesitamos ayuda cuanto antes'],
            messageReceptor: ['Hola', 'Encantado de ayudarte', 'Cuando quieras']
        }
    }
}
</script>

