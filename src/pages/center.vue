<template>
  <q-page>
    <div class="q-mx-xl q-mt-xl">
      <div class="text-center text-bold size1">Show All Center</div>
      <div class="text-right">
        <q-btn no-caps label="Back To Add Center Page" class="bg-green text-white q-mb-lg" @click="backcenter()"/>
      </div>
      <q-table flat bordered title="All Center Table" :rows="centers" :columns="columns" color="primary"  />
    </div>
    <!-- {{centers}} -->
  </q-page>
</template>

<script>
import { useCenterStore } from "src/stores/user";
import {mapActions, mapState } from 'pinia'
;

export default {
  computed: {
    ...mapState(useCenterStore, ['getStudents','students','centers'])
  },
  data() {
    return {
      columns: [
        {
          required: true,
          label: 'Enter College',
          align: 'left',
          field: row => row.college,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'floor', align: 'center', label: 'Floor', field: 'floor', sortable: true },
        { name: 'room', align: 'center', label: 'Room of No', field: 'room', sortable: true },
        { name: 'seat', align: 'center', label: 'Seat OF No', field: 'seat', sortable: true },
      ],
      loading: false, // Set loading to true when data is being loaded
    };
  },
  computed: {
    ...mapState(useCenterStore, ['students','centers'])
  },
  methods:{
    backcenter(){
      this.$router.push("/");
    }
  }

};
</script>
<style>
.size1{
  font-size: 35px;
}
</style>
