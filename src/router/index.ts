import CadastroView from "@/views/CadastroView.vue";
import DetalhesView from "@/views/DetalhesView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

// TODO [CRITÉRIO 6]:
// Defina a rota para a tela inicial (HomeView).
// Caminho: '/'

// TODO [CRITÉRIO 7]:
// Defina a rota para a tela de detalhes (DetalhesView).
// Caminho: '/agendamento/:id'
// O ":id" é o parâmetro de rota que identifica qual agendamento será exibido.

// TODO
// Defina a rota para a tela de cadastro (CadastroView)
// Caminho: '/cadastro'
// https://router.vuejs.org/guide/#Creating-the-router-instance

//Parcialmente OK!, falta fazer as conexões dessa rota!

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/agendamento/:id", component: DetalhesView },
    { path: "/cadastro", component: CadastroView },
  ],
});

export default router;
