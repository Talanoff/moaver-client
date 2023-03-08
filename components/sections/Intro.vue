<template>
  <section class="container">
    <figure
        class="h-screen max-h-[32rem] -mb-24 rounded-lg overflow-hidden bg-center bg-cover"
        style="background-image: url('https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80')"
    />

    <div class="max-w-[90%] xl:max-w-[64rem] bg-white shadow-2xl shadow-slate-200/75 p-5 lg:p-8 rounded-md mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 text-sm font-semibold">
        <button
            type="button"
            class="block group text-center"
            v-for="category of categories"
            :key="category.icon"
        >
          <div class="flex justify-center items-center p-5 lg:p-8 border-2 border-slate-200 rounded-md group-hover:border-blue-600 group-hover:bg-slate-50 transition-colors duration-300">
            <svg class="h-16">
              <use :xlink:href="`/icons/categories.svg#${category.icon}`"/>
            </svg>
          </div>

          <div class="mt-1.5 group-hover:text-slate-700">
            {{ category.name }}
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface CategoryItemInterface {
  icon: string;
  name: string;
}

const categories: CategoryItemInterface[] = [
  {
    icon: 'package',
    name: 'One package'
  },
  {
    icon: 'trolley',
    name: 'Many packages'
  },
  {
    icon: 'pallet',
    name: 'Pallet(s)'
  },
  {
    icon: 'warehouse',
    name: 'Various goods'
  }
];
</script>
