<template>
  <!-- TODO [CRITÉRIO 4 e 12]:
    Monte o card do agendamento usando Bootstrap.
    Exiba: clienteNome, servico, data, hora e barbeiro.
    Use v-if para exibir o badge de status com cores diferentes:
      - confirmado → badge verde (bg-success)
      - pendente   → badge amarelo (bg-warning)
      - cancelado  → badge vermelho (bg-danger)
    Adicione um botão "Ver detalhes" que navega para /agendamento/:id
    https://getbootstrap.com/docs/5.3/components/card/#titles-text-and-links
    https://router.vuejs.org/guide/#App-vue
  -->
  <div class="card text-center">
    <div class="card-header">
      {{ Agendamento.clienteNome }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ Agendamento.servico }}</h5>
      <p class="card-text">{{ Agendamento.hora }}</p>
      <p class="card-text">{{ Agendamento.barbeiro }}</p>
      <a href="/agendamento/:id" class="btn btn-primary">Ver detalhes</a>
    </div>
    <div class="card-footer text-body-secondary">
      <v-if></v-if>
      {{ Agendamento.data }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type Agendamento from '../interfaces/Agendamento'
import { useRouter } from 'vue-router'

// TODO [CRITÉRIO 5]:
// Declare a prop "agendamento" do tipo Agendamento.
// Ela será passada pelo componente pai (HomeView) para este componente.
const Agendamento = defineProps<{
  id: number,
  clienteNome: string,
  servico: string,
  data: string,
  hora: string,
  barbeiro: string,
  status: string
}>()

const router = useRouter()

// TODO [CRITÉRIO 6 e 7]:
// Implemente a função "verDetalhes" que navega para a rota /agendamento/:id
// usando o id do agendamento recebido via prop.
function verDetalhes() {
  // Implemente aqui
}
</script>