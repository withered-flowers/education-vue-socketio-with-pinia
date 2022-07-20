import { defineStore } from "pinia";

export const useSocketStore = defineStore({
  id: "socket",
  state: () => ({
    // Declare socketObject sebagai sesuatu yang kosong terlebih dahulu
    socketObject: {},
    aReturn: "",
  }),
  getters: {},
  actions: {
    // Perhatikan untuk actions di sini
    // Kita tetap harus menggunakan optional chaining (?.)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

    // Karena socketObject belum tentu sudah mendapatkan socketio object
    // Apabila tidak menggunakan optional chaining
    // ada kemungkinan kode bisa menjadi error

    // mari kita mencoba emit socketObject
    async tryEmit() {
      this.socketObject?.emit("halodunia");
    },
    // Sekarang kebalikannya, mari kita coba untuk mendengar socket
    async subscribeEvent() {
      this.socketObject?.on("dengerin-kembalian", (response) => {
        console.log(response);
        this.aReturn = response;
      });
    },
  },
});
