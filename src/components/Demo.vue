<template>
  <div>
    <div class="px-6 py-4 mx-auto mt-20 max-w-7xl">
      <div class="flex items-center justify-between">
        <nav class="" aria-label="Breadcrumb">
          <h1 class="mb-6 text-lg font-bold sm:text-xl">Borrowers</h1>
        </nav>
      </div>

      <!-- Filters Wrapper Data -->
      <div
        class="px-4 py-3 border-t-2 rounded-md shadow-md border-t-emerald-500 bg-blue-50"
      >
        <div class="justify-between max-w-3xl mt-2 mb-10 sm:flex">
          <h3
            class="mb-6 font-serif text-xl font-bold text-gray-900 sm:mb-0 sm:text-2xl"
          >
            Filters
          </h3>
          <button
            type="submit"
            @click="addMoreFilters"
            class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm sm:w-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FilterIcon class="w-5 h-5 mr-3" />
            Add FIlter
          </button>
        </div>
        <div
          class="items-center mb-8 lg:space-x-6 lg:flex"
          v-for="(filter, index) in filters"
          :key="index"
        >
          <div class="w-full mb-4 lg:w-60 sm:mb-0">
            <Multiselect
              placeholder="Select Column Name"
              :close-on-select="false"
              :filter-results="false"
              :min-chars="1"
              class="border border-indigo-500 focus:outline-border"
              :resolve-on-load="true"
              :delay="0"
              :options="filterColumn"
              v-model="filter.colName"
            />
          </div>
          <div class="w-full mb-4 lg:w-60 sm:mb-0">
            <Multiselect
              v-if="
                filter.colName === 'firstName' ||
                filter.colName === 'lastName' ||
                filter.colName === 'maritalStatus' ||
                filter.colName === 'emailAddress' ||
                filter.colName === 'currentAddress' ||
                filter.colName === 'employer' ||
                filter.colName === 'title' ||
                filter.colName === 'subjectPropertyAddress'
              "
              v-model="filter.filterType"
              placeholder="Select Column Name"
              :close-on-select="false"
              :filter-results="false"
              :min-chars="1"
              class="border border-indigo-500 focus:outline-border"
              :resolve-on-load="true"
              :delay="0"
              :options="stringDataType"
            />

            <Multiselect
              v-else
              v-model="filter.filterType"
              placeholder="Select Column Name"
              :close-on-select="false"
              :filter-results="false"
              :min-chars="1"
              class="border border-indigo-500 focus:outline-border"
              :resolve-on-load="true"
              :delay="0"
              :options="numericDataType"
            />
          </div>

          <input
            v-model="filter.name"
            placeholder="Enter Column Name"
            class="w-full px-4 py-2 mb-4 bg-gray-100 border border-indigo-500 rounded-md shadow-md hover:bg-gray-200 sm:mb-0 sm:w-60"
          />

          <hr class="mt-4 mb-4 sm:hidden" />

          <div class="flex items-center mt-4 sm:mt-0">
            <XIcon
              v-if="filters.length > 1"
              class="w-10 h-10 p-2 mr-6 cursor-pointer hover:bg-indigo-200 hover:rounded-lg mr4 hover:text-indigo-500"
              @click="removeFilter(index.length != 0)"
            />
            <button
              @click="clearFilter"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-gray-900 bg-transparent border border-indigo-500 rounded-md shadow-xl hover:bg-opacity-50 sm:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <XIcon class="w-5 h-5 mr-3" />
              Clear FIlter
            </button>
          </div>
          <hr class="mt-6" />
        </div>
      </div>
      <hr class="mt-6 sm:hidden" />

      <!-- Table data list -->
      <div class="mt-10 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="overflow-hidden border-t-2 border-b-2 border-indigo-500 shadow-xl sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-blue-100">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    firstName
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    lastName
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    dateOfBirth
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    creditScore
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    maritalStatus
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    w2Income
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    emailAddress
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    homePhone
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    cellPhone
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    currentAddress
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    employer
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    startDate
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    subjectPropertyAddress
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(borrower, index) in filteredPersons"
                  :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                  :key="index"
                  class="cursor-pointer hover:bg-indigo-100"
                >
                  <td
                    class="px-6 py-4 text-sm font-medium text-indigo-500 cursor-pointer hover:text-gray-900 whitespace-nowrap"
                  >
                    {{ borrower.firstName }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.lastName }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.dateOfBirth }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.creditScore }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.maritalStatus }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.w2Income }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.emailAddress }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.homePhone }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.cellPhone }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.currentAddress }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.employer }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.title }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.startDate }}
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ borrower.subjectPropertyAddress }}
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
import { reactive, computed, ref } from 'vue'
import { FilterIcon, XIcon } from '@heroicons/vue/solid'
import Multiselect from '@vueform/multiselect'
import Json from '../Json/borrowers.json'

