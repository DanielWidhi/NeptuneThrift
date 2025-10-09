<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import TrashCan from '@/components/icons/TrashCan.vue'
import Search from '@/components/icons/Search.vue'
import Edit from '@/components/icons/Edit.vue'
import Plus from '@/components/icons/Plus.vue'

// Dummy data kategori (biar tabel ada isinya)
const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Books' },
  { id: 4, name: 'Home & Living' },
]

const firstItemNumber = 1
const lastItemNumber = categories.length
const totalCount = categories.length
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between gap-3 flex-wrap">
      <h1 class="text-3xl font-semibold">Categories</h1>
    </div>

    <!-- Card -->
    <div class="flex flex-col rounded-3xl border border-gray-300">
      <div class="flex flex-col p-4">
        <!-- Search & Button -->
        <div class="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
          <div
            class="border border-neu-100 gap-2 px-2.5 order-2 sm:order-1 py-2 flex items-center w-full sm:w-1/2 rounded-full"
          >
            <Search class="size-6" />
            <input
              type="text"
              class="w-full text-xs md:text-sm leading-5 placeholder:text-neu-500 focus:outline-none"
              placeholder="Search something..."
            />
          </div>
          <button
            type="button"
            class="whitespace-nowrap flex px-4.5 order-1 sm:order-2 py-2.5 cursor-pointer w-fit hover:bg-blue-600 text-sm gap-2 items-center justify-center font-medium bg-blue-700 rounded-full text-white"
          >
            <Plus class="size-5" />
            New Category
          </button>
        </div>

        <!-- Table -->
        <div class="mt-4 overflow-hidden border border-gray-300 rounded-2xl">
          <div class="max-w-full overflow-x-auto">
            <table class="min-w-180 w-full">
              <thead class="bg-blue-700 text-xs text-white">
                <tr>
                  <th class="p-4 text-start font-semibold w-12">NO</th>
                  <th class="p-4 text-start font-semibold">NAME</th>
                  <th class="p-4 text-start font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(category, index) in categories"
                  :key="category.id"
                  class="text-sm text-gray-900 border-b border-gray-300"
                >
                  <td class="p-4 text-gray-900">{{ index + 1 }}</td>
                  <td class="p-4 text-gray-900 font-semibold">{{ category.name }}</td>
                  <td class="p-4 flex gap-3">
                    <button
                      type="button"
                      class="flex items-center justify-center p-2 rounded-[6px] cursor-pointer hover:bg-[#F0BF05] bg-[#FACA15]"
                    >
                      <Edit class="size-5 text-gray-900" />
                    </button>
                    <button
                      type="button"
                      class="flex items-center justify-center p-2 rounded-[6px] cursor-pointer hover:bg-[#B71A1A] bg-[#E02424]"
                    >
                      <TrashCan class="size-5 text-neu-50" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Jika tidak ada data -->
        <div v-if="categories.length === 0" class="text-center py-8 text-gray-500">
          No categories found. Try a different search or add a new one!
        </div>

        <!-- Pagination dummy -->
        <div v-if="totalCount > 0" class="flex justify-between items-center gap-3 flex-wrap mt-3">
          <div class="text-sm text-neu-600">
            Showing <span class="font-medium text-neu-900">{{ firstItemNumber }}</span> to
            <span class="font-medium text-neu-900">{{ lastItemNumber }}</span> of
            <span class="font-medium text-neu-900">{{ totalCount }}</span> Entries
          </div>
          <div class="flex items-center rounded-[8px] overflow-hidden">
            <button
              class="flex bg-gray-300 hover:bg-gray-200 gap-2 h-8 px-3 items-center font-semibold transition-colors text-gray-900"
              aria-label="Prev Page"
            >
              <ArrowRight class="size-4 scale-x-[-1]" />Prev
            </button>
            <button
              class="flex bg-gray-300 hover:bg-gray-200 gap-2 h-8 px-3 items-center font-semibold transition-colors text-gray-900 border-l border-gray-200"
              aria-label="Next Page"
            >
              Next<ArrowRight class="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
