<template>
  <div id="report" class="ma-4 pa-4">
    <v-breadcrumbs :items="items" large>
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="mt-2 pt-2">
      <v-btn color="#17a2b8" dark style="color: #DDF0F3">Informes del paciente</v-btn>
      <v-btn color="#17a2b8" dark style="color: #DDF0F3">Ver paciente</v-btn>
    </div>
    <v-container fluid style="background-color: rgba(23, 162, 184, 0.2)" class="mt-5 pt-5">
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="(info, index) in information" :key="index">
          <v-icon class="mx-2">{{info.icon}}</v-icon>
          <span style="font-size: 1.5rem">{{info.textOne}}</span>
          <span class="mx-2" style="font-size: 1.5rem; color: #17a2b8">{{info.textTwo}}</span>
        </v-flex>
        <v-flex xs12 md6>
          <v-icon class="mx-2">insert_drive_file</v-icon>
          <span style="font-size: 1.5rem">Archivo:</span>
          <span class="mx-1" style="font-size: 1.5rem; color: #17a2b8">0415EGP</span>
          <v-btn flat icon>
            <v-icon style="font-size: 1.8rem; color: #17a2b8">get_app</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Informes",
          disabled: false,
          href: "/reports"
        },
        {
          text: "Informe X",
          disabled: true,
          href: "/reports/id"
        }
      ],
      information: [
        { icon: "class", textOne: "Id. de Informe", textTwo: "0415EGP" },
        {
          icon: "person",
          textOne: "Médico responsable",
          textTwo: "Dr. Miguel Ángel Díaz"
        },
        {
          icon: "date_range",
          textOne: "Fecha de publicación",
          textTwo: "Fecha de actualización"
        },
        { icon: "today", textOne: "Archivo", textTwo: "0415EGP" }
      ]
    };
  }
};
</script>

