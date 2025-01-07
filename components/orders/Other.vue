<template>
    <div class="d-f fd-c lg-col-12 sm-col-12 p-4 other-detail">
        <div class="d-f ws-nw">
            <div class="lg-col-3 sm-col-4 d-f"><span class="lg-col-9">{{ 'subtotal' }}</span><span
                    class="lg-col-3">:</span></div><span class="lg-col-9 sm-col-8">{{ subtotal }} <span
                    class="currency">{{ order.currency }}</span></span>
        </div>
        <div class="d-f ws-nw"><span class="lg-col-3 sm-col-4 d-f"><span class="lg-col-9">{{ 'shipping' }}</span><span
                    class="lg-col-3">:</span></span><span class="lg-col-9 sm-col-8">{{ order.shipping.price }} <span
                    class="currency">{{ order.currency }}</span></span></div>
        <div class="d-f ws-nw"><span class="lg-col-3 sm-col-4 d-f"><span class="lg-col-9">{{ 'discount' }} </span><span
                    class="lg-col-3">:</span></span>
            <div class="lg-col-9 sm-col-8 d-f "><span class="discount px-4 br-5">-{{ order.discount.percentage
                    }}<i>%</i></span></div>
        </div>
        <div class="d-f ws-nw"><span class="lg-col-3 sm-col-4 d-f"> <span class="lg-col-9">{{ 'method' }}</span><span
                    class="lg-col-3">:</span></span><span class="lg-col-9 sm-col-8">{{ order.method.name }}</span></div>
        <div class="d-f ws-nw"><span class="lg-col-3 sm-col-4 d-f"> <span class="lg-col-9">{{ 'total' }}</span><span
                    class="lg-col-3">:</span></span><span class="lg-col-9 sm-col-8">{{ order.total }} <span
                    class="currency">{{ order.currency }}</span></span></div>
    </div>
</template>

<script>
export default {
    props: { order: Object },
    computed: {
        subtotal: function () {
            if (this.order && this.order.details) {
                let subPrices = this.order.details.map(product => product.price)
                let total = 0
                for (let index = 0; index < subPrices.length; index++) {
                    const price = subPrices[index];
                    total += price
                }
                return total
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    color: rgb(116, 116, 116) !important;
}

.other-detail {
    line-height: 2.2;
    font-size: 13px;

    span:nth-child(1) {
        font-weight: 500;
        color: #9e9e9e;
    }

    ;

    span:nth-child(2) {
        font-weight: 700;
    }
}

.discount {
    background-color: #ffffff;
    color: #FA1010 !important;
}

.currency {
    font-weight: bold !important;
    color: #333 !important;
    font-size: 11px
}
</style>