<template>
    <div class="d-f fd-c  address-detail">
        <span class="px-3 fs-5 c-grey title">{{ 'shipping_address' }}</span>
        <div class="d-f fw-w p-3">
            <div v-for="(field, index) in fields" :key="index" class="ws-nw d-f"
                :class="field != 'address1' && field != 'address2' ? 'lg-col-12 sm-col-12 ' : 'lg-col-12 '">
                <div class="lg-col-3 sm-col-4 d-f ai-c"><span class="lg-col-9">{{ $utils.capitalize(field) }}</span><span
                        class="lg-col-3">:</span> </div><span class="lg-col-9 sm-col-8 ws-n"
                    v-if="['country', 'city', 'province'].includes(field)">{{ address[field].name ? address[field].name : 'N/A' }}</span>
                <span class="sm-col-8 ws-n" v-else>{{ address[field] ? address[field] : 'N/A' }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { address: Object },
    data() {
        return {
            fields: ['firstname', 'lastname', 'phone', 'address1', 'address2', 'country', 'province', 'city']
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    color: rgb(116, 116, 116) !important;
}

.address-detail {
    line-height: 2.2;
    font-size: 13px;

    span:nth-child(1) {
        font-weight: 500;
        color: #9e9e9e;
    }

    ;

    span:nth-child(2) {
        font-weight: 700;
        padding: 0 9px;
    }
}
</style>