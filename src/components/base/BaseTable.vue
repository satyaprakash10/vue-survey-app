<template>
  <div v-if="data" class="mt-10">
    <h1 class="text-lg font-medium text-gray-900 sm:text-2xl">List of Data</h1>

    <div class="flex flex-col mt-4">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
          >
            <!-- Table Section  -->
            <table class="min-w-full divide-y divide-gray-200" :data="data">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Car Type
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Car Brand
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Available Cities
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Car Photo
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <!-- Table body section  -->
              <tbody>
                <tr class="bg-gray-50">
                  <td
                    class="px-6 py-4 text-sm font-medium text-left text-gray-900 whitespace-nowrap"
                  >
                    {{ data.car_type }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap"
                  >
                    {{ data.car_brand }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap"
                  >
                    {{ data.price }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap"
                  >
                    {{ data.available_cities }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap"
                  >
                    <img :src="data.car_photo" alt="image" class="w-20 h-10" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm text-left text-gray-500 whitespace-nowrap"
                  >
                    {{ data.status ? 'Active' : 'Inactive' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: [Array, Function, Object],
    required: true,
  },
})

console.log(props)
</script>
