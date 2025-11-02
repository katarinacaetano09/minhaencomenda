<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, Switch, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import BaseButton from '~/components/base/BaseButton.vue'
import BaseInput from '~/components/base/BaseInput.vue'
import BaseLink from '~/components/base/BaseLink.vue'

const isDialogOpen = ref(false)
const enabled = ref(false)
const inputValue = ref('')
const inputWithError = ref('')

const menuItems = [
  { label: 'Editar', action: () => console.log('Editar') },
  { label: 'Duplicar', action: () => console.log('Duplicar') },
  { label: 'Arquivar', action: () => console.log('Arquivar') }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-light to-accent p-8">
    <div class="max-w-4xl mx-auto bg-surface rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-secondary-dark mb-8">Componentes Base</h1>

      <!-- Botões -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-secondary-dark mb-6">Botões</h2>
        
        <!-- Variantes -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Variantes</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton>Default</BaseButton>
              <BaseButton variant="destructive">Destructive</BaseButton>
              <BaseButton variant="outline">Outline</BaseButton>
              <BaseButton variant="secondary">Secondary</BaseButton>
              <BaseButton variant="ghost">Ghost</BaseButton>
              <BaseButton variant="link">Link</BaseButton>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Links</h3>
            <div class="flex flex-wrap gap-4">
              <BaseLink href="/docs">Default</BaseLink>
              <BaseLink variant="destructive" href="/docs">Destructive</BaseLink>
              <BaseLink variant="outline" href="/docs">Outline</BaseLink>
              <BaseLink variant="secondary" href="/docs">Secondary</BaseLink>
              <BaseLink variant="ghost" href="/docs">Ghost</BaseLink>
              <BaseLink variant="link" href="/docs">Link</BaseLink>
            </div>
          </div>

          <!-- Tamanhos -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Tamanhos</h3>
            <div class="flex flex-wrap items-center gap-4">
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="default">Default</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </BaseButton>
            </div>
          </div>

          <!-- Estados -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Estados</h3>
            <div class="flex flex-wrap gap-4">
              <BaseButton disabled>Disabled</BaseButton>
              <BaseButton loading>Loading</BaseButton>
              <BaseButton type="submit">Submit</BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Inputs -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-secondary-dark mb-6">Campos de Entrada</h2>
        
        <div class="grid gap-6 max-w-md">
          <!-- Input Padrão -->
          <BaseInput
            v-model="inputValue"
            label="Input Básico"
            placeholder="Digite algo..."
          />

          <!-- Input com Erro -->
          <BaseInput
            v-model="inputWithError"
            label="Input com Erro"
            placeholder="Digite algo..."
            error="Este campo é obrigatório"
          />

          <!-- Input Desabilitado -->
          <BaseInput
            v-model="inputValue"
            label="Input Desabilitado"
            placeholder="Campo desabilitado"
            disabled
          />

          <!-- Input Password -->
          <BaseInput
            v-model="inputValue"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />
        </div>
      </section>

      <!-- Headless UI -->
      <section>
        <h2 class="text-2xl font-bold text-secondary-dark mb-6">Componentes Headless UI</h2>
        
        <div class="space-y-8">
          <!-- Dialog/Modal -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Dialog/Modal</h3>
            <BaseButton @click="isDialogOpen = true">Abrir Modal</BaseButton>

            <Dialog :open="isDialogOpen" @close="isDialogOpen = false" class="relative z-50">
              <div class="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
              <div class="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel class="w-full max-w-md rounded-lg bg-surface p-6 shadow-xl">
                  <h3 class="text-lg font-medium leading-6 text-secondary-dark">Título do Modal</h3>
                  <p class="mt-2 text-secondary">
                    Este é um exemplo de modal usando Headless UI. O foco é gerenciado automaticamente
                    e a acessibilidade já vem configurada.
                  </p>
                  <div class="mt-4 flex justify-end">
                    <BaseButton @click="isDialogOpen = false">Fechar</BaseButton>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>

          <!-- Switch/Toggle -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Switch/Toggle</h3>
            <div class="flex items-center">
              <Switch
                v-model="enabled"
                :class="[
                  enabled ? 'bg-primary' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                ]"
              >
                <span
                  :class="[
                    enabled ? 'translate-x-6' : 'translate-x-1',
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                  ]"
                />
              </Switch>
              <span class="ml-3 text-secondary">
                {{ enabled ? 'Ativado' : 'Desativado' }}
              </span>
            </div>
          </div>

          <!-- Menu/Dropdown -->
          <div>
            <h3 class="text-lg font-medium text-secondary mb-4">Menu/Dropdown</h3>
            <Menu as="div" class="relative inline-block text-left">
              <MenuButton
                class="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Opções
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-surface shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem v-for="(item, index) in menuItems" :key="index" v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-primary text-white' : 'text-secondary-dark',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors'
                        ]"
                        @click="item.action"
                      >
                        {{ item.label }}
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>