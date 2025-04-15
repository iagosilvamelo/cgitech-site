<template>
  <header class="fixed top-0 left-0 w-full bg-lightdark text-white z-50 transition-all duration-300">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <img v-if="showLogoInNav" src="@/assets/img/logo-white.png" alt="Vigah Logo"
        class="w-28 transition-opacity duration-300 opacity-100" />
      <div v-else class="w-28"></div>

      <ul class="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
        <li>
          <a href="#home" @click.prevent="$scrollTo('home')" class="hover:text-accent transition">Início</a>
        </li>
        <li>
          <a href="#descricao" @click.prevent="$scrollTo('descricao')" class="hover:text-accent transition">Sobre</a>
        </li>
        <li>
          <a href="#portfolio" @click.prevent="$scrollTo('portfolio')"
            class="hover:text-accent transition">Portifólio</a>
        </li>
        <li>
          <a href="#beneficios" @click.prevent="$scrollTo('beneficios')"
            class="hover:text-accent transition">Benefícios</a>
        </li>
        <li>
          <a href="#social" @click.prevent="$scrollTo('social')" class="hover:text-accent transition">Social</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
