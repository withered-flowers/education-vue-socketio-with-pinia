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
