<template>
    <div v-if="order">
        <!--  -->
        <div class="px-5 d-f fd-c">
            <!--  -->
            <span v-if="!isMobile" class="fs-4 fw-b py-1 sm-py-4 px-2 d-f ai-c p-s t-0 bg-w">
                <span>{{ 'orders_details' }}</span>
            </span>
            <!--  -->
            <div class="d-f fw-w py-3">
                <!--  -->
                <div v-if="isMobile" class="sm-col-12 d-f jc-sb p-2 br-2 block--container toggle--bar" @click="toggle">
                    <span class="fw-600">{{ 'products' }}</span><span class="arrow-icon d-f ai-c jc-c" :class="active ? 'arrow--active ' : null" v-html="arrowIcon"></span>
                </div>
                <!--  -->
                <div class="lg-col-6 sm-col-12 py-2">
                    <div v-if="active" class="d-f fd-c p-2 block--container" :class="order.details.length > 4 ? 'products--list' : null">
                        <product-cart v-for="(product, index) in order.details" :key="index" :item="{ ...product, 'currency': order.currency }" />
                    </div>
                </div>
                <!--  -->
                <div class="lg-col-6 sm-col-12 lg-px-3 sm-px-0">
                    <div class="d-f fd-c jc-sb h-f ">
                        <div class=" lg-col-12 py-2">
                            <shipping-address class="block--container" :address="order.shipping.address" />
                        </div>
                        <div class=" lg-col-12 "><other-block class="block--container" :order="order" /> </div>
                    </div>
                </div>
                <!--  -->
            </div>
            <!--  -->
        </div>
        <!--  -->
        <div class="lg-col-12 lg-px-5 sm-px-0 p-s b-0 ">
            <actions-block class="p-2 px-4" :class="!isMobile ? 'block--container' : 'bg-w'" :status="order.note" />
        </div>
        <!--  -->
    </div>
</template>

<script>
export default {
    layout: 'account',
    components: {
        'product-cart': () => import('@/components/account/ProductCard.vue'),
        'shipping-address': () => import('~/components/account/orders/Address.vue'),
        'other-block': () => import('~/components/account/orders/Other.vue'),
        'actions-block': () => import('~/components/account/orders/Actions.vue'),
    },
    data() {
        return {
            order: null,
            arrowDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',
            arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>',
            menuIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
            arrowIcon: null,
            active: true,
            openNav: false
        }
    },
    async mounted() {
        this.arrowIcon = this.arrowDown;
        this.order = await this.$order({ orderId: this.$route.params.id });
        this.$utils.postMessage({ type: 'route_id', data: { name: 'orders', query: this.$route.params.id } })
    },
    computed: { isMobile: function () { return this.$store.state.isMobile } },
    methods: {
        toggle() { this.active = !this.active; this.arrowIcon = this.active ? this.arrowUp : this.arrowDown },
    }
}
</script>

<style lang="scss" scoped>
.block--container {
    background-color: #f6f6f691;
    border-radius: 3px;
}

.products--list {
    max-height: 460px;
    overflow-y: scroll;
}

.arrow-icon {
    width: 30px;
}

.arrow--active {
    background: #dbe7ff;
    color: #6199ff;
    border-radius: 50px;
    width: 26px;
}

.toggle--bar:hover {
    background-color: #f5f3f3c9;
    cursor: pointer;
}
</style>
