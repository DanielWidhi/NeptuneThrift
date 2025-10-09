<script setup>
import ArrowRight from '@/components/icons/ArrowRight.vue'
import Show from '@/components/icons/Show.vue'
import TrashCan from '@/components/icons/TrashCan.vue'
import Search from '@/components/icons/Search.vue'
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between gap-3 flex-wrap">
      <h1 class="text-3xl font-semibold">Testimonials</h1>
    </div>

    <!-- Card Container -->
    <div class="flex flex-col rounded-3xl border border-gray-300">
      <div class="flex flex-col p-4">
        <!-- Search -->
        <div class="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
          <div
            class="border border-gray-300 gap-2 px-2.5 order-2 sm:order-1 py-2 flex items-center w-full sm:w-1/2 rounded-full"
          >
            <Search class="size-6" />
            <input
              type="text"
              class="w-full text-xs md:text-sm leading-5 placeholder:text-neu-500 focus:outline-none"
              placeholder="Search something..."
            />
          </div>
        </div>

        <!-- Table -->
        <div class="mt-4 overflow-hidden border border-gray-300 rounded-2xl">
          <div class="max-w-full overflow-x-auto">
            <table class="min-w-180 w-full">
              <thead class="bg-blue-700 text-xs text-white">
                <tr>
                  <th class="p-4 text-start font-semibold w-12">NO</th>
                  <th class="p-4 text-start font-semibold">DESTINATION NAME</th>
                  <th class="p-4 text-start font-semibold">TRAVELER NAME</th>
                  <th class="p-4 text-start font-semibold">RATING</th>
                  <th class="p-4 text-start font-semibold">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-sm text-gray-900 border-b border-gray-300">
                  <td class="p-4 text-gray-900">1</td>
                  <td class="p-4 text-gray-900 font-semibold">Gitgit Waterfall</td>
                  <td class="p-4">Udin Surudin</td>
                  <td class="p-4">
                    <div class="flex gap-1.5 items-center">
                      <StarFilled class="size-6" />
                      <StarFilled class="size-6" />
                      <StarFilled class="size-6" />
                      <StarFilled class="size-6" />
                      <StarFilled class="size-6" />
                    </div>
                  </td>
                  <td class="p-4 flex gap-3">
                    <button
                      type="button"
                      class="flex items-center justify-center p-2 rounded-[6px] cursor-pointer hover:bg-[#214B78] bg-[#295F98]"
                    >
                      <Show class="size-5 text-neu-50" />
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

        <!-- Pagination -->
        <div class="flex justify-between items-center gap-3 flex-wrap mt-3">
          <div class="text-sm text-gray-600">
            Showing <span class="font-medium text-neu-900">1</span> to
            <span class="font-medium text-neu-900">1</span> of
            <span class="font-medium text-neu-900">10</span> Entries
          </div>
          <div class="flex items-center rounded-[8px] overflow-hidden">
            <div class="flex bg-gray-300 hover:bg-gray-200 text-gray-900 gap-2 h-8 px-3 items-center font-semibold">
              <ArrowRight class="size-4 scale-x-[-1]" />Prev
            </div>
            <div class="flex bg-gray-300 hover:bg-gray-200 text-gray-900 gap-2 h-8 px-3 cursor-pointer items-center border-l border-gray-200 font-semibold">
              Next<ArrowRight class="size-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
