<template>
  <div class="d-f ai-c jc-c h-f">
    <div class="d-f ai-c jc-c">
      <transition name="fade">
                  <form class="flex justify-center items-center w-full h-full absolute top-0 left-0 transition-all" >
                    <div class="w-full border border-gray-300 rounded-lg p-6 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] space-y-4">
                      <!--  -->
                      <div class="mb-4">
                        <h3 class="text-gray-800 text-3xl font-extrabold">{{ translate.EN.create_account }}</h3>
                        <p class="text-gray-500 text-sm mt-4 leading-relaxed">{{ translate.EN.create_account_paragraph }}</p>
                      </div>
                      <!--  -->
  
                      <!--  -->
                      <div class="mb-4 flex items-center rounded-lg border border-gray-300 overflow-hidden transition-color">
                        <div class="flex flex-1 items-center justify-center font-medium text-sm cursor-pointer py-2 transition-color" @click="register.type = 'particular'" :class="register.type === 'particular' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'">
                          <span> {{translate.EN.particular}}</span>
                        </div>
                        <div class="flex flex-1 items-center justify-center font-medium text-sm cursor-pointer py-2 transition-color" @click="register.type = 'professional'" :class="register.type === 'professional' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'">
                          <span> {{translate.EN.professional}}</span>
                        </div>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div class="flex items-center gap-4">
                        <!--  -->
                        <div class="w-1/2">
                          <label class="text-gray-800 text-sm mb-2 block">
                            {{ translate.EN.first_name }} 
                            <strong style="color:red">*</strong>
                          </label>
                          <div class="relative flex items-center">
                            <input name="firstName" type="text" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.first_name_placeholder" v-model="register.firstname"/>
                            <svg class="w-5 h-5 absolute right-4" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/>
                              <path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="currentColor" stroke-width="1.5"/>
                              <circle cx="18" cy="16" r="4" stroke="currentColor" stroke-width="1.5"/>
                              <path d="M16.6665 14.6667L19.3332 17.3333M19.3335 14.6667L16.6668 17.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <!--  -->
    
                        <!--  -->
                        <div class="w-1/2">
                          <label class="text-gray-800 text-sm mb-2 block">
                            {{  translate.EN.last_name }} 
                            <strong style="color:red">*</strong>
                          </label>
                          <div class="relative flex items-center">
                            <input name="lastName" type="text" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.last_name_placeholder" v-model="register.lastname"/>
                            <svg class="w-5 h-5 absolute right-4" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/>
                              <path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="currentColor" stroke-width="1.5"/>
                              <circle cx="18" cy="16" r="4" stroke="currentColor" stroke-width="1.5"/>
                              <path d="M18 14.6667V17.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M16.6665 16L19.3332 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <!--  -->
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          {{ translate.EN.phone }}
                          <strong style="color:red">*</strong>
                        </label>
                        <div class="relative flex items-center">
                          <input name="phone" type="text" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.phone_placeholder" v-model="register.phone"/>
                          <svg class="w-5 h-5 absolute right-4" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          {{ translate.EN.email }}
                          <strong style="color:red">*</strong>
                        </label>
                        <div class="relative flex items-center">
                          <input name="email" type="email" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.email_placeholder" v-model="register.email"/>
                          <svg class="w-[18px] h-[18px] absolute right-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" height="20px" width="20px" version="1.1" id="Icons" viewBox="0 0 32 32" xml:space="preserve">
                            <path d="M26.2,8.5c-2.2-3.2-5.6-5.2-9.3-5.5c-0.3,0-0.6,0-0.9,0c-3.7,0-7.2,1.6-9.7,4.3c-2.5,2.7-3.6,6.4-3.2,10.1  c0.7,6,5.5,10.8,11.5,11.4C15,29,15.5,29,16,29c2.6,0,5-0.7,7.2-2.2c0.5-0.3,0.6-0.9,0.3-1.4c-0.3-0.5-0.9-0.6-1.4-0.3  c-2.2,1.4-4.7,2.1-7.3,1.8c-5.1-0.5-9.1-4.6-9.7-9.7C4.7,14.1,5.7,11,7.8,8.7c2.3-2.5,5.6-3.9,9-3.6c3.2,0.2,6,1.9,7.8,4.6  c1.9,2.9,2.4,6.3,1.3,9.6l0,0.1c-0.3,1-1.3,1.7-2.4,1.7c-1.4,0-2.5-1.1-2.5-2.5V17v-2v-4c0-0.6-0.4-1-1-1s-1,0.4-1,1v0  c-0.8-0.6-1.9-1-3-1c-2.8,0-5,2.2-5,5v2c0,2.8,2.2,5,5,5c1.4,0,2.6-0.6,3.5-1.4c0.7,1.4,2.2,2.4,4,2.4c1.9,0,3.6-1.2,4.3-3.1l0-0.1  C29.1,16,28.5,11.9,26.2,8.5z M19,17c0,1.7-1.3,3-3,3s-3-1.3-3-3v-2c0-1.7,1.3-3,3-3s3,1.3,3,3V17z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          {{ translate.EN.password }}
                          <strong style="color:red">*</strong>
                        </label>
                        <div class="relative flex items-center">
                          <input name="password" type="password" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.password_placeholder" v-model="register.password"/>
                          <svg class="w-[18px] h-[18px] absolute right-4" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M8 13C8.55229 13 9 12.5523 9 12C9 11.4477 8.55229 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" fill="currentColor"/>
                            <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"/>
                            <path d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="currentColor"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 3.25C8.10583 3.24998 6.65019 3.24997 5.51098 3.40314C4.33856 3.56076 3.38961 3.89288 2.64124 4.64124C1.89288 5.38961 1.56076 6.33856 1.40314 7.51098C1.24997 8.65019 1.24998 10.1058 1.25 11.9436V12.0564C1.24998 13.8942 1.24997 15.3498 1.40314 16.489C1.56076 17.6614 1.89288 18.6104 2.64124 19.3588C3.38961 20.1071 4.33856 20.4392 5.51098 20.5969C6.65018 20.75 8.1058 20.75 9.94354 20.75H14.0564C15.8942 20.75 17.3498 20.75 18.489 20.5969C19.6614 20.4392 20.6104 20.1071 21.3588 19.3588C22.1071 18.6104 22.4392 17.6614 22.5969 16.489C22.75 15.3498 22.75 13.8942 22.75 12.0565V11.9436C22.75 10.1059 22.75 8.65018 22.5969 7.51098C22.4392 6.33856 22.1071 5.38961 21.3588 4.64124C20.6104 3.89288 19.6614 3.56076 18.489 3.40314C17.3498 3.24997 15.8942 3.24998 14.0564 3.25H9.94358ZM3.7019 5.7019C4.12511 5.27869 4.70476 5.02503 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02503 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.2484 8.73851 21.25 10.0932 21.25 12C21.25 13.9068 21.2484 15.2615 21.1102 16.2892C20.975 17.2952 20.7213 17.8749 20.2981 18.2981C19.8749 18.7213 19.2952 18.975 18.2892 19.1102C17.2615 19.2484 15.9068 19.25 14 19.25H10C8.09318 19.25 6.73851 19.2484 5.71085 19.1102C4.70476 18.975 4.12511 18.7213 3.7019 18.2981C3.27869 17.8749 3.02503 17.2952 2.88976 16.2892C2.75159 15.2615 2.75 13.9068 2.75 12C2.75 10.0932 2.75159 8.73851 2.88976 7.71085C3.02503 6.70476 3.27869 6.12511 3.7019 5.7019Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      <!--  -->
                      
                      <!--  -->
                      <div>
                        <label class="text-gray-800 text-sm mb-2 block">
                          {{ translate.EN.password_confirm }}
                          <strong style="color:red">*</strong>
                        </label>
                        <div class="relative flex items-center">
                          <input name="confirm_password" type="password" required class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" :placeholder="translate.EN.password_confirm_placeholder" v-model="register.passwordConfirm"/>
                          <svg class="w-[18px] h-[18px] absolute right-4"  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                            <path d="M12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H12M15 4.00093C18.1143 4.01004 19.7653 4.10848 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.7653 19.8915 18.1143 19.99 15 19.9991" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="currentColor"/>
                            <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"/>
                            <path d="M15 2V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div class="!mt-6">
                        <button type="button" class="bg-blue-500 w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg font-semibold text-white bg-primary hover:opacity-80 focus:outline-none" @click="createAccount()">
                          <span v-if="loader.loaderCreateAccount" class="loader"></span>
                          <span v-else >{{ translate.EN.create }}</span>
                        </button>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <div class="flex items-center justify-center" v-if="invalidCreateAccount">
                        <p class="text-gray-500 text-sm leading-relaxed font-semibold text-white text-red-500">
                          {{ translate.EN.information_invalid }}
                        </p>
                      </div>
                      <!--  -->
    
                      <!--  -->
                      <p class="text-sm !mt-6 text-center text-gray-800">
                        {{ translate.EN.login_text }}
                        <span class="text-primary font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer" @click="toggleModels('showSignIn')">
                          {{ translate.EN.login_link }}
                        </span>
                      </p>
                      <!--  -->
                    </div>
                  </form>
                </transition>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useHead } from '@unhead/vue';
