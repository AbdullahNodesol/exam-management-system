<template>
  <q-page>
    <div class="row justify-center q-mt-lg">
      <div class="col-8">
        <div class="text-center text-bold size">Add  Student</div>
    <div class="row q-ml-md q-mt-lg">
      <div class="col-10">
      <q-input filled label="Student Name" v-model="student.name" />
    </div>
      <div class="q-mt-md">
        <div class=" text-bold">Please select Gender</div>
        <q-radio v-model="student.gender" val="Male" label="Male" />
        <q-radio v-model="student.gender" val="Female" label="Female"/>
      </div>
    </div>
      <div class="text-right">
        <q-btn no-caps class="q-mt-lg q-mr-lg bg-green text-white" label="Add Student" @click="add(student)"></q-btn>
      </div>
  </div>
  </div>
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
  data(){
    return{
      student: {
        counter: '',
        name: '',
        gender: '',
        college: '',
        rollno: ''
      },
    }
  },
  methods:{
    ...mapActions(useCenterStore, ['addstudent']),
    add(data){
    if(this.student.name!==''&& this.student.gender!==''){
      this.addstudent(data)
        this.$router.push("/allstudent");
    }
    else{
      alert('asas')
    }
    }
  }
  // name: 'PageName',
}
</script>
<style>
.size{
  font-size: 35px;
}
</style>
