<template>
  <q-page padding>
    <div class="row justify-center q-mt-md">
      <div class="col-8">
        <div class="text-center text-bold q-mb-xl font">Enter Roll No. And Print Slip</div>
    <div class="row justify-center">
      <q-input filled class="col-9" label="Enter Roll No" v-model="searchrollno" />
      <q-btn flat no-caps class="q-ml-xl bg-green" label="Genrate Slip" @click="genrateslip()" />
    </div>
    {{ nu }}
    <div v-if="rollnoslip">
      <!-- Show the card if roll number is found -->
      <div class="row">
        <q-card class="col-sm-6 col-md-4 q-mt-md q-ml-xl">
          <q-card-section>
            <div style="font-size: 22px;" class="text-center">Roll NO Slip</div>
            <div><strong>Roll No:</strong> {{ rollnoslip.rollno }}</div>
            <div><strong>Name:</strong> {{ rollnoslip.name }}</div>
            <div><strong>Gender:</strong> {{ rollnoslip.gender }}</div>
            <div><strong>Center:</strong> {{ rollnoslip.college }}</div>
            <div><strong>Address:</strong> {{ rollnoslip.address }}</div>
            <q-btn flat class="bg-orange q-mt-sm" label="Print"  onclick="window.print()" />
            <!-- Add other details as needed -->
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else>
      <!-- Show an error message if roll number is not found -->
      <p class="q-ml-xl q-mt-md" v-if="this.searchrollno !== ''">Student with Roll No. {{ this.searchrollno }} not found.</p>
    </div>
  </div>
  </div>
  </q-page>
</template>

<script>
import { useCenterStore } from "src/stores/user";
import {mapActions, mapState } from 'pinia'
export default {
  // name: 'PageName',
  computed: {
    ...mapState(useCenterStore, ['getStudents','students','centers'])
  },
  data(){
    return{
      rollnoslip: null,
    }
  },
  methods:{
    ...mapActions(useCenterStore, ['addstudent']),

    genrateslip() {
      // Ensure there are students in the array
      if (this.students.length === 0) {
        console.error('No students available.');
        return;
      }

      this.rollnoslip = this.students.find(item => item.rollno == this.searchrollno);

      if (rollnoslip) {
        // Do something with the found student, e.g., display details
        console.log('Student found:', rollnoslip);
        this.rollnoslip = rollnoslip;
      } else {
        // Handle the case when the roll number is not found
        console.error('Student not found with roll number:', this.searchrollno);
        this.rollnoslip = null; // You can set it to null or display an appropriate message
      }
    }
  }
}
</script>
<style>
.font{
  font-size: 30px;
}
</style>
