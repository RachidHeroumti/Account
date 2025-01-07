<template>
    <!--  -->
    <div class="px-5 d-f fd-c gap-12" v-if="commands">
        <!--  -->
        <div class="bg-white w-full rounded-lg shadow-md">
            <div class="py-3 flex items-center justify-between p-6">
                <!--  -->
                <div class="flex">
                    <div class="text-2xl font-bold text-blue-700">{{ translate[$store.state.CURRENT_LANGUAGE].commands_history }}</div>
                </div>
                <!--  -->
                <div class="flex justify-end">
                    <div class="flex rounded focus:outline-none outline-none text-gray-100 px-3 w-1/7 py-2 bg-blue-600 hover:shadow-inner hover:bg-blue-600  transition-all duration-300" to="/tickets/new" >
                        {{ pagination.total }} {{ translate[$store.state.CURRENT_LANGUAGE].commands }}
                    </div>
                </div>
            </div>
        </div>
        <!--  -->

        <!--  -->
        <table class="w-full leading-normal shadow-md overflow-x-auto">
            <!--  -->
            <thead>
                <!--  -->
                <tr>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].command_id }}
                    </th>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].description }}
                    </th>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].images }}
                    </th>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].status }}
                    </th>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].date }}
                    </th>
                    <!--  -->
                    <th class="px-8 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        {{ translate[$store.state.CURRENT_LANGUAGE].actions }}
                    </th>
                    <!--  -->
                </tr>
                <!--  -->
            </thead>
            <!--  -->

            <!--  -->
            <tbody>
                <!--  -->
                <template v-for="(command, index1) in commands">
                    <!-- Tables -->
                    <command-block :key="command.commandId" v-if="command" :command="command" @showRequested="showRequested(index1)" />
                    <!-- Tables -->
                    
                    <!-- Details -->
                    <tr v-if="command.requestedTo && command.requestedTo.length > 0 && element && element._id == command._id">
                    <!--  -->
                        <td colspan="6" class="border">
                        <!--  -->
                            <div class="overflow-auto w-full">
                                <!--  -->
                                <table class="table w-full text-center">
                                    <!--  -->
                                    <thead class="bg-gray-200 text-black">
                                        <tr>
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider">
                                                {{translate[$store.state.CURRENT_LANGUAGE].seller_id}}
                                            </th>
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider"> 
                                                {{ 'note' }}
                                            </th>
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider"> 
                                                {{translate[$store.state.CURRENT_LANGUAGE].images}}
                                            </th>
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider"> 
                                                {{translate[$store.state.CURRENT_LANGUAGE].price}}
                                            </th>
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider"> 
                                                {{ 'quantity' }}
                                            </th>
                                            <!--  -->
                                            <!--  -->
                                            <th class="px-5 py-2 bg-gray-100 text-center text-xs font-semibold text-gray-600 capitalize tracking-wider">
                                                {{translate[$store.state.CURRENT_LANGUAGE].actions}}
                                            </th>
                                            <!--  -->
                                        </tr>
                                    </thead>
                                    <!--  -->
                        
                                    <!--  -->
                                    <tbody>
                                        <!--  -->
                                        <tr v-for="(request, index2) in command.requestedTo" :key="index2" v-if="request.accepted">
                                            <!--  -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <!--  -->
                                                <div class="text-xs leading-5 capitalize px-2 font-semibold rounded-full text-gray-700">
                                                    {{ request.sellerId.slice(request.sellerId.length - 6, request.sellerId.length) }}
                                                </div>
                                                <!--  -->
                                            </td>
                                            <!--  -->
                                            <!--  -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <!--  -->
                                                <div class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                                                    {{ request.note }}
                                                </div>
                                                <!--  -->
                                            </td>
                                            <!--  -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <!--  -->
                                                <div v-if="request.images.length > 0" class="flex items-center justify-center gap-2 text-xs leading-5 capitalize cursor-pointer" @click="showAlert(request.images)">
                                                    <img class="w-10 h-10 object-cover cursor-pointer" :src="request.images[0]" alt="Full screen images"/>
                                                    <span class="rounded-full text-blue-700 font-semibold">+{{ request.images.length }}</span>
                                                </div>
                                                <!--  -->
                                                <div v-else class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                                                    {{ translate[$store.state.CURRENT_LANGUAGE].no_images }}
                                                </div>
                                                <!--  -->
                                                <si-full-image :alertDisplay="alertDisplay" @closeAlert="closeAlert" :images="alertImages"></si-full-image>
                                                <!--  -->
                                            </td>
                                            <!--  -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <!--  -->
                                                <div class="text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                                                    {{ request.price | formatPrice }} {{ $currency() }}
                                                </div>
                                                <!--  -->
                                            </td>
                                            <!--  -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center justify-center gap-4 text-xs leading-5 capitalize px-2 rounded-full text-gray-800">
                                                    <span>{{ request.quantity }}</span>
                                                    <input v-if="command.status == 'PENDING'"  type="number" v-model="selectedQuantity" min="1" max="100" class="border rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                                </div>
                                            </td>
                                            <!--  -->
                                            <!-- Actions -->
                                            <td class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center justify-center">
                                                    <div class="flex items-center justify-center rounded-md px-4 py-1 bg-green-400 text-white cursor-pointer hover:bg-green-600" @click="acceptSubSeller(request, index1)" v-if="command.status == 'PENDING'">
                                                        <span class="text-xs leading-5 capitalize rounded-full">{{ translate[$store.state.CURRENT_LANGUAGE].accept }}</span>
                                                    </div>
                                                    <div class="flex items-center justify-center text-red-700" v-if="command.status == 'COMPLETED'">
                                                        <span class="text-xs leading-5 capitalize rounded-full">{{ translate[$store.state.CURRENT_LANGUAGE].completed }}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <!-- Actions -->
                                        </tr>
                                        <!--  -->
                                        <tr v-if="!anyAcceptedRequest(command)">
                                            <td colspan="6" class="px-6 py-2 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-xs leading-5 capitalize px-2 font-semibold rounded-full text-gray-700">
                                                {{ translate[$store.state.CURRENT_LANGUAGE].no_commands_accepted }}
                                                </div>
                                            </td>
                                        </tr>
                                        <!--  -->
                                    </tbody>
                                    <!--  -->
                                </table>
                                <!--  -->
                            </div>
                            <!--  -->
                        </td>
                        <!--  -->
                    </tr>
                    <!-- Details -->
                </template>
                <!--  -->
            </tbody>
            <!--  -->
        </table>
        <!--  -->

        <!--  -->
        <div v-if="commands.length <= 0" class="bg-blue-100 py-8">
            <span class="w-full flex justify-center text-center py-3 border-b border-gray-200 text-base" >
                <p class="font-semibold flex text-blue-500 whitespace-no-wrap">
                    <span class="">{{translate[$store.state.CURRENT_LANGUAGE].no_commands}}</span>
                </p>
            </span>
        </div>
        <!--  -->

        <!--  -->
        <pagination :paginate="pagination" @input="getPage" />
        <!--  -->
    </div>
    <!--  -->