import { useRouter } from 'vue-router';
import { useHttp } from './composables/useHttp'; // Assuming you have a composable for HTTP requests
import { useUtils } from './composables/useUtils'; // Assuming you have a composable for utilities

const router = useRouter();

definePageMeta({
  layout: 'global',
});

//const ResetPassword = defineAsyncComponent(() => import('@/components/account/login/resetPassword'));
import ar from '../../locales/ar.json';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

const translate = {
  AR: ar,
  EN: en,
  FR: fr,
};


useHead({
  script: [
    { src: "https://cdn.tailwindcss.com" }
  ]
});

const { post } = useHttp();
const { postMessage } = useUtils();

const loader = reactive({
  loaderLogin: false,
  loaderForget: false,
  loaderCreateAccount: false,
});



const login = reactive({
  email: null,
  password: null,
});


const register = reactive({
  type: "particular",
  firstname: null,
  lastname: null,
  email: null,
  phone: null,
  isRegistred: true,
  password: null,
  passwordConfirm: null,
});

const showRegister = ref(false);
const showForget = ref(false);
const showSignIn = ref(true);


;
const invalidCreateAccount = ref(false);






function toggleModels(property) {
  // Navigate based on the property
  if (property === 'showSignIn') {
    router.push('/login');
  } else if (property === 'showForget') {
    router.push('/forgetpassword');
  } else {
    //shloild be profile
    router.push('/profile');
  }  
}

async function createAccount() {
  loader.loaderCreateAccount = true;
  invalidCreateAccount.value = false;
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(register.email);
  if (validEmail && register.email && register.firstname && register.lastname && register.password && register.password === register.passwordConfirm) {
    try {
      delete register.passwordConfirm;
      const response = await post('/customers/create', register);
      document.cookie = `CUSTOMER=${response.data.token};path=/;`;
      postMessage({ token: response.data.token });
      router.push('/account/orders');
    } catch (error) {
      invalidCreateAccount.value = true;
      console.error('error create account', error);
    }
  } else {
    invalidCreateAccount.value = true;
  }
  loader.loaderCreateAccount = false;
}




</script>


<style lang="scss" scoped>
span {
  border: 2px solid #2351ff9e;
  color: #6c6c6c;
  padding: 0.5em 1.5em;
  border-radius: 6px;
}
</style>