<script>
export default {
  name: 'ProfilePageContent', // Nama bisa 'ProfilePage' atau apa pun yang sesuai
  data() {
    return {
      profile: {
        username: 'FIKY KNJT',
        email: 'fkyknjt@gmail.com',
        phone: '081234567891',
        imageUrl: 'https://storage.googleapis.com/gemini-prod/images/452d3a33-d965-45d2-a7d0-141a5f60b45d',
      },
      passwords: {
        current: '',
        new: '',
        confirm: '',
      },
    };
  },
  methods: {
    saveProfileSettings() {
      // Tambahkan logika untuk menyimpan pengaturan profil di sini
      console.log('Profile settings saved:', this.profile);
      alert('Profile updated!');
    },
    changePassword() {
      // Tambahkan logika untuk mengubah kata sandi di sini
      if (this.passwords.new !== this.passwords.confirm) {
        alert('New passwords do not match!');
        return;
      }
      console.log('Password change requested.');
      alert('Password change initiated!');
    },
  },
};
</script>


<template>
  <!-- Wrapper utama untuk konten profil -->
  <main class="w-full p-8 md:p-12">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Profile</h1>

    <!-- Ganti Foto Profil -->
    <section class="flex flex-col items-center mb-12">
      <img
        :src="profile.imageUrl"
        alt="User Profile"
        class="h-32 w-32 rounded-full object-cover mb-4"
      />
      <button
        class="rounded-full border border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
      >
        Change Photo
      </button>
      <p class="mt-2 text-xs text-gray-500">
        Photo format must be .jpg, .jpeg, or .png with a maximum file size of 2MB.
      </p>
    </section>

    <!-- Form Pengaturan Profil -->
    <section class="mx-auto max-w-lg">
      <form @submit.prevent="saveProfileSettings">
        <h2 class="mb-6 text-xl font-semibold text-gray-800">Profile Settings</h2>
        <div class="space-y-6">
          <div>
            <label for="username" class="mb-2 block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="profile.username"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="profile.email"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label for="phone" class="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="profile.phone"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <button
            type="submit"
            class="rounded-full bg-emerald-200 px-8 py-2 text-sm font-bold text-emerald-800 transition hover:bg-emerald-300"
          >
            Save
          </button>
        </div>
      </form>
    </section>

    <!-- Divider -->
    <hr class="mx-auto my-12 max-w-lg" />

    <!-- Form Ganti Kata Sandi -->
    <section class="mx-auto max-w-lg">
      <form @submit.prevent="changePassword">
        <h2 class="text-xl font-semibold text-gray-800">Change Password</h2>
        <p class="mt-1 mb-6 text-sm text-gray-500">
          Make sure your account uses a long and random password to stay secure.
        </p>
        <div class="space-y-6">
          <div>
            <label for="current-password" class="mb-2 block text-sm font-medium text-gray-700">Current Password</label>
            <input
              type="password"
              id="current-password"
              v-model="passwords.current"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label for="new-password" class="mb-2 block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="new-password"
              v-model="passwords.new"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label for="confirm-password" class="mb-2 block text-sm font-medium text-gray-700">Confirmation Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="passwords.confirm"
              class="block w-full rounded-full border-gray-300 px-4 py-2.5 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <button
            type="submit"
            class="rounded-full bg-emerald-200 px-6 py-2 text-sm font-bold text-emerald-800 transition hover:bg-emerald-300"
          >
            Change Password
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

