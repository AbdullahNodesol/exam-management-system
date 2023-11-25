import { defineStore } from 'pinia'
export const useCenterStore = defineStore('center', {
  state: () => ({
     centers:[],
     students:[],
  }),
  getters: {
    getUsers (state) {
      return state.students
    },
  },
  actions: {
    addCenter(obj) {
      this.centers.push({...obj});
    },
    addstudent(student){
      this.students.push({...student})
    }
  }
})