// Local State
let filters = reactive([
  {
    name: '',
    colName: '',
    filterType: '',
  },
])

let filterColumn = reactive([
  'firstName',
  'lastName',
  'dateOfBirth',
  'creditScore',
  'maritalStatus',
  'w2Income',
  'emailAddress',
  'homePhone',
  'cellPhone',
  'currentAddress',
  'employer',
  'title',
  'startDate',
  'subjectPropertyAddress',
])
let stringDataType = reactive(['Equals', 'Includes'])
let numericDataType = reactive(['>', '<'])
let JsonData = Json

const filteredPersons = computed(() => {
  return JsonData.filter(filterByName)
    .filter(filterByNumeric)
    .filter(filterByDate)
})

// methods

// to Add more Filter
function addMoreFilters() {
  filters.push({
    name: '',
  })
}

// to remove Filter fields
function removeFilter(index) {
  if (length === 0) {
    filters.splice(index, 1)
  }
}

// to filter by Name
function filterByName(user) {
  // no search, don't filter :
  for (let index = 0; index < filters.length; index++) {
    const element = filters[index]

    if (element.name.length === 0) {
      return true
    }

    const string =
      user.firstName.toLowerCase().indexOf(element.name.toLowerCase()) > -1 ||
      user.lastName.toLowerCase().indexOf(element.name.toLowerCase()) > -1 ||
      user.maritalStatus.toLowerCase().indexOf(element.name.toLowerCase()) >
        -1 ||
      user.employer.toLowerCase().indexOf(element.name.toLowerCase()) > -1 ||
      user.subjectPropertyAddress
        .toLowerCase()
        .indexOf(element.name.toLowerCase()) > -1 ||
      user.title.toLowerCase().indexOf(element.name.toLowerCase()) > -1 ||
      user.currentAddress.toLowerCase().indexOf(element.name.toLowerCase()) >
        -1 ||
      user.emailAddress.toLowerCase().indexOf(element.name.toLowerCase()) > -1

    return string
  }
}

function filterByNumeric(user) {
  for (let index = 0; index < filters.length; index++) {
    const element = filters[index]
    if (element.filterType.length === 0 || element.name.length === 0) {
      // no operator selected or no age typed, don't filter :
      return true
    }

    if (element.colName === 'creditScore' || element.colName === 'w2Income') {
      if (element.filterType === '>') {
        const numeric = parseInt(user.creditScore) > parseInt(element.name)

        return numeric
      } else if (element.filterType === '<') {
        const numeric =
          parseInt(user.creditScore) < parseInt(element.name) ||
          parseInt(user.w2Income) < parseInt(element.name)

        return numeric
      }
    }
  }
}

function filterByDate(user) {
  for (let index = 0; index < filters.length; index++) {
    const element = filters[index]

    // no operator selected or no age typed, don't filter :
    if (element.filterType.length === 0 || element.name.length === 0) {
      return true
    }
    if (element.colName === 'dateOfBirth' || element.colName === 'startDate') {
      if (element.filterType === '>') {
        const date =
          user.dateOfBirth > element.name || user.startDate > element.name
        return date
      } else if (element.filterType === '<') {
        const date =
          user.dateOfBirth < element.name || user.startDate < element.name
        return date
      }
    }
  }
}

// to Clear filter data
function clearFilter() {
  filters = [
    {
      colName: '',
      name: '',
      filterType: '',
    },
  ]
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped></style>
