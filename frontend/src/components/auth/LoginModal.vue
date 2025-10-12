<template>
  <!-- Transisi untuk efek fade in/out -->
  <transition name="modal-fade">
    <!-- Overlay: Blur background dan translucent, bukan gelap -->
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-auto modal-blur-overlay"
    >
      <!-- Kontainer Modal -->
      <div
        class="bg-white rounded-xl shadow-2xl p-8 min-w-[320px] max-w-[90vw] transition-all duration-300"
        style="animation: scaleIn 0.3s"
      >
        <!-- Header Modal -->
        <div class="p-4 border-b flex justify-between items-center">
          <h3 class="text-xl font-semibold">Login ke Akun Anda</h3>
          <button
            @click="$emit('close')"
            class="absolute top-3 right-3 text-gray-400 hover:text-blue-700 text-xl"
          >
            &times;
          </button>
        </div>

        <!-- Body Modal (Form Login) -->
        <div class="p-6">
          <!-- Tombol Login Google -->
          <button
            type="button"
            class="flex items-center justify-center w-full gap-3 border border-gray-300 rounded py-2 px-4 mb-6 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
            @click="handleGoogleLogin"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="w-5 h-5"
            />
            <span class="text-gray-700 font-semibold">Login dengan Google</span>
          </button>
          <form @submit.prevent="handleLogin">
            <!-- Input Email -->
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="email@contoh.com"
              />
            </div>

            <!-- Input Password -->
            <div class="mb-6">
              <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder="******************"
              />
            </div>

            <!-- Tombol Submit -->
            <div class="flex items-center justify-end">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoginModal",
  props: {
    // Prop untuk mengontrol visibilitas modal dari komponen induk
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // Data untuk form login
      email: "",
      password: "",
    };
  },
  methods: {
    // Method untuk menutup modal
    closeModal() {
      // Mengirimkan event 'close' ke komponen induk
      this.$emit("close");
    },
    // Method untuk menangani proses login
    handleLogin() {
      // Di sini Anda bisa menambahkan validasi atau logika login
      console.log("Mencoba login dengan data:", { email: this.email, password: this.password });

      // Mengirimkan data login ke komponen induk melalui event 'login-success'
      this.$emit("login-success", { email: this.email, password: this.password });

      // (Opsional) Reset form setelah submit
      this.email = "";
      this.password = "";

      // Menutup modal setelah login berhasil disubmit
      this.closeModal();
    },
    // Method untuk login dengan Google
    handleGoogleLogin() {
      // Emit event, kembangkan sesuai kebutuhan (integrasi dengan Google OAuth dsb)
      this.$emit("google-login");
    },
  },
};
</script>

<style scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
/* Blur Overlay: tambahkan efek blur dan sedikit transparansi di background */
.modal-blur-overlay {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.25);
}
</style>
