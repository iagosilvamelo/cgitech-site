<template>
  <section id="portfolio" class="bg-black text-white py-16 px-6 md:px-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold">Nosso Portfólio de</h2>
        <h2 class="text-4xl font-bold mb-6"><span class="text-primary">Clientes satisfeitos</span></h2>
        <p class="text-lg mb-6">
          Conheça alguns dos sites que desenvolvemos para nossos clientes. Cada projeto foi pensado com foco em
          performance, design responsivo e experiência do usuário.
        </p>
        <p class="text-lg mb-6">
          Além de sites, também tivemos uma participação impactante em grandes plataformas de e-commerce, onde
          contribuímos com o desenvolvimento de uma plataforma robusta e escalável como a
          <strong>AppMax</strong> e <strong>Arkama</strong>.
        </p>
        <a :href="socialLinks.whatsapp" target="_blank"
          class="inline-block mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition">
          Quero um projeto CGI Tech
        </a>
      </div>

      <div class="rounded-2xl overflow-hidden shadow-2xl">
        <div class="relative w-full overflow-hidden">
          <Swiper :modules="[Navigation, Pagination, Autoplay]" :slides-per-view="1" :space-between="20" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" navigation pagination class="rounded-xl shadow-lg">
            <SwiperSlide v-for="(image, index) in images" :key="index">
              <img :src="image" class="w-full h-auto rounded-xl object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import addviser from '@/assets/img/portfolio/addviser.png'
import appmax from '@/assets/img/portfolio/appmax.png'
import sgnutri from '@/assets/img/portfolio/sgnutri.png'
import arkama from '@/assets/img/portfolio/arkama.png'
import vigah from '@/assets/img/portfolio/vigah.png'

const socialLinks = inject('links')

const images = [addviser, appmax, sgnutri, arkama, vigah]
</script>
