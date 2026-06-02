<template>
  <form>
    <div class="mb-3">
      <label for="nomeCliente" class="form-label">Nome do cliente</label>
      <input type="text" class="form-control" id="nomeCliente">
    </div>
    <div class="mb-3">
      <label for="servico" class="form-label">Serviço</label>
      <input type="text" class="form-control" id="servico">
    </div>
    <div class="mb-3">
      <label for="hora" class="form-label">Horário</label>
      <input type="time" class="form-control" id="hora">
    </div>
    <div class="mb-3">
      <label for="barbeiro" class="form-label">Barbeiro</label>
      <input type="text" class="form-control" id="barbeiro">
    </div>
    <button type="submit" class="btn btn-primary" @submit="cadastrarAgendamento">Enviar</button>
  </form>
</template>

<script setup lang="ts">

// Importar criarAgendamento do agendamentoService
// TODO [CRITÉRIO 3 e 11]:
// Crie um objeto reativo (ref) com os campos do formulário de cadastro



// TODO [CRITÉRIO 10]:
// Implemente a função "cadastrarAgendamento".
// Ela deve:
// 1. Chamar criarAgendamento() passando os dados do formulário
// 2. Adicionar o agendamento retornado pela API à lista local
// 3. Limpar os campos do formulário após o envio
// 4. Redirecionar para a lista de agendamentos
async function cadastrarAgendamento() {
  // Implemente aqui
}
</script>