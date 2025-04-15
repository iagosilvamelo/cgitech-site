<template>
  <section id="social" class="bg-black text-white py-12 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">Conecte-se com a CGI Tech</h2>
      <p class="mb-8 text-lg text-[#aac6c9]">Acompanhe nossas redes e fique por dentro das novidades!</p>

      <div class="flex justify-center gap-6">
        <a :href="socialLinks.instagram" target="_blank" aria-label="Instagram"
          class="hover:scale-110 transition-transform duration-300">
          <img src="@/assets/icons/instagram.svg" alt="Instagram" class="w-5 h-5" />
        </a>

        <a :href="socialLinks.facebook" target="_blank" aria-label="Facebook"
          class="hover:scale-110 transition-transform duration-300">
          <img src="@/assets/icons/facebook.svg" alt="Facebook" class="w-5 h-5" />
        </a>

        <a :href="socialLinks.linkedin" target="_blank" aria-label="LinkedIn"
          class="hover:scale-110 transition-transform duration-300">
          <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
        </a>

        <a :href="socialLinks.whatsapp" target="_blank" aria-label="WhatsApp"
          class="hover:scale-110 transition-transform duration-300">
          <img src="@/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
const socialLinks = inject('links')
</script>

<style scoped></style>