</template>

<script>
export default {
    layout: 'account',
    components: { 
        'command-block': () => import('~/components/account/commands/CommandBlock'), 
        'pagination': () => import('~/components/account/commands/Paginate'),
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
            element: null,
            alertDisplay: false,
            alertImages: [],
            commands: null,
            pagination: null,
            page: 1,
            translate: {
                AR: require('../../locales/ar.json'),
                EN: require('../../locales/en.json'),
                FR: require('../../locales/fr.json')
            },
            selectedQuantity: 1
        }
    },
    async mounted() {
        await this.getData()
    },
    methods: {
        async getData() {
            try {
                const customer = await this.$customers({}, true);
                
                if (customer) {
                const commandsResponse = await this.$commands({ customerId: customer._id, limit: 5 }, true);

                this.pagination = commandsResponse.paginate;
                this.commands = commandsResponse.data;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async getPage(page) { 
            this.getData({ page: page }); 
        },
        anyAcceptedRequest(command) {
            return command.requestedTo.some(request => request.accepted);
        },
        async acceptSubSeller(request, index) {
            // Ensure selectedQuantity is between 1 and 100
            if (this.selectedQuantity < 1 || this.selectedQuantity > 100) {
                alert("Quantity must be between 1 and 100");
                return;
            }

            const formData = {
                sellerId: request.sellerId,
                price: request.price,
                name: this.commands[index].name,
                images: request.images,
                currency: this.$currency(),
                quantity: this.selectedQuantity
            }

            try {
                const response = await this.$http.post('/commands/accept', formData);
                if (response.status === 200) {
                    alert("Completed");
                    this.commands[index].status = 'COMPLETED';
                    this.selectedQuantity = 1;
                } else {
                    alert("Not Accepted");
                }
            } catch (error) {
                console.error(error);
                alert("An error occurred. Please try again.");
            }
        },
        showAlert(images) {
            this.alertDisplay = true;
            this.alertImages = images
        },
        closeAlert() {
            this.alertDisplay = false;
            this.alertImages = []
        },
        showRequested(index) {
            this.element = this.element !== this.commands[index] ? this.commands[index] : null;
        }
    }
}
</script>