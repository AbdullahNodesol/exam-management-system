import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar';
export const useCenterStore = defineStore('center', {
  state: () => ({
     centers:LocalStorage.getItem('array') ?? [],
     students:LocalStorage.getItem('stude') ?? [],
  }),
  getters: {
    getUsers (state) {
      return state.students
    },
  },
  actions: {
    addCenter(obj) {
      this.centers.push(JSON.parse(JSON.stringify(obj)))
      LocalStorage.set('array',this.centers)
    },
    addstudent(student){
      this.students.push(JSON.parse(JSON.stringify(student)))
      LocalStorage.set('stude',this.students)
    }
  }
})
