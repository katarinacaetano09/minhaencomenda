<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number
  type?: string
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label 
      v-if="label" 
      class="text-sm font-medium text-secondary-dark"
    >
      {{ label }}
    </label>
    
    <input
      :type="type || 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateValue"
      class="px-3 py-2 rounded-md border border-muted
        focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
        disabled:bg-muted disabled:cursor-not-allowed
        placeholder:text-secondary
        transition-colors duration-200"
      :class="{ 'border-error focus:ring-error focus:border-error': error }"
    />
    
    <span 
      v-if="error" 
      class="text-sm text-error"
    >
      {{ error }}
    </span>
  </div>
</template>