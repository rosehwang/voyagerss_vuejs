import menu from "@/views/menu";  
import Chart from "@/views/Chart"; 
import profile from "@/views/auth/profile";

export default[
  {
    path: '/',
    component: menu,
    children: [
      {path: '/chart', component: Chart},
      {path: '/profile', component: profile}
    ]
  }
]