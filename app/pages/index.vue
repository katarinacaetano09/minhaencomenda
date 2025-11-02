
<template>
  <div class="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Card Principal -->
      <div class="bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          Minha Encomenda
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Sistema de Gerenciamento de Encomendas e Rastreamento
        </p>
        <div class="flex gap-4">
          <button class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            Iniciar Agora
          </button>
          <button class="px-6 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>

      <!-- Cards de Recursos -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-purple-600 text-2xl mb-4">📦</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Rastreamento</h3>
          <p class="text-gray-600">Acompanhe suas encomendas em tempo real</p>
        </div>

        <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-purple-600 text-2xl mb-4">🚚</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Entregas</h3>
          <p class="text-gray-600">Gerencie todas as suas entregas</p>
        </div>

        <div class="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-purple-600 text-2xl mb-4">📱</div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Notificações</h3>
          <p class="text-gray-600">Receba atualizações em tempo real</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sem lógica por enquanto
</script>
