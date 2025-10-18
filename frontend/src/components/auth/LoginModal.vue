<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-auto modal-blur-overlay"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl w-[380px] max-w-[90vw] transition-all duration-300 p-8"
        style="animation: scaleIn 0.3s"
      >
        <!-- Header Logo dan Tab -->
        <div class="flex flex-col items-center mb-8">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <img :src="LogoFootWear" alt="Logo" class="h-8 w-8" />
            <h1 class="text-xl font-bold text-gray-900">
              NEPTUNE<span class="text-blue-700">THRIFT</span>
            </h1>
          </div>

          <!-- Tab Sign In / Sign Up -->
          <div class="flex w-full justify-center mt-6 bg-gray-100 rounded-full overflow-hidden">
            <button
              class="w-1/2 py-2 font-semibold rounded-full transition-all"
              :class="isSignIn ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-200'"
              @click="isSignIn = true"
            >
              Sign in
            </button>
            <button
              class="w-1/2 py-2 font-semibold rounded-full transition-all"
              :class="!isSignIn ? 'bg-blue-900 text-white' : 'text-gray-600 hover:bg-gray-200'"
              @click="isSignIn = false"
            >
              Sign up
            </button>
          </div>
        </div>

        <!-- Body Modal -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 text-center mb-6">
            {{ isSignIn ? "Welcome back." : "Create your account." }}
          </h2>

          <!-- Tombol Google -->
          <button
            type="button"
            class="flex items-center justify-center w-full gap-3 border border-gray-300 rounded-full py-2 px-4 mb-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
            @click="handleGoogleLogin"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="w-5 h-5"
            />
            <span class="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          <!-- OR Divider -->
          <div class="flex items-center my-5">
            <div class="flex-grow h-px bg-gray-300"></div>
            <span class="px-3 text-gray-400 text-sm font-medium">OR</span>
            <div class="flex-grow h-px bg-gray-300"></div>
          </div>

          <!-- Form -->
          <form @submit.prevent="isSignIn ? handleLogin() : handleSignUp()">
            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full border border-gray-300 rounded-xl py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
                placeholder="Email"
              />
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full border border-gray-300 rounded-xl py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
                placeholder="Password"
              />
            </div>

            <!-- Extra field hanya untuk Sign Up -->
            <div v-if="!isSignIn" class="mb-3">
              <label for="confirmPassword" class="block text-gray-700 text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                class="w-full border border-gray-300 rounded-xl py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
                placeholder="Re-enter password"
              />
            </div>

            <!-- Forgot password -->
            <div v-if="isSignIn" class="text-right mb-6">
              <a href="#" class="text-sm text-gray-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
            </div>

            <!-- Tombol -->
            <button
              type="submit"
              class="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {{ isSignIn ? "Sign in" : "Sign up" }}
            </button>

            <p class="text-xs text-gray-400 text-center mt-6">
              By proceeding you accept our
              <a href="#" class="text-blue-700 underline">terms of use</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import LogoFootWear from "@/asset/images/Footwear.png";

const { show } = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "login-success", "signup-success", "google-login"]);

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isSignIn = ref(true); // ✅ state untuk toggle

const closeModal = () => emit("close");

const handleLogin = () => {
  console.log("Login dengan:", { email: email.value, password: password.value });
  emit("login-success", { email: email.value, password: password.value });
  resetForm();
  closeModal();
};

const handleSignUp = () => {
  console.log("Sign up dengan:", {
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
  emit("signup-success", {
    email: email.value,
    password: password.value,
  });
  resetForm();
  closeModal();
};

const handleGoogleLogin = () => emit("google-login");

const resetForm = () => {
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
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

.modal-blur-overlay {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.25);
}
</style>
