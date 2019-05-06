<template>
  <div class="ma-1 pa-1">
    <v-breadcrumbs :items="items" large class="ma-3 pa-3">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-container fluid style="background-color: rgba(23, 162, 184, 0.2); width: 60%">
      <v-layout justify-center>
        <v-flex xs12 md6 class="pa-2">
          <span class="font-weight-bold" style="font-size: 1.2rem">Nombre del informe</span>
          <v-text-field v-model="name" outline class="pa-2"></v-text-field>
        </v-flex>
        <v-flex xs12 md6 class="pa-2">
          <span class="font-weight-bold" style="font-size: 1.2rem">Nombre del paciente</span>
          <v-text-field v-model="paciente" outline class="pa-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md6 class="pa-2">
          <span class="font-weight-bold" style="font-size: 1.2rem">Médico responsable</span>
          <v-text-field v-model="medico_responsable" outline class="pa-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 md12 class="pa-2">
          <span class="font-weight-bold" style="font-size: 1.2rem">Descripción</span>
          <v-text-field v-model="about" outline class="pa-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-btn color="#17a2b8" dark style="color: #DDF0F3">Añadir</v-btn>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      reports: [],
      data: null,
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
          text: "Añadir informe",
          disabled: true,
          href: "/reports/add"
        }
      ],
      namePatient: "Fermín",
      nameReport: "055454O"
    };
  },
  methods: {
    addReport() {
      this.data = { identifier: this.id, name: this.nombre };
      this.id = "";
      this.nombre = "";
      return fetch("/doctor/post/reports", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(this.data) // body data type must match "Content-Type" header
      }).then(response => response.json()); // parses response to JSON
    }
  }
};
</script>
