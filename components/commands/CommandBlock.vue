<template>
  <!--  -->
  <tr>
    <!-- command ID -->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
      <div class="text-xs leading-5 capitalize px-2 rounded-full text-gray-900">
        {{ command._id.slice(command._id.length - 6, command._id.length) }}
      </div>
    </td>
    <!-- command ID-->

    <!-- Description -->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
      <div class="text-xs leading-5 capitalize px-2 rounded-full text-gray-900" >
        {{ command.name.length > 10 ? command.name.slice(0, 10) + "..." : command.name}}
      </div>
    </td>
    <!-- Description -->

    <!-- images-->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
        <!--  -->
        <div v-if="command.images.length > 0" class="flex items-center justify-center gap-2 cursor-pointer" @click="showAlert(command.images)">
          <img class="w-10 h-10 object-cover cursor-pointer" :src="command.images[0]" alt="Full screen images"/>
          <span class="rounded-full text-blue-700 font-semibold text-xs">+{{ command.images.length }}</span>
        </div>
        <!--  -->
        <div v-else class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
            {{ translate[$store.state.CURRENT_LANGUAGE].no_images }}
        </div>
        <!--  -->
        <si-full-image :alertDisplay="alertDisplay" @closeAlert="closeAlert" :images="alertImages"></si-full-image>
        <!--  -->
    </td>
    <!-- images --> 

    <!-- Status -->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
      <div class="text-xs font-semibold leading-5 capitalize px-2 rounded-full text-gray-900 text-yellow-400">
        {{ command.status }}
      </div>
    </td>
    <!-- Status-->

    <!-- Created Date -->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
      <div class="text-xs leading-5 capitalize px-2 rounded-full text-yellow-900">
        {{ command.createdAt | formatDate }}
      </div>
    </td>
    <!-- Created Date -->

    <!-- Actions -->
    <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
      <!--  -->
      <div class="flex gap-2">
        <!--  -->
        <button class="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200" @click="showRequested">
          <span class="icon d-f ai-c text-blue-700" v-html="arrowBottomIcon"></span>
        </button>
        <!--  -->
        <a :href="`/commands/${command._id}`" target="_self" class="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200">
            <span class="icon d-f ai-c text-blue-700" v-html="eyeIcon"></span>
        </a>
        <!--  -->
      </div>
      <!--  -->
    </td>
    <!-- Actions -->
  </tr>
  <!--  -->
</template>

<script>
export default {
  props: { 
    command: Object 
  },
  components: {
    'si-full-image': () => import('@/components/account/FullImage.vue')
  },
  data() {
    return {
      translate: {
        AR: require('../../../locales/ar.json'),
        EN: require('../../../locales/en.json'),
        FR: require('../../../locales/fr.json')
      },
      alertDisplay: false,
      alertImages: [],
      eyeIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"/><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"/></svg>',
      arrowBottomIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z" fill="currentColor"/></svg>',
    }
  },
  computed: { 
    isMobile: function () { 
      return this.$store.state.isMobile 
    } 
  },
  methods: {
    showRequested() {
      this.$emit("showRequested");
    },
    showAlert(images) {
        this.alertDisplay = true;
        this.alertImages = images
    },
    closeAlert() {
        this.alertDisplay = false;
        this.alertImages = []
    }
  }
}
</script>