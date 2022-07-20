<script>
import { mapActions, mapState } from "pinia";
// Jangan lupa import store
import { useSocketStore } from "../stores/realtime";

export default {
  computed: {
    // Kita di sini ingin membaca global State dari pinia
    ...mapState(useSocketStore, ["aReturn"]),
  },
  methods: {
    // Ini untuk mencoba emit ke server
    ...mapActions(useSocketStore, ["tryEmit"]),
  },
};
</script>

<template>
  <!-- Pada saat tombol ini ditekan, kita akan meng-emit dari client -->
  <button @click="tryEmit">Testing</button>

  <!-- Kita ingin membaca response kembalian dari server (socket emit from server) -->
  <div>Hasil kembalian server: {{ aReturn }}</div>
</template>
