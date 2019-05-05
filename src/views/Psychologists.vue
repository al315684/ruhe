<template>
  <div id="psychologists" class="ma-4 pa-4">
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
          <td class="text-xs-left">{{ props.item.index }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.telephone }}</td>
          <td class="text-xs-left">
            <v-btn flat router :to="nextPage"><v-icon style="color: #545758; cursor: pointer" router :to="nextPage">perm_contact_calendar</v-icon></v-btn>
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
        nextPage: "/psychologists/id",
        items: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Psicólogos",
          disabled: true,
          href: "/psychologists"
        }
      ],
      totalDesserts: 0,
      desserts: [],
      loading: true,
      pagination: {},
      headers: [
        { text: "Identificador", value: "index" },
        { text: "Nombre", value: "name" },
        { text: "Email", value: "email" },
        { text: "Teléfono", value: "telephone" },
        { text: "Contactar", value: "view", sortable: false }
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
          index: 1,
          name: "Felipe López Fernández",
          email: "felipelopez@gmail.com",
          telephone: "11484352"
        },
        {
          id: 2,
          index: 2,
          name: "Adrián González García",
          email: "adriangonzalez@gmail.com",
          telephone: "68141456288"
        },
        {
          id: 3,
          index: 3,
          name: "Jaime Lázaro Zagalá",
          email: "jaime_lazaro@gmail.com",
          telephone: "18768115"
        },
        {
          id: 4,
          index: 4,
          name: "Esther Ribelles Rivera",
          email: "estherribelles@gmail.com",
          telephone: "18458761"
        },
        {
          id: 5,
          index: 5,
          name: "Marta Sancho López",
          email: "msancho_lopez@gmail.com",
          telephone: "68458781"
        },
        {
          id: 6,
          index: 6,
          name: "Felipe Hidalgo Díaz",
          email: "felipehdiaz@gmail.com",
          telephone: "66781781"
        },
        {
          id: 7,
          index: 7,
          name: "Pedro Gómez Ruiz",
          email: "pedrogoru@gmail.com",
          telephone: "1457757"
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