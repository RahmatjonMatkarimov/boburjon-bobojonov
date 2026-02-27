<script setup>
import { onMounted, ref } from 'vue';

const contacts = ref([
  {
    id: 'instagram',
    name: 'Instagram',
    value: '@_bobojonovv._.b',
    link: 'https://instagram.com/_bobojonovv._.b',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    value: '@Boburjon_fx',
    link: 'https://t.me/@Boburjon_fx',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  },
  {
    id: 'phone',
    name: 'Phone Number',
    value: '+998 95 577 47 43',
    link: 'tel:+998955774743',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    id: 'email',
    name: 'Email Address',
    value: 'boburjonbobojonov74@gmail.com',
    link: 'mailto:boburjonbobojonov74@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  }
]);

onMounted(() => {
  const elements = document.querySelectorAll('.stagger-animation');
  elements.forEach((el, index) => {
    setTimeout(() => {
      if (el) { el.classList.add('visible'); }
    }, index * 120 + 100);
  });
});
</script>

<template>
  <div id="app" class="w-full max-w-[480px] px-6 py-8 mx-auto flex-grow flex flex-col justify-center min-h-screen">
    <main
      class="luxury-card stagger-animation bg-[rgba(18,18,18,0.65)] backdrop-blur-[25px] border border-[rgba(212,175,55,0.25)] rounded-[24px] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden my-auto">

      <!-- Top Accent Line -->
      <div
        class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60">
      </div>

      <!-- Profile Section -->
      <header class="flex flex-col items-center text-center mb-8">
        <div
          class="image-wrapper stagger-animation relative w-[110px] height-[110px] mb-5 rounded-full scale-90 opacity-0 duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] [&.visible]:scale-100 [&.visible]:opacity-100">
          <div
            class="w-[110px] h-[110px] rounded-full relative z-10 border-2 border-[#1a1a1a] bg-gradient-to-br from-[#111] to-[#222] flex items-center justify-center text-4xl font-bold text-gold shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src="/avatar.png" class="w-full rounded-full" alt="">
          </div>
          <div
            class="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,#d4af37_50%,transparent_100%)] z-0 animate-rotate-slow opacity-80 blur-[2px]">
          </div>
        </div>

        <h1
          class="user-name stagger-animation text-[1.8rem] font-bold tracking-[0.5px] mb-2 bg-gradient-to-r from-white via-gold to-white bg-[length:200%_auto] text-transparent bg-clip-text animate-shine opacity-0 translate-y-[10px] duration-600 [&.visible]:opacity-100 [&.visible]:translate-y-0">
          Bobojonov Boburjon
        </h1>

        <div
          class="user-title stagger-animation flex items-center gap-2 text-[0.85rem] text-gold font-semibold uppercase tracking-[2px] mb-4 opacity-0 duration-600 [&.visible]:opacity-100">
          <span class="w-1 h-1 bg-gold rounded-full shadow-[0_0_6px_#d4af37]"></span>
          Professional Trader
          <span class="w-1 h-1 bg-gold rounded-full shadow-[0_0_6px_#d4af37]"></span>
        </div>

        <p
          class="user-bio stagger-animation text-[0.95rem] text-gray-400 leading-relaxed px-4 max-w-[90%] opacity-0 duration-600 [&.visible]:opacity-100">
          Expert trading strategies for the modern financial market. Master the volatility.
        </p>
      </header>

      <!-- Links Section -->
      <section class="flex flex-col gap-4">
        <a v-for="(contact, idx) in contacts" :key="contact.id" :href="contact.link" target="_blank"
          class="link-item stagger-animation flex items-center p-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl transition-all duration-300 relative overflow-hidden opacity-0 translate-y-5 hover:bg-white/[0.05] hover:border-gold/30 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] group"
          :style="`transition-delay: ${idx * 100}ms;`">

          <!-- Left accent -->
          <div
            class="absolute top-0 left-0 w-1 h-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>

          <div
            class="link-icon flex items-center justify-center w-11 h-11 bg-gold/10 text-gold rounded-xl mr-5 transition-all duration-300 border border-gold/10 group-hover:bg-gold group-hover:text-[#111] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            v-html="contact.icon"></div>

          <div class="flex-1 flex flex-col gap-0.5">
            <span class="font-medium text-base text-white tracking-wide">{{ contact.name }}</span>
            <span class="text-xs text-gray-400">{{ contact.value }}</span>
          </div>

          <div
            class="link-arrow text-gray-400 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </a>
      </section>

    </main>
  </div>
</template>

<style>
/* Base stagger animations are in style.css */
</style>
