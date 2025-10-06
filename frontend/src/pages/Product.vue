<script>
export default {
  name: "ProductPage",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Gradient Graphic T-shirt",
          rating: 3.5,
          originalPrice: 145,
          image:
            "https://storage.googleapis.com/gemini-prod/images/f3fa5958-3162-4309-868c-100257e55490",
        },
        {
          id: 2,
          name: "Polo with Tipping Details",
          rating: 4.5,
          originalPrice: 180,
          image:
            "https://storage.googleapis.com/gemini-prod/images/05179093-e4d5-45a7-8051-5126839a8c60",
        },
        {
          id: 3,
          name: "Black Striped T-shirt",
          rating: 5.0,
          originalPrice: 150,
          discountPrice: 120,
          discount: "-30%",
          image:
            "https://storage.googleapis.com/gemini-prod/images/a83852cd-7f61-4560-a299-1efaf039bd87",
        },
        {
          id: 4,
          name: "Skinny Fit Jeans",
          rating: 3.5,
          originalPrice: 260,
          discountPrice: 240,
          discount: "-20%",
          image:
            "https://storage.googleapis.com/gemini-prod/images/84107cb8-5a41-4c7b-9c29-373f7895111b",
        },
        {
          id: 5,
          name: "Checkered Shirt",
          rating: 4.5,
          originalPrice: 180,
          image:
            "https://storage.googleapis.com/gemini-prod/images/d8c1c24e-3788-46f9-8472-358046b97623",
        },
        {
          id: 6,
          name: "Sleeve Striped T-shirt",
          rating: 4.5,
          originalPrice: 160,
          discountPrice: 130,
          discount: "-30%",
          image:
            "https://storage.googleapis.com/gemini-prod/images/8ac9210c-fb93-4e4b-bb68-5276329c3666",
        },
        {
          id: 7,
          name: "Vertical Striped Shirt",
          rating: 5.0,
          originalPrice: 232,
          discountPrice: 212,
          discount: "-20%",
          image:
            "https://storage.googleapis.com/gemini-prod/images/0c007c09-a178-45a2-850f-21f456c12740",
        },
        {
          id: 8,
          name: "Courage Graphic T-shirt",
          rating: 4.0,
          originalPrice: 145,
          image:
            "https://storage.googleapis.com/gemini-prod/images/4294b07c-9ef4-41d8-81d4-06788d40026e",
        },
        {
          id: 9,
          name: "Loose Fit Bermuda Shorts",
          rating: 3.0,
          originalPrice: 80,
          image:
            "https://storage.googleapis.com/gemini-prod/images/e8c25f4b-3cc3-4a6c-81b0-13e71d374a2f",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="container mx-auto py-8 px-6 sm:px-16 lg:px-[140px] pb-24 md:pb-30">
    <!-- Breadcrumb Navigation -->
    <div class="mb-4 text-sm text-gray-500">
      <span>Home</span>
      <span class="mx-2">></span>
      <span>Product</span>
    </div>

    <div class="flex flex-col md:flex-row -mx-4">
      <!-- Filters Sidebar -->
      <aside class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
        <div class="sticky top-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">Filters</h2>
            <button class="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>

          <!-- Brands Filter -->
          <div class="border-t py-4">
            <h3 class="font-semibold mb-2">Brands</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="nike"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="nike" class="ml-3 text-sm text-gray-600">Nike</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="pull-and-bear"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="pull-and-bear" class="ml-3 text-sm text-gray-600">Pull and Bear</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="adidas"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="adidas" class="ml-3 text-sm text-gray-600">Adidas</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="reebok"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="reebok" class="ml-3 text-sm text-gray-600">Rebook</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="vans"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="vans" class="ml-3 text-sm text-gray-600">Vans</label>
              </div>
            </div>
          </div>

          <!-- Price Filter -->
          <div class="border-t py-4">
            <h3 class="font-semibold mb-2">Price</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="lowest-to-highest"
                  name="price"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="lowest-to-highest" class="ml-3 text-sm text-gray-600"
                  >Lowest to Highest</label
                >
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="highest-to-lowest"
                  name="price"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="highest-to-lowest" class="ml-3 text-sm text-gray-600"
                  >Highest to Lowest</label
                >
              </div>
            </div>
          </div>

          <!-- Dress Style Filter -->
          <div class="border-t py-4">
            <h3 class="font-semibold mb-2">Dress Style</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="casual"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="casual" class="ml-3 text-sm text-gray-600">Casual</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="formal"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="formal" class="ml-3 text-sm text-gray-600">Formal</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="party"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="party" class="ml-3 text-sm text-gray-600">Party</label>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="gym"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label for="gym" class="ml-3 text-sm text-gray-600">Gym</label>
              </div>
            </div>
          </div>
          <button
            class="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800 transition-colors"
          >
            Apply Filter
          </button>
        </div>
      </aside>

      <!-- Products Grid -->
      <div class="w-full md:w-3/4 px-4">
        <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 class="text-3xl font-bold mb-4 sm:mb-0">Product</h1>
          <div class="flex items-center text-sm text-gray-500">
            <span>Showing 1-10 of 100 Products</span>
            <div class="ml-4">
              <label for="sort-by" class="sr-only">Sort by</label>
              <select id="sort-by" name="sort-by" class="border-gray-300 rounded-md">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product Cards -->
          <div v-for="product in products" :key="product.id" class="text-center">
            <div class="bg-gray-100 rounded-lg p-4 mb-2 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 class="font-semibold text-gray-800">{{ product.name }}</h3>
            <div class="flex justify-center items-center my-1">
              <div class="flex">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-4 h-4"
                  :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
              <span class="text-xs text-gray-500 ml-1">{{ product.rating.toFixed(1) }}/5</span>
            </div>
            <p class="font-bold text-gray-900">
              <span v-if="product.discountPrice" class="text-red-500"
                >${{ product.discountPrice }}</span
              >
              <span
                v-if="product.originalPrice && product.discountPrice"
                class="text-gray-500 line-through ml-2"
                >${{ product.originalPrice }}</span
              >
              <span v-if="!product.discountPrice">${{ product.originalPrice }}</span>
              <span
                v-if="product.discount"
                class="bg-red-100 text-red-500 text-xs font-semibold ml-2 px-2 py-0.5 rounded"
                >{{ product.discount }}</span
              >
            </p>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center items-center mt-8">
          <button class="p-2 border rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <span class="px-4 py-2 bg-gray-900 text-white rounded-md mx-2">1</span>
          <button class="p-2 border rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
/* Anda dapat menambahkan style scoped khusus di sini jika diperlukan */
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
</style>
