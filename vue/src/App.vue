<script setup lang="ts">
import qrCodeImg from "./assets/qrcode.png";
import Card from "./components/card/Card.vue";
</script>

<template>
  <section id="center">
    <Card :title="'Improve your front-end skills by building projects'"
      :desc="'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'"
      :imgSrc="qrCodeImg" :imgAlt="'qrcode'" />
  </section>
</template>
