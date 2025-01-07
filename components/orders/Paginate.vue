<template>
  <div class="d-f ai-c jc-fe py-3">
    <div class="px-2 d-f ai-c"><si-button :px="1" :py="1" @click="changePage(active - 1)" color="#a8a8a8"
        :disabled="active <= 1"><span class="d-f ai-c" v-html="prevIcon"></span></si-button>
    </div>
    <si-button v-if="active > 1" :py="2" :px="4" @click="changePage(1)">{{ 1 }}</si-button>
    <span :py="2" :px="4" v-if="active > 3">...</span>
    <div v-for="index in gards" :key="'before' + index" class="px-1">
      <si-button v-if="active > 1 && (active - (gards + 1)) + index > 1" class="px-2" :py="2" :px="4" background="#ffffff"
        color="#333" @click="changePage((active - (gards + 1)) + index)">{{ (active - (gards + 1)) + index }}</si-button>
    </div>
    <si-button :py="2" :px="4" background="#4479e2" color="#ffffff">{{ active }}</si-button>
    <div v-for="index in gards" :key="'after' + index" class="px-1">
      <si-button v-if="active < paginate.last_page && active + index < paginate.last_page" class="px-2" :py="2" :px="4"
        background="#ffffff" color="#333" @click="changePage(active + index)">{{ active + index }}</si-button>
    </div>
    <span :py="2" :px="4" v-if="active < paginate.last_page - 4">...</span>
    <si-button v-if="active < paginate.last_page" :py="2" :px="4"
      @click="changePage(paginate.last_page)">{{ paginate.last_page }}</si-button>
    <div class="px-2 d-f ai-c">
      <si-button :px="1" :py="1" @click="changePage(active + 1)" color="#a8a8a8"
        :disabled="active >= paginate.last_page"><span class="d-f ai-c" v-html="nextIcon"></span></si-button>
    </div>
  </div>
</template>

<script>
export default {
  props: { paginate: Object, gardNumber: { type: Number, default: 2 } },
  components: { 'si-button': () => import('@/components/account/SiButton') },
  data() {
    return {
      active: this.paginate.current_page,
      nextIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      prevIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>'
    }
  },
  computed: { gards: function () { if (this.gardNumber % 2 == 0) return this.gardNumber / 2; if (this.gardNumber % 2 != 0) return pasrseInt(this.gardNumber / 2); } },
  methods: { changePage(page) { ; this.active = page; this.$emit('input', page) } }
}
</script>
