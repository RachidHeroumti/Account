<template>
  <div class="nav p-r">
    <div v-for="item in menu" :key="item.key">
      <!--  -->
      <nuxt-link :to="item.link" v-if="item.key != 'login'">
        <div class="d-f ai-c jc-sb py-1 px-4 nav-menu my-2" :class="active == item.key ? 'active-item' : null"
          @click="navigate(item.key)">
          <div class="d-f ai-c">
            <span class="icon d-f ai-c" v-if="item.icon" v-html="item.icon"></span>
            <span class="px-2 ws-nw">{{ translate[$store.state.CURRENT_LANGUAGE][item.text] }}</span>
          </div>
          <span v-if="item.showCount">{{ counts[item.key] }}</span>
        </div>
      </nuxt-link>
      <!--  -->
      <a v-else :href="'/checkout2' + item.link">
        <div class="d-f ai-c jc-sb py-1 px-4 nav-menu my-2" :class="active == item.key ? 'active-item' : null"
          @click="navigate(item.key)">
          <div class="d-f ai-c ">
            <span class="icon" v-if="item.icon" v-html="item.icon"></span>
            <span class="px-2 ws-nw">{{ item.text }}</span>
          </div>
          <span v-if="item.showCount">{{ counts[item.key] }}</span>
        </div>
      </a>
      <!--  -->
    </div>
    <!--  -->
    <span v-if="this.$store.state.isMobile" class="close--icon p-a" v-html="closeIcon" @click="$emit('close')"></span>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: { 
    menu: Array, 
      counts: { type: Object, default: {} } 
    },
  data() {
    return {
      active: null,
      translate: {
        AR: require('../../locales/ar.json'),
        EN: require('../../locales/en.json'),
        FR: require('../../locales/fr.json')
      },
      closeIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    }
  },
  fetch() {
    this.active = this.$route.name
  },
  methods: {
    navigate(key) {
      if (key == "login") { this.$utils.deleteCookie('CUSTOMER') }
      this.active = key;
      this.$emit('close');
      this.$utils.postMessage({ type: 'route', data: key })
    },
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: #a8a8a8
}

.active-item {
  background-color: var(--primary-color-op);
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  color: var(--primary-color);

  .icon {
    color: var(--primary-color);

    svg {
      fill: #4479e226 !important;
    }
  }
}

.nav-menu {
  transition: .2s;

  &:hover {
    @extend .active-item;
    cursor: pointer
  }
}

.close--icon {
  position: absolute;
  background: #e2e7fd;
  padding: 4px 10px;
  color: #1b6cffc9;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;

  svg {
    width: 18px;
  }
}
</style>
