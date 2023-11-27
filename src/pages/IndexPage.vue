<template>
  <q-page>
    <div class="text-center q-mt-xl text-bold size2">Add Center</div>
    <div class="row q-mx-xl q-col-gutter-lg q-mt-md">
      <div class="col-xs-12 col-md-6">
      <q-select
        filled
        v-model="obj.college"
        :options="options1"
        label="Enter College"
        behavior="menu"
      /><br>
      <div class="text-negative" v-if="errors.college">{{ errors.college }}</div>
    </div>
       <div class="col-xs-12 col-md-6">
      <q-input filled type="number" v-model="obj.floor"           label="Floors" /><br>
      <div class="text-negative" v-if="errors.floor">{{ errors.floor }}</div>
    </div>
    <div class="col-xs-12 col-md-6">
      <q-input filled type="number" v-model="obj.room" class="col-6" label="Room of floors" /><br>
      <div class="text-negative" v-if="errors.room">{{ errors.room }}</div>
      </div>
    <div class="col-xs-12 col-md-6">
      <q-input filled type="number" v-model="obj.seat" class="col-6" label="Seat of Room" /><br>
      <div class="text-negative" v-if="errors.seat">{{ errors.seat }}</div>
    </div>
    </div>
    <div class="text-right q-mr-xl">
      <q-btn no-caps class="q-mt-md bg-blue text-white" label="Add Center" @click="somfun(obj)" />
      <div class="q-mt-md text-negative" v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useCenterStore } from "src/stores/user";
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  data() {
    return {
      options1: [
        'Islamia civil lines college', 'Science College', 'Township College', 'MAO College', 'Gulberg college'
      ],
      obj: {
        college: '',
        floor: '',
        room: '',
        seat: '',
      },
      errors: {
        college: '',
        floor: '',
        room: '',
        seat: '',
      },
      errorMessage: '',
    };
  },
  computed: {
    ...mapState(useCenterStore, ['getStudents', 'centers']),
  },
  methods: {
    ...mapActions(useCenterStore, ['addCenter']),

    somfun(data) {
      this.resetErrors();
      if (this.obj.college !== '' && this.obj.floor !== '' && this.obj.room !== '' && this.obj.seat !== '') {
        this.addCenter(data);
        this.$router.push("/center");
      } else {
        this.errorMessage = 'Please fill in all input fields';
        this.validateInputs();
      }
    },

    validateInputs() {
      if (this.obj.college === '') {
        this.errors.college = 'College is required';
      }

      if (this.obj.floor === '') {
        this.errors.floor = 'Floors is required';
      }

      if (this.obj.room === '') {
        this.errors.room = 'Room of floors is required';
      }

      if (this.obj.seat === '') {
        this.errors.seat = 'Seat of Room is required';
      }
    },

    resetErrors() {
      this.errorMessage = '';
      this.errors = {
        college: '',
        floor: '',
        room: '',
        seat: '',
      };
    },
  },
});
</script>

<style>
.size2 {
  font-size: 35px;
}
</style>
