<template>
    <!--  -->
    <div class="px-5 d-f fd-c" v-if="orders">
        <!--  -->
        <span class="fs-4 fw-b">{{ translate[$store.state.CURRENT_LANGUAGE].orders_history }}</span>
        <!--  -->
        <span class="fs-3  c-grey">{{ pagination.total }} {{ 'orders' }}</span>
        <!--  -->
        <div class="d-f fd-c ae-c">
    <template v-for="(order, index) in orders" :key="order.orderId">
      <nuxt-link :to="`/orders/${order.orderId}`">
        <order-block v-if="order" :order="order" />
      </nuxt-link>
    </template>
  </div>
        <!--  -->
        <pagination :paginate="pagination" @input="getPage" />
    </div>
    <!--  -->
</template>

<script>
export default {
    layout: 'account',
    components: { 
        'order-block': () => import('~/components/account/orders/OrderBlock'), 
        'pagination': () => import('~/components/account/orders/Paginate') 
    },
    data() {
        return {
            orders: null,
            pagination: null,
            page: 1,
            translate: {
                AR: require('../../locales/ar.json'),
                EN: require('../../locales/en.json'),
                FR: require('../../locales/fr.json')
            }
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        async getData(params = {}) {
            this.orders = await this.$orders({ ...params, limit: 5 }, true);
            this.pagination = this.orders.paginate
            this.orders = this.orders.data
        },
        async getPage(page) { this.getData({ page: page }); }
    }

}
</script>