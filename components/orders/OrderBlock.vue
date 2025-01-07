<template>
  <div class="d-f p-4 my-1 p-r order--item">
    <!--  -->
    <div class="lg-col-4 sm-col-5 d-f fd-c block--00">
      <!--  -->
      <div class="d-f ai-c">
        <span class="icon d-f ai-c" v-html="hashIcon"></span> 
        <span class="px-2">{{ order.orderId }}</span> 
      </div>
      <!--  -->

      <!--  -->
      <div class="d-f ai-c" v-if="order.shipping.address && order.shipping.address.country && order.shipping.address.province && order.shipping.address.city">
        <span class="icon d-f ai-c" v-html="locationIcon"></span>
        <span class="px-2">
          {{ order.shipping.address.country.name }},
          {{ order.shipping.address.province.name }},
          {{ order.shipping.address.city.name }}
        </span>
      </div>
      <!--  -->

      <!--  -->
      <div class="d-f ai-c">
        <span class="product--count">+{{ order.details.length }}</span>
        <span class="px-2">{{ 'products' }}</span> 
      </div>
      <!--  -->
    </div>
    <!--  -->

    <!--  -->
    <div class="lg-col-4 sm-col-6 d-f fd-c ai-c block--01">
      <div class=" d-f fd-c" :class="isMobile ? 'ai-c' : null">
        <!--  -->
        <span v-if="isMobile" class="total--price">
          {{ order.total | formatPrice }} 
          <span class="fs-3">{{ order.currency }}</span>
        </span>
        <!--  -->

        <!--  -->
        <div class="status d-f ai-c jc-c" :style="`color:${order.note.color}`" v-if="order.note">
          <span class="px-1">
            {{ order.note.name }}
          </span>
        </div>
        <!--  -->

        <!--  -->
        <span class="date">{{ 'ordered_on' }} {{ order.createdAt | formatDate }}</span>
        <!--  -->
      </div>
    </div>
    <!--  -->

    <!--  -->
    <div v-if="!isMobile" class="lg-col-4  d-f fd-c ai-fe ai-sb jc-sb block--03">
      <span class="total--price">{{ order.total | formatPrice }} <span class="fs-3">{{ order.currency }}</span></span>
      <nuxt-link :to="`orders/${order.orderId}`">
        <si-button class="d-f ai-c" background="var(--primary-color-op)" color="var(--primary-color)">
          <span class="px-2">{{ 'view_details' }}</span>
          <span class="icon d-f ai-c" v-html="infoIcon"></span>
        </si-button>
      </nuxt-link>
    </div>
    <!--  -->

    <!--  -->
    <div v-else class="sm-col-1 d-f ai-c jc-fe">
      <span class="arrow--icon" v-html="arrowRightIcon"></span>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: { order: Object },
  components: { 'si-button': () => import('@/components/account/SiButton') },
  data() {
    return {
      hashIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>',
      locationIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      infoIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>',
      arrowRightIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>'
    }
  },
  computed: { isMobile: function () { return this.$store.state.isMobile } },
}
</script>

<style lang="scss" scoped>
.order--item {
  background: #f8f7f791;
  line-height: 2.1;
  border-radius: 5px;
  transition: .3s;

  &::before {
    content: "";
    position: absolute;
    display: block;
    padding: 2px;
    background: #e3e3e3;
    top: 0;
    left: 0;
    bottom: 0;
    transition: .3s;
  }

  ;

  &:hover {
    &::before {
      background: #4882F8;
    }

    ;
  }
}

.block--00 {
  font-weight: 500;
  font-size: 12px;

  div:first-child {
    span {
      font-weight: bold;
    }
  }
}

.product--count {
  border: 1px solid;
  padding: 0 4px;
  background: #333;
  color: #ffffff;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.date {
  color: #b6b5b5;
  font-weight: 400;
  font-size: 13px;
}

// .status{background: #fff;border-radius: 3px; font-weight: 600;font-size: 12px;}
.status {
  span {
    font-size: 12px;
    font-weight: 600;
  }

  ;

  &:before {
    content: '';
    display: block;
    padding: 2px;
    border: 2px solid currentColor;
    border-radius: 50px;
    ;
  }
}

.total--price {
  color: #FA1010;
  font-weight: bold;
  font-size: 18px;
}

.block--03 {
  .icon {
    color: #2d6ec5d1
  }
}

.arrow--icon {
  color: #2d6ec5bd;
}
</style>
