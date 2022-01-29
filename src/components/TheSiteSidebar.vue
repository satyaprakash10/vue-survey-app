<template>
  <div class="flex flex-col flex-1 min-h-0 bg-indigo-700">
    <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 px-4">
        <img
          class="w-auto h-8"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
          alt="Workflow"
        />
      </div>
      <nav class="flex-1 px-2 mt-5 space-y-1" aria-label="Sidebar">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-indigo-800 text-white'
              : 'text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
          ]"
        >
          <component
            :is="item.icon"
            class="flex-shrink-0 w-6 h-6 mr-3 text-indigo-300"
            aria-hidden="true"
          />
          <span class="flex-1">
            {{ item.name }}
          </span>
          <span
            v-if="item.count"
            :class="[
              item.current ? 'bg-indigo-600' : 'bg-indigo-800',
              'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
            ]"
          >
            {{ item.count }}
          </span>
        </a>
      </nav>
    </div>
    <div class="flex flex-shrink-0 p-4 border-t border-indigo-800">
      <a href="#" class="flex-shrink-0 block w-full group">
        <div class="flex items-center">
          <div>
            <img
              class="inline-block rounded-full h-9 w-9"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-white">Tom Cook</p>
            <p
              class="text-xs font-medium text-indigo-200 group-hover:text-white"
            >
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>
