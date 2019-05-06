<template>
  <div class="ma-4 pa-4">
    <v-breadcrumbs :items="items" large>
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="mt-2 pt-2">
      <v-btn color="#17a2b8" dark style="color: #DDF0F3" router :to="addReport">Añadir informe</v-btn>
    </div>
    <div class="mt-3 pt-3">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :pagination.sync="pagination"
        :total-items="totalDesserts"
        :loading="loading"
        class="elevation-1"
      >
        <template v-slot:items="props" flat>
          <td>{{ props.item.id }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.patient }}</td>
          <td class="text-xs-left">{{ props.item.datePost }}</td>
          <td class="text-xs-left">{{ props.item.dateUpdate }}</td>
          <td class="text-xs-left">
            <v-btn flat router :to="nextPage"><v-icon style="color: #545758; cursor: pointer" router :to="nextPage">visibility</v-icon></v-btn>
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        nextPage: "/reports/id",
        addReport: "/reports/add",
        items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Informes",
          disabled: true,
          href: "/reports"
        }
      ],
      totalDesserts: 0,
      desserts: [],
      loading: true,
      pagination: {},
      headers: [
        { text: "Orden del listado", value: "id", sortable: true },
        { text: "Nombre del informe", value: "name" },
        { text: "Paciente", value: "patient" },
        { text: "Fecha de publicación", value: "datePost" },
        { text: "Fecha de actualización", value: "dateUpdate" },
        { text: "Ver informe", value: "view", sortable: false }
      ]
    };
  },
  watch: {
    pagination: {
      handler() {
        this.getDataFromApi().then(data => {
          this.desserts = data.items;
          this.totalDesserts = data.total;
        });
      },
      deep: true
    }
  },
  mounted() {
    this.getDataFromApi().then(data => {
      this.desserts = data.items;
      this.totalDesserts = data.total;
    });
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      return new Promise(resolve => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination;

        let items = this.getDesserts();
        const total = items.length;

        if (this.pagination.sortBy) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy];
            const sortB = b[sortBy];

            if (descending) {
              if (sortA < sortB) return 1;
              if (sortA > sortB) return -1;
              return 0;
            } else {
              if (sortA < sortB) return -1;
              if (sortA > sortB) return 1;
              return 0;
            }
          });
        }

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage);
        }

        setTimeout(() => {
          this.loading = false;
          resolve({
            items,
            total
          });
        }, 1000);
      });
    },
    getDesserts() {
      return [
        {
          id: 1,
          name: "0103ART",
          patient: "Ana Rivera Tomás",
          datePost: "21/02/2019",
          dateUpdate: "22/02/2019"
        },
        {
          id: 2,
          name: "0216MLF",
          patient: "María López Fernández",
          datePost: "15/01/2019",
          dateUpdate: "-"
        },
        {
          id: 3,
          name: "0306AFM",
          patient: "Alejandro Fernández Martín",
          datePost: "16/03/2019",
          dateUpdate: "-"
        },
        {
          id: 4,
          name: "0406EGL",
          patient: "Esteban García López",
          datePost: "24/02/2019",
          dateUpdate: "25/02/2019"
        },
        {
          id: 5,
          name: "0510JRP",
          patient: "Jorge De La Rosa Prenda",
          datePost: "16/11/2018",
          dateUpdate: "-"
        },
        {
          id: 6,
          name: "0415EGP",
          patient: "Estefanía García Pérez",
          datePost: "14/06/2019",
          dateUpdate: "-"
        },
        {
          id: 7,
          name: "0414CK",
          patient: "Claire Kyleeh",
          datePost: "19/12/2018",
          dateUpdate: "19/12/2018"
        },
        {
          id: 8,
          name: "0413MMM",
          patient: "Mario Martínez Marín",
          datePost: "17/07/2018",
          dateUpdate: "-"
        },
        {
          id: 9,
          name: "0412MMM",
          patient: "Mario Martínez Marín",
          datePost: "13/07/2018",
          dateUpdate: "-"
        },
        {
          id: 10,
          name: "0411MMM",
          patient: "Mario Martínez Marín",
          datePost: "10/07/2018",
          dateUpdate: "-"
        }
      ];
    }
  }
};
</script>
<style>
.v-datatable thead th.column.sortable {
  background-color: #17a2b8;
  color: rgb(221, 240, 243);
}

.theme--light.v-table thead th {
  background-color: #17a2b8;
  color: rgb(221, 240, 243);
}

table.v-table tbody td {
    background-color: #F1F1F1;
    color: #545758;
}

.v-datatable__actions {
    background-color: #F1F1F1 !important;
    color: #545758 !important;
}
</style>

