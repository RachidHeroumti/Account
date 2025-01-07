<template>
    <!--  -->
    <div v-if="command">
        <!--  -->
        <div class="px-5 d-f fd-c gap-8">
            <!--  -->
            <div v-if="!isMobile" class="bg-white w-full rounded-lg shadow-md">
                <div class="py-3 flex items-center justify-between p-6">
                    <!--  -->
                    <div class="flex">
                        <div class="text-2xl font-bold text-blue-700">{{ translate[$store.state.CURRENT_LANGUAGE].commands_details }}</div>
                    </div>
                    <!--  -->
                </div>
            </div>
            <!--  -->

            <!--  -->
            <div class="flex flex-col gap-6 shadow-md rounded-md py-4 px-2">
                <!-- Details -->
                <div class="flex flex-col gap-6">
                    <!--  -->
                    <div class="text-base leading-5 capitalize rounded-full text-blue-700">
                        {{ translate[$store.state.CURRENT_LANGUAGE].customer_details }}
                    </div>
                    <!--  -->
                    <div class="flex items-center">
                        <span class="icon flex items-center text-blue-700" v-html="hashIcon"></span> 
                        <span class="px-2">{{ command._id.slice(command._id.length - 6, command._id.length) }}</span> 
                    </div>
                    <!--  -->
                    <div class="flex items-center">
                        <span class="icon flex items-center text-blue-700" v-html="descIcon"></span>
                        <span class="px-2">{{ command.name }}</span>
                    </div>
                    <!--  -->
                    <div class="flex items-center">
                        <span class="icon flex items-center text-yellow-600" v-html="statusIcon"></span>
                        <span class="px-2">{{ command.status }}</span>
                    </div>
                    <!--  -->
                    <div class="flex items-center">
                        <span class="icon flex items-center text-blue-700" v-html="dateIcon"></span>
                        <span class="px-2">{{ command.createdAt | formatDate }}</span>
                    </div>
                    <!--  -->
                </div>
                <!-- Details -->
    
                <!-- images-->
                <div class="w-full">
                    <!--  -->
                    <carousel class="flex items-center cursor-pointer w-fit" :perPageCustom="[[640, 4],[768, 6],[1024, 8]]" :paginationEnabled="false" v-if="command.images.length > 0">
                        <slide class="flex items-center" v-for="(image, index) in command.images" :key="index">
                            <img class="w-full h-full object-cover border border-gray" :src="image" alt="Images Carousel" @click="showAlert(command.images)"/>
                        </slide>
                    </carousel>
                    <!--  -->
                    <div v-else class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                        {{ translate[$store.state.CURRENT_LANGUAGE].no_images }}
                    </div>
                    <!--  -->
                    <si-full-image :alertDisplay="alertDisplay" @closeAlert="closeAlert" :images="alertImages"></si-full-image>
                    <!--  -->
                </div>
                <!-- images -->
            </div>
            <!--  -->

            <!--  -->
            <div class="flex flex-col gap-6 shadow-md rounded-md py-4 px-2" v-if="command.requestedTo && command.requestedTo.length > 0">
                <!--  -->
                <div class="text-base leading-5 capitalize rounded-full text-blue-700">
                    {{ translate[$store.state.CURRENT_LANGUAGE].sub_seller_details }}
                </div>
                <!--  -->
                <div class="flex flex-col gap-6 bg-gray-100 p-4 rounded-md" v-for="(request, index) in command.requestedTo" :key="index" v-if="request.accepted">
                    <!-- Details -->
                    <div class="flex flex-col gap-6">
                        <!--  -->
                        <div class="flex items-center">
                            <span class="icon flex items-center text-blue-700" v-html="hashIcon"></span> 
                            <span class="px-2">{{ request.sellerId.slice(request.sellerId.length - 6, request.sellerId.length) }}</span> 
                        </div>
                        <!--  -->
                        <div class="flex items-center">
                            <span class="icon flex items-center text-yellow-600" v-html="statusIcon"></span>
                            <span class="px-2 uppercase">{{ request.accepted ? translate[$store.state.CURRENT_LANGUAGE].accept: translate[$store.state.CURRENT_LANGUAGE].not_accepted }}</span>
                        </div>
                        <!--  -->
                        <div class="flex items-center">
                            <span class="icon flex items-center text-blue-700" v-html="descIcon"></span>  
                            <span class="px-2">{{ request.price | formatPrice }} {{ $currency() }}</span>
                        </div>
                        <!--  -->
                    </div>
                    <!-- Details -->
        
                    <!-- images-->
                    <div class="w-full">
                        <!--  -->
                        <carousel class="flex items-center cursor-pointer w-fit" :perPageCustom="[[640, 4],[768, 6],[1024, 8]]" :paginationEnabled="false" v-if="request.images.length > 0">
                            <slide class="flex items-center" v-for="(image, index) in request.images" :key="index">
                                <img class="w-full h-full object-cover border border-gray" :src="image" alt="Images Carousel" @click="showAlert(request.images)"/>
                            </slide>
                        </carousel>
                        <!--  -->
                        <div v-else class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                            {{ translate[$store.state.CURRENT_LANGUAGE].no_images }}
                        </div>
                        <!--  -->
                        <si-full-image :alertDisplay="alertDisplay" @closeAlert="closeAlert" :images="alertImages"></si-full-image>
                        <!--  -->
                    </div>
                    <!-- images -->
    
                    <!-- Button -->
                    <div class="w-full flex items-center justify-end">
                        <div class="flex items-center justify-center rounded-md px-4 py-1 bg-green-400 text-white" @click="acceptSubSeller(request)" v-if="command.status == 'PENDING'">
                            <span class="text-xs leading-5 capitalize rounded-full">{{ translate[$store.state.CURRENT_LANGUAGE].accept }}</span>
                        </div>
                        <div class="flex items-center justify-center rounded-md px-4 py-1 bg-red-400 text-white" v-if="command.status == 'COMPLETED'">
                            <span class="text-xs leading-5 capitalize rounded-full">{{ translate[$store.state.CURRENT_LANGUAGE].completed }}</span>
                        </div>
                    </div>
                    <!-- Button -->
                </div>
                <!--  -->
                <div class="flex items-center justify-center" v-if="!anyAcceptedRequest()"> 
                    <span class="px-2">{{ translate[$store.state.CURRENT_LANGUAGE].no_commands_accepted }}</span>
                </div>
                <!--  -->
            </div>
            <!--  -->
            
        </div>
        <!--  -->
    </div>
    <!--  -->
