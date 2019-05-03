<template>
  <div class="ma-4 pa-4">
    <v-breadcrumbs :items="items" large>
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
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
          <td class="text-xs-left">{{ props.item.index }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.surnames }}</td>
          <td class="text-xs-left">{{ props.item.typeCancer }}</td>
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">
            <v-icon style="color: #545758; cursor: pointer">visibility</v-icon>
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
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Pacientes",
          disabled: true,
          href: "/patients"
        }
      ],
      totalDesserts: 0,
      desserts: [],
      loading: true,
      pagination: {},
      headers: [
        { text: "Orden del listado", value: "id", sortable: true },
        {
          text: "Identificador",
          align: "left",
          sortable: true,
          value: "index"
        },
        { text: "Nombre", value: "name" },
        { text: "Apellidos", value: "surnames" },
        { text: "Tipo de enfermedad", value: "typeCancer" },
        { text: "Fecha de ingreso", value: "date" },
        { text: "Ver paciente", value: "view", sortable: false }
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
          index: "123456789",
          name: "Pedro",
          surnames: "Camañes Sorolla",
          typeCancer: "Colon",
          date: "24/02/2019"
        },
        {
          id: 2,
          index: "234567891",
          name: "Alberto",
          surnames: "Morales Cerezo",
          typeCancer: "Pulmón",
          date: "29/02/2019"
        },
        {
          id: 3,
          index: "345678912",
          name: "Miguel Ángel",
          surnames: "Carmona Guerrero",
          typeCancer: "Colon",
          date: "06/03/2019"
        },
        {
          id: 4,
          index: "456789123",
          name: "Marta",
          surnames: "Roca Caballero",
          typeCancer: "Hígado",
          date: "03/03/2019"
        },
        {
          id: 5,
          index: "789123456",
          name: "Gabriela",
          surnames: "Romero Herrero",
          typeCancer: "Hígado",
          date: "24/02/2019"
        },
        {
          id: 6,
          index: "123456789",
          name: "Pedro",
          surnames: "Camañes Sorolla",
          typeCancer: "Colon",
          date: "03/03/2019"
        },
        {
          id: 7,
          index: "159753482",
          name: "María",
          surnames: "Sanz Hidalgo",
          typeCancer: "Pecho",
          date: "26/02/2019"
        },
        {
          id: 8,
          index: "123456789",
          name: "Pedro",
          surnames: "Camañes Sorolla",
          typeCancer: "Colon",
          date: "14/03/2019"
        },
        {
          id: 9,
          index: "159753482",
          name: "María",
          surnames: "Sanz Hidalgo",
          typeCancer: "Pecho",
          date: "12/03/2019"
        },
        {
          id: 10,
          index: "268413759",
          name: "Aroa",
          surnames: "Mendez Ortiz",
          typeCancer: "Colon",
          date: "12/02/2019"
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

