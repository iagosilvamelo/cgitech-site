<template>
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <div class="text-4xl mb-4">{{ icon }}</div>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: String,
    title: String,
    description: String
  })
  </script>