</template>

<script>
export default {
    layout: 'account',
    components: {
        'si-full-image': () => import('@/components/account/FullImage.vue')
    },
    head() {
        return {
            script: [ 
                { src: "https://cdn.tailwindcss.com" }
            ]
        }
    },
    data() {
        return {
            command: null,
            alertDisplay: false,
            alertImages: [],
            hashIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="9" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z" stroke="currentColor" stroke-width="1.5"/><path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" stroke-width="1.5"/><path d="M19 12H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19 9H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M19 15H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
            descIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195" stroke="currentColor" stroke-width="1.5"/><path d="M8 14H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 10.5H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 17.5H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" stroke="currentColor" stroke-width="1.5"/></svg>',
            statusIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"> <path d="M2.45001 14.97C3.52001 18.41 6.40002 21.06 9.9242 21.79" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2.04999 10.98C2.55999 5.93 6.81998 2 12 2C17.18 2 21.44 5.94 21.95 10.98" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
            dateIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"> <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z" stroke="currentColor" stroke-opacity="0.24" stroke-width="1.2"/> <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" stroke-width="1.2"/> <path d="M7 3L7 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/> <path d="M17 3L17 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/> </svg>',
            arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',
            arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>',
            arrowIcon: null,
            active: true,
            translate: {
                AR: require('../../locales/ar.json'),
                EN: require('../../locales/en.json'),
                FR: require('../../locales/fr.json')
            }
        }
    },
    async fetch() {
        await this.getData()
    },
    async mounted() {
        await this.getData()
    },
    computed: { 
        isMobile: function () { 
            return this.$store.state.isMobile 
        } 
    },
    methods: {
        async getData() {
            this.command = await this.$command({ _id: this.$route.params.id });
        },
        async acceptSubSeller(request) {
            const formData = {
                sellerId: request.sellerId,
                price: request.price,
                name: this.command.name,
                images: request.images,
                currency: this.$currency(),
                quantity: 1
            }

            const response = await this.$http.post('/commands/accept', formData);
            if(response.status == 200) {
                alert("Completed")
                this.command.status = 'COMPLETED'
            }else {
                alert("Not Accepted")
            }
        },
        anyAcceptedRequest() {
            return this.command.requestedTo.some(request => request.accepted);
        },
        toggle() { 
            this.active = !this.active; 
            this.arrowIcon = this.active ? this.arrowUp : this.arrowDown 
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