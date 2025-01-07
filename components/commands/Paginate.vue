<template>
  <!-- pagination -->
  <div class="d-f ai-c jc-c py-3">
    <!--  -->
    <div class="px-2 d-f ai-c">
      <button :class="style" @click="changePage(active - 1)" :disabled="active <= 1">
        <span class="d-f ai-c" v-html="prevIcon"></span>
      </button>
    </div>
    <!--  -->

    <!--  -->
    <div class="flex gap-1 h-8 font-medium rounded-full bg-gray-200 px-1">
      <!--  -->
      <button class="bg-black text-white" :class="style2" v-if="active > 1" @click="changePage(1)">{{ 1 }}</button>
      <!--  -->
  
      <!--  -->
      <span class="bg-black text-white" :class="style2" v-if="active > 3">...</span>
      <!--  -->
  
      <!--  -->
      <div v-for="index in gards" :key="'before' + index">
        <button class="bg-black text-white" :class="style2" v-if="active > 1 && (active - (gards + 1)) + index > 1" @click="changePage((active - (gards + 1)) + index)">{{ (active - (gards + 1)) + index }}</button>
      </div>
      <!--  -->
  
      <!--  -->
      <button class="bg-blue-700 text-white" :class="style2">{{ active }}</button>
      <!--  -->
  
      <!--  -->
      <div v-for="index in gards" :key="'after' + index">
        <button class="bg-black text-white" :class="style2" v-if="active < paginate.last_page && active + index < paginate.last_page" @click="changePage(active + index)">{{ active + index }}</button>
      </div>
      <!--  -->
  
      <!--  -->
      <span class="bg-black text-white" :class="style2" v-if="active < paginate.last_page - 4">...</span>
      <!--  -->
  
      <!--  -->
      <button class="bg-black text-white" :class="style2" v-if="active < paginate.last_page" @click="changePage(paginate.last_page)">{{ paginate.last_page }}</button>
      <!--  -->
    </div>
    <!--  -->

    <!--  -->
    <div class="px-2 d-f ai-c">
      <button :class="style" @click="changePage(active + 1)" :disabled="active >= paginate.last_page">
        <span class="d-f ai-c" v-html="nextIcon"></span>
      </button>
    </div>
    <!--  -->
  </div>
  <!--  -->
</template>

<script>
export default {
  props: { 
    paginate: Object, 
    gardNumber: { 
      type: Number, 
      default: 2 
    }
  },
  data() {
    return {
      active: this.paginate.current_page,
      nextIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      prevIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>',
      style: 'h-8 w-8 focus:outline-none flex justify-center text-black items-center rounded-full bg-gray-200 hover:bg-blue-700 hover:text-white cursor-pointer',
      style2: 'w-8 h-8 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full'
    }
  },
  computed: { 
    gards: function () { 
      if (this.gardNumber % 2 == 0) {
        return this.gardNumber / 2; 
      }
    
      if (this.gardNumber % 2 != 0) {
        return pasrseInt(this.gardNumber / 2); 
      }
    } 
  },
  methods: { 
    changePage(page) {
      this.active = page; 
      this.$emit('input', page);
    } 
  }
}
</script>
