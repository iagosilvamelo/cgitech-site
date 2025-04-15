<template>
  <section id="beneficios" class="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-semibold text-dark mb-6 text-center" data-aos="fade-up">
        Por que escolher a CGI Tech
      </h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
        Nosso compromisso vai além da entrega de sistemas: entregamos soluções tecnológicas que geram valor real para o
        seu negócio. Veja alguns dos benefícios de contar com a nossa equipe:
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <BenefitCard icon="🛠️" title="Soluções Personalizadas" data-aos="fade-up"
          description="Criamos sistemas e sites sob medida para atender as necessidades específicas da sua empresa." />
        <BenefitCard icon="🚀" title="Aceleração Digital" data-aos="fade-up" data-aos-delay="200"
          description="Impulsione a transformação digital da sua empresa com tecnologias modernas e eficientes." />
        <BenefitCard icon="🤝" title="Consultoria Estratégica" data-aos="fade-up" data-aos-delay="250"
          description="Identificamos oportunidades de automação e melhorias nos processos através da tecnologia." />
        <BenefitCard icon="📱" title="Tecnologia Atualizada" data-aos="fade-up" data-aos-delay="300"
          description="Utilizamos as ferramentas mais atuais do mercado, garantindo segurança, performance e escalabilidade." />
        <BenefitCard icon="📈" title="Crescimento Sustentável" data-aos="fade-up" data-aos-delay="350"
          description="Tecnologia bem aplicada gera aumento de produtividade, redução de custos e escalabilidade para o seu negócio." />
        <BenefitCard icon="🎯" title="Foco no Resultado" data-aos="fade-up" data-aos-delay="400"
          description="Trabalhamos com metas claras e soluções práticas para gerar impacto real e mensurável no seu negócio." />
      </div>
    </div>
  </section>
</template>

<script setup>
import BenefitCard from './BenefitCard.vue'
</script>
