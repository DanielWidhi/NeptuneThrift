<script setup>
import { ref } from "vue";
import GambarHome from "@/asset/images/GambarHome.png";
import NikeAirForce1 from "@/asset/images/NikeAirForce1.png";
import NikeAirMax1 from "@/asset/images/NikeAirMax1.png";
import Vans from "@/asset/images/Vans.png";
import NikeShadow from "@/asset/images/NikeShadow.png";
import NewBalance from "@/asset/images/NewBalance.png";

const newArrivals = ref([
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 120,
    image: NikeAirForce1,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Patta x Nike Air Max 1",
    price: 240,
    discount: 260,
    image: NikeAirMax1,
    rating: 5,
  },
  {
    id: 3,
    name: "Vans UA Sentry Old Skool",
    price: 180,
    image: Vans,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Nike Airforce 1 Shadow",
    price: 130,
    discount: 160,
    image: NikeShadow,
    rating: 4.5,
  },
]);

const promoSelling = ref([
  { id: 1, name: "New Balance", price: 212, discount: 232, image: NewBalance, rating: 3.5 },
  { id: 2, name: "MSBreewc X Rizky", price: 145, image: "/images/msbreewc.png", rating: 4 },
  { id: 3, name: "Loose Fit Bermuda Shorts", price: 80, image: "/images/shorts.png", rating: 4 },
  { id: 4, name: "Faded Skinny Jeans", price: 210, image: "/images/jeans.png", rating: 4 },
]);
</script>

