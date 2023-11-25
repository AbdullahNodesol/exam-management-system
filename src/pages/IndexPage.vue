<template>
  <q-page>
    <div class="text-center q-mt-xl text-bold size2">Add  Center</div>
    <div class="row q-mx-xl q-col-gutter-lg q-mt-md">
      <q-select filled v-model="obj.college" :options="options1" class="col-6" label="Enter College" />
      <q-input filled v-model="obj.floor" class="col-6" label=" Floors" />
      <q-input filled v-model="obj.room" class="col-6" label="Room of floors" />
      <q-input filled v-model="obj.seat" class="col-6" label="Seat of Room" />
    </div>
    <div class="text-right q-mr-xl">
    <q-btn no-caps class=" q-mt-md bg-blue text-white" label="Add Center" @click="somfun(obj)" />
  </div>
    <!-- {{ centers }} -->
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import { useCenterStore } from "src/stores/user";
import {mapActions, mapState } from 'pinia'

export default defineComponent({
  data(){
    return{
      // model: ref(null),
      options1: [
        'Islamia civil lines college', 'Science College', 'Township College', 'MAO College', 'Gulberg college'
      ],
      obj: {
        college:'',
        floor: '',
        room: '',
        seat: '',
        name :'',
        gender:''
      },
    }
  },
  computed: {
    ...mapState(useCenterStore, ['getStudents','centers'])
  },
  methods:{
    ...mapActions(useCenterStore, ['addCenter']),

    somfun(data){
      this.addCenter(data)
      this.$router.push("/center");
    }
  }
});
</script>
<style>
.size2{
  font-size: 35px;
}
</style>
