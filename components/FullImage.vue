<template>
<transition name="fade">
    <!--  -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-5 md:p-10" v-if="alertDisplay">
        <!--  -->
        <div @click="closeAlert" class="absolute inset-0 z-50 bg-black cursor-pointer opacity-60"></div>
        <!--  -->

        <!--  -->
        <div class="flex flex-col relative z-50 w-4/5 h-3/4 md:w-2/3 md:h-5/6">
            <!--  -->
            <img class="h-full object-cover w-full cursor-pointer md:h-full md:w-auto" :src="images[index]" alt="Full screen images"/>
            <!--  -->
            <carousel class="h-fit flex-1 flex items-center cursor-pointer w-fit" :perPageCustom="[[640, 4],[768, 6],[1024, 8]]" :paginationEnabled="false" v-if="images.length > 0">
                <slide class="flex items-center" v-for="(image, index) in images" :key="index">
                    <img class="w-full h-full object-cover border border-gray" :src="image" alt="Images Carousel" @click="showImage(index)"/>
                </slide>
            </carousel>
            <!--  -->
        </div>
        <!--  -->

        <!--  -->
        <div @click="closeAlert" class="absolute top-0 right-0 z-50 px-4 py-8 cursor-pointer md:px-10 md:py-10">
            <svg class="text-white" aria-label="close icon" width="14" height="14" fill="none" viewBox="0 -0.5 21 21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="currentColor">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <!--  -->
    </div>
    <!--  -->
</transition>
<!--  -->
</template>

<script>
export default {
    props: {
        alertDisplay: {
            type: Boolean,
            required: true,
        },
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            index: 0
        }
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape' && this.images != []) {
                this.$emit('closeAlert');
            }
        })
    },
    methods: {
        closeAlert() {
            this.$emit('closeAlert');
        },
        showImage(index) {
            this.index = index;
        }
    }
}
</script>