<template>
  <div class="w-full">
    <!-- HERO -->
    <section class="relative bg-black text-white" data-aos="fade-up">
      <img :src="GambarHome" alt="shoes" class="w-full h-[500px] object-cover opacity-70" />
      <div
        class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-10"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 class="text-4xl font-bold">FIND SHOES<br />THAT MATCHES<br />YOUR STYLE</h1>
        <p class="mt-4 max-w-md">
          Discover curated selections of thrift and limited edition shoes designed to bring out your
          unique style.
        </p>
        <a
          href="#"
          class="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg shadow"
          data-aos="fade-right"
          data-aos-delay="200"
          >Shop Now</a
        >
        <div class="flex gap-8 mt-6 text-sm" data-aos="fade-left" data-aos-delay="300">
          <span><strong>200+</strong> International Brands</span>
          <span><strong>2,000+</strong> High Quality Products</span>
          <span><strong>30,000+</strong> Happy Customers</span>
        </div>
      </div>
    </section>

    <!-- BRAND STRIP -->
    <section
      class="bg-blue-900 py-8 flex justify-center gap-12 text-white font-semibold text-lg"
      data-aos="fade-up"
    >
      <span data-aos="flip-left">NIKE</span>
      <span data-aos="flip-left" data-aos-delay="50">VERSACE</span>
      <span data-aos="flip-left" data-aos-delay="100">ZARA</span>
      <span data-aos="flip-left" data-aos-delay="150">GUCCI</span>
      <span data-aos="flip-left" data-aos-delay="200">PRADA</span>
      <span data-aos="flip-left" data-aos-delay="250">Calvin Klein</span>
    </section>

    <!-- NEW ARRIVALS -->
    <section class="py-18 px-8 sm:px-16 lg:px-[140px] pb-24 md:pb-30">
      <h2 class="text-center text-3xl font-extrabold mb-6">
        NEW <span class="text-blue-800">ARRIVALS</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="item in newArrivals"
          :key="item.id"
          class="bg-white shadow rounded-lg p-4"
          :data-aos="'fade-up'"
          data-aos-once="true"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover rounded" />
          <h3 class="mt-4 font-semibold">{{ item.name }}</h3>
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold">${{ item.price }}</span>
            <span v-if="item.discount" class="text-sm line-through text-gray-400"
              >${{ item.discount }}</span
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button class="px-6 py-2 border rounded-lg">View All</button>
      </div>
    </section>

    <!-- PROMO SELLING -->
    <section class="py-18 px-8 sm:px-16 lg:px-[140px] pb-24 md:pb-30 bg-gray-50" data-aos="fade-up">
      <h2 class="text-center text-3xl font-extrabold mb-6">
        PROMO <span class="text-blue-800">SELLING</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(item, idx) in promoSelling"
          :key="item.id"
          class="bg-white shadow rounded-lg p-4"
          :data-aos="'zoom-in'"
          :data-aos-delay="idx * 100"
        >
          <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover rounded" />
          <h3 class="mt-4 font-semibold">{{ item.name }}</h3>
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold">${{ item.price }}</span>
            <span v-if="item.discount" class="text-sm line-through text-gray-400"
              >${{ item.discount }}</span
            >
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button class="px-6 py-2 border rounded-lg">View All</button>
      </div>
    </section>

    <!-- BROWSE STYLE -->
    <section class="py-12 px-6 sm:px-16 lg:px-[140px] pb-24 md:pb-30">
      <div class="max-w-6xl mx-auto bg-gray-100 shadow-lg rounded-2xl p-8">
        <h2 class="text-center text-3xl font-extrabold mb-10">
          BROWSE BY <span class="text-blue-800">DRESS STYLE</span>
        </h2>
        <!-- Grid untuk Style -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Card Casual -->
          <div
            class="relative h-64 w-[350px] rounded-xl overflow-hidden bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1593032465175-394435b7a177?q=80&w=1887&auto=format&fit=crop');
            "
            data-aos="fade-right"
          >
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            <h3
              class="absolute top-5 left-5 text-2xl font-bold text-white"
              style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)"
            >
              Casual
            </h3>
          </div>

          <!-- Card Formal -->
          <div
            class="relative -left-32 h-64 w-[610px] rounded-xl overflow-hidden bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1610652492515-9989937584a2?q=80&w=1887&auto=format&fit=crop');
            "
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            <h3
              class="absolute top-5 left-5 text-2xl font-bold text-white"
              style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)"
            >
              Formal
            </h3>
          </div>

          <!-- Card Party -->
          <div
            class="relative h-64 w-[610px] rounded-xl overflow-hidden bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1516256734614-8a3c48a70c12?q=80&w=1887&auto=format&fit=crop');
            "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            <h3
              class="absolute top-5 left-5 text-2xl font-bold text-white"
              style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)"
            >
              Party
            </h3>
          </div>

          <!-- Card Gym -->
          <div
            class="relative -right-32 h-64 w-[355px] rounded-xl overflow-hidden bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop');
            "
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            <h3
              class="absolute top-5 left-5 text-2xl font-bold text-white"
              style="text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5)"
            >
              Gym
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- HAPPY CUSTOMERS -->
    <section class="py-18 px-8 sm:px-16 lg:px-[140px] pb-24 md:pb-30 bg-gray-50" data-aos="fade-up">
      <div class="flex justify-between">
        <h2 class="text-3xl font-extrabold mb-6">
          OUR HAPPY <span class="text-blue-800">CUSTOMERS</span>
        </h2>
        <div>
          <a href="#" class="bg-blue-800 text-white px-4 py-3 rounded-lg shadow" data-aos="zoom-in"
            >More Review</a
          >
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-white shadow rounded-lg p-6" data-aos="fade-right">
          <p>"I'm blown away by the quality and style of the shoes I received!"</p>
          <span class="mt-2 block font-semibold">- Sarah M.</span>
        </div>
        <div class="bg-white shadow rounded-lg p-6" data-aos="fade-up" data-aos-delay="100">
          <p>"The range of options is truly remarkable, catering to many styles."</p>
          <span class="mt-2 block font-semibold">- Alex K.</span>
        </div>
        <div class="bg-white shadow rounded-lg p-6" data-aos="fade-left" data-aos-delay="200">
          <p>"The collection of shoes is not only diverse but always on point."</p>
          <span class="mt-2 block font-semibold">- James L.</span>
        </div>
      </div>
    </section>

    <!-- RATE WEBSITE -->
    <section class="py-18 px-8 sm:px-16 lg:px-[140px] pb-24 md:pb-30">
      <div class="flex flex-col md:flex-row gap-10 md:gap-8">
        <!-- Info -->
        <div class="flex flex-col flex-2">
          <h1 class="text-4xl sm:text-[42px] font-bold leading-tight sm:leading-[1.2]">
            Rate Our <span class="text-blue-800">Website</span>
          </h1>
          <p class="text-gray-600 text-sm sm:text-base mt-4">
            We’d love to hear your feedback! By giving us a rating, you help us improve and create a
            better experience for all visitors.
          </p>
        </div>

        <!-- Rating Form -->
        <div
          class="p-4 sm:p-6 rounded-3xl w-full flex-1 border border-gray-200"
          data-aos="fade-left"
        >
          <h4 class="font-semibold text-2xl sm:text-[32px]">Leave a Rating</h4>
          <p class="text-gray-600 text-sm sm:text-base mb-6">Feel free to send us your thoughts.</p>
          <form class="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              class="px-4 w-full py-3 text-sm border placeholder:text-gray-500 border-gray-200 rounded-full"
            />
            <input
              type="email"
              placeholder="Email"
              class="px-4 w-full py-3 text-sm border placeholder:text-gray-500 border-gray-200 rounded-full"
            />
            <textarea
              rows="5"
              placeholder="Message"
              class="px-4 py-3 text-sm placeholder:text-gray-500 border border-gray-200 rounded-3xl"
            ></textarea>
            <button type="submit" class="bg-blue-800 text-white px-6 py-3 font-medium rounded-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
