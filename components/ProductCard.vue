<template>
    <div class="d-f product-info" v-if="item.product">
        <div class="lg-col-3 p-2 br-4 image--holder">
            <img class="w-f h-f of-cv br-5 p-1 bg-w"
                :src="item.product.image && item.product.image.src ? item.product.image.src : ''" alt="product image">
        </div>
        <div class="lg-col-9 ">
            <div class="d-f p-2 h-f lh-7">
                <div class="lg-col-8">
                    <div class="d-f fd-c">
                        <span class="fw-600 title">{{ item.product.name }}</span>
                        <div class="variant" v-if="item.product.variant"><span class="fw-400 c-grey ">{{ 'variants' }} :
                            </span><span class="fw-600">{{ item.product.variant.name }}</span></div>
                        <span class="fw-600 ws-nw">{{ item.quantity }} x {{ item.price }} <span
                                class="fs-3">{{ item.currency }}</span></span>
                    </div>
                </div>
                <div class="lg-col-4">
                    <div class="d-f fd-c ai-c jc-sb h-f">
                        <span class="total fs-5 fw-b ws-nw">{{ item.quantity * item.price }} <span
                                class="fs-3">{{ item.currency }}</span></span>
                        <si-button class="d-f ai-c" :py="2" background="var(--primary-color-op)"
                            color="var(--primary-color)" @click="addToCart(item)"><span
                                class="px-3">{{ 'view_product' }}</span></si-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { item: Object },
    components: { 'si-button': () => import('@/components/account/SiButton') },
    methods: {
        addToCart(item) {
            this.$utils.postMessage({ type: 'addToCart', data: { product: item.product } })
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 15px;
}

.product-info {
    font-size: 14px;
}

.variant {
    font-size: 13px
}

.total {
    color: #FA1010;
}

.image--holder {
    aspect-ratio: 2/2;
}
</style>
