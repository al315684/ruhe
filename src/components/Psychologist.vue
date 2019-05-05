<template>
  <div id="patient" class="ma-4 pa-4">
    <v-breadcrumbs :items="items" large>
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="mt-2 pt-2">
      <v-btn color="#17a2b8" dark style="color: #DDF0F3" router :to="reports">Informes del paciente</v-btn>
    </div>
    <v-container fluid style="background-color: rgba(23, 162, 184, 0.2)" class="mt-5 pt-5">
      <v-layout row wrap>
        <v-flex xs12 md12>
          <div class="ma-2 pa-2" style="background-color: #DDF0F3; border-radius: 10px">
            <span style="font-size: 1.5rem">Para: </span> {{ psychologist }}
          </div>
          <div class="ma-2 pa-2" style="background-color: #DDF0F3; border-radius: 10px">
            <p>Descripción</p>
            <v-textarea
              outline
              color="primary"
              name="input-7-4"
              value="Escribe aquí..."
              class="ma-2 pa-2"
        ></v-textarea>
          <v-btn color="#17a2b8" dark style="color: #DDF0F3" router :to="here">Aceptar</v-btn>
          <v-btn color="#17a2b8" dark style="color: #DDF0F3" router :to="here">Cancelar</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
        here: "/chat",
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Psicólogos",
          disabled: false,
          href: "/psychologists"
        },
        {
          text: "Psicólogo X",
          disabled: true,
          href: "/psychologists/id"
        }
      ]
    };
  }
};
</script>