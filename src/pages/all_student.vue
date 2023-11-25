<template>
  <q-page>
    <div class="row justify-center">
    <div class="q-mx-xl q-mt-xl col-6">
      <div class="text-center text-bold sizetext">Show All  Student</div>
      <div class="text-right q-mb-lg">
        <q-btn no-caps class="bg-yellow" label="Back To Add Student" @click="backstudent()"/>
      </div>
      <q-table class="shadow-1" flat bordered title="All Center Table" :rows="students" :columns="columns" color="primary"  />
    </div>
  </div>
  </q-page>
</template>

<script>
import { useCenterStore } from "src/stores/user";
import {mapActions, mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useCenterStore, ['getStudents','students','centers'])
  },
  // name: 'PageName',
  data(){
    return{
      columns: [
        {
          required: true,
          label: 'Student Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Gender', align: 'left', label: 'Gender', field: 'gender', sortable: true },
      ],
    }
  },
  methods:{
    backstudent(){
      this.$router.push("/addstudent");
    }
  }
}
</script>
<style>
.sizetext{
  font-size: 35px;
}
</style>
