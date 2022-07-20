<script>
// Jangan lupa import socketio sisi client
import io from "socket.io-client";
// Gunakan mapWritableState, karena akan diset pada saat mount
import { mapWritableState, mapActions } from "pinia";
import { RouterLink, RouterView } from "vue-router";

// Jangan lupa import store
import { useSocketStore } from "./stores/realtime";

export default {
  components: {
    RouterLink,
    RouterView,
  },
  computed: {
    // Gunakan state socketObject di sini
    ...mapWritableState(useSocketStore, ["socketObject"]),
  },
  methods: {
    // Kita coba iseng untuk menggunakan actions
    ...mapActions(useSocketStore, ["subscribeEvent"]),
  },
  // Kita akan gunakan created, karena akan didefine SEBELUM render template
  // jangan lupa WAJIB async karena constructor io WAJIB ditunggu sebelum lanjut
  async created() {
    // Di sini kita akan binding socket.io client ke server
    this.socketObject = await io("http://localhost:3000/");
    // Jangan lupa juga untuk mendengarkan event yang akan digunakan
    this.subscribeEvent();
  },
};
</script>

<template>
  <nav class="navigation">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.navigation {
  display: flex;
  gap: 0.5em;
}
</style>
