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
        <v-flex xs12 md6 v-for="(info, index) in information" :key="index" class="pa-1">
          <v-icon class="mx-2">{{info.icon}}</v-icon>
          <span style="font-size: 1.5rem">{{info.textOne}}</span>
          <span class="mx-2" style="font-size: 1.5rem; color: #17a2b8">{{info.textTwo}}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
        reports: "/reports",
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Pacientes",
          disabled: false,
          href: "/reports"
        },
        {
          text: "Paciente X",
          disabled: true,
          href: "/reports/id"
        }
      ],
      information: [
        { icon: "class", textOne: "Nombre ", textTwo: "Estefanía" },
        {
          icon: "person",
          textOne: "Apellidos",
          textTwo: "García Pérez"
        },
        {
          icon: "date_range",
          textOne: "Identificador",
          textTwo: "164269DD"
        },
        { icon: "today", textOne: "Edad", textTwo: "12" },
        { icon: "today", textOne: "Padres", textTwo: "Alejandro García Fernández, María Pérez Rodríguez" },
        { icon: "today", textOne: "Tipo de enfermedad", textTwo: "Leucemia" },
        { icon: "today", textOne: "Fecha de ingreso", textTwo: "14/06/2018" }
      ]
    };
  }
};
</script>

