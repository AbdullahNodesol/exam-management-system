<template>
  <q-page padding>
    <!-- content -->
    <h3 class="text-center">All Students Roll No.Slip</h3>
    <!-- <q-btn no-caps label="Generate center" class="bg-green q-ml-lg" @click="genratecenter()"/> -->
    <q-table class="q-mt-lg" flat bordered title="Center Table" :rows="students" :columns="abdullah" color="primary" row-key="id" :loading="loading" />
    <!-- Display values for each student -->
    <!-- {{ centers}} -->
  </q-page>
</template>

<script>
import { useCenterStore } from "src/stores/user";
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      abdullah: [
        {
    name: ' counter',
    required: true,
    label: 'Number',
    align: 'left',
    field: row => row.counter,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'name', align: 'left', label: 'Student Name', field: 'name', },
  { name: 'college', align: 'left', label: 'College', field: 'college', },
  { name: 'gender', align: 'left', label: 'Gender', field: 'gender', },
  { name: 'rollno', align: 'left', label: 'Roll NO', field: 'rollno' },
  { name: 'address', align: 'left', label: 'Address', field: 'address' },
      ],
      // students: [],
      student: {
        counter: '',
        name: '',
        gender: '',
        college: '',
        rollno: ''
    }
    };
  },
  computed: {
    ...mapState(useCenterStore, ['getStudents', 'centers','students'])
  },
  mounted() {
    this.genratecenter()
  },
  // created() {
  //   this.genratecenter()
  // },
  methods: {
     ...mapActions(useCenterStore, ['addCenter']),
     genratecenter() {
      let seatCounter = 0;
      let counter = 1;
      let roll = 1000;

      //Start loop on university array //
      for (let c = 0; c < this.centers.length; c++) {
        //Start loop on floor of object  //
        for (let i = 1; i <= this.centers[c].floor; i++) {
          //Start loop on room of object  //
          for (let j = 1; j <= this.centers[c].room; j++) {
            //Start loop on seat of object  //
            for (let k = 1; k <= this.centers[c].seat; k++) {
              this.students[seatCounter].college = this.centers[c].college;
              console.log()
              this.students[seatCounter].rollno = roll++;
              this.students[seatCounter].counter = counter++;
              this.students[seatCounter].address = `Floor ${i}
                   Room ${j}
                   Seat ${k}`;
              if (seatCounter < this.students.length-1) {
                seatCounter++;
              }
              return;
            }
            //End loop on seat of object  //
          }
          //End loop on room of object  //
        }
        //END loop on floor of object  //
      }
      //END loop on university array  //
    },

  },
};
</script>
