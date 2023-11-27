
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'center', component: () => import('pages/center.vue') },
     { path: 'addstudent', component: () => import('pages/add_student.vue') },
     { path: 'allstudent', component: () => import('pages/all_student.vue') },
     { path: 'list', component: () => import('pages/rollno_list.vue') },
      { path: 'slip', component: () => import('pages/slip.vue') }
    ] 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
