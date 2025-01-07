<template>
  <!--  -->
  <div class="px-5 d-f fd-c" v-if="customer">
    <!--  -->
    <span class="fs-4 fw-b">{{ translate[$store.state.CURRENT_LANGUAGE].profile }}</span>
    <!--  -->
    <div class="py-2">
      <!--  -->
      <card-block>
        <div class="w-f d-f ai-c jc-sb">
          <!--  -->
          <div class="d-f px-3">
            <!--  -->
            <div class="user--icon"><span v-html="userIcon"></span></div>
            <!--  -->
            <div class="d-f fd-c px-3">
              <span class="fw-600 fs-5">{{ customer.firstname }} {{ customer.lastname }}</span>
              <div v-if="customer.email" class="d-f ai-c fs-3 py-1 email--text"><span class="d-f ai-c" v-html="emailIcon"></span> <span class="px-1">{{ customer.email }}</span></div>
            </div>
            <!--  -->
          </div>
          <!--  -->
          <div class="d-f fd-c gp-6 ai-c px-3" v-if="checkout_defaults && customer.cashback >= checkout_defaults.Cashback_MinWithdraw">
            <!--  -->
            <span class="fw-600 fs-5">{{ `${customer.cashback} $` }}</span>
            <!--  -->
            <div class="d-f ai-c fs-3 py-2 px-4 br-4 c-p withdraw--cashback" @click="withdrawCashback">
              <span class="px-1">{{ "Withdraw Cashback" }}</span>
            </div>
            <!--  -->
          </div>
          <!--  -->
        </div>
      </card-block>
      <!--  -->
    </div>
    <!--  -->
    <div class="py-2">
      <!--  -->
      <card-block :title="translate[$store.state.CURRENT_LANGUAGE].address_details">
        <!--  -->
        <div class="w-f d-f fw-w py-3">
          <!--  -->
          <div v-for="(field, index) in fields.personal" :key="index" class="d-f fd-c xs-w-1/2 sm-w-1/3 md-w-1/4 lg-w-1/5 fields-group">
            <!--  -->
            <span class="p-2">{{ field }}</span>
            <!--  -->
            <div v-if="activeEditableBlock != 'personal_details'">
              <!--  -->
              <span v-if="field == 'rib' || field == 'bank'" class="px-2">{{ customer.transfer[field] ? customer.transfer[field] : 'N/A' }}</span>
              <!--  -->
              <span v-else class="px-2">{{ customer[field] ? customer[field] : 'N/A' }}</span>
              <!--  -->
            </div>
            <!--  -->
            <div v-else>
              <!--  -->
              <card-input v-if="field == 'rib' || field == 'bank'" class="px-2" v-model="customer.transfer[field]" :id="`p-${field}`" v-bind="data" :val="customer.transfer[field] ? customer.transfer[field] : ''" />
              <!--  -->
              <card-input v-else class="px-2" v-model="customer[field]" :id="`p-${field}`" v-bind="data" :val="customer[field] ? customer[field] : ''" />
              <!--  -->
            </div>
            <!--  -->
            <!--  -->
          </div>
          <!--  -->
        </div>
        <!--  -->
        <si-button v-if="activeEditableBlock != 'personal_details'" class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)" @click="edit('personal_details')">
          <span class="d-f fd-c ai-c px-1" v-html="editIcon"></span>
          {{ translate[$store.state.CURRENT_LANGUAGE].edit }}
        </si-button>
        <!--  -->
        <si-button v-else class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)"@click="save('personal_details')"><span class="d-f fd-c ai-c px-1" v-html="saveIcon"></span>{{ translate[$store.state.CURRENT_LANGUAGE].save }}</si-button>
        <!--  -->
      </card-block>
      <!--  -->
    </div>
    <!--  -->
    <div class="py-2">
      <!--  -->
      <card-block v-if="customer.address" :title="translate[$store.state.CURRENT_LANGUAGE].address_details">
        <!--  -->
        <div class="d-f fw-w py-3">
          <!--  -->
          <template v-for="(field, index) in fields.address">
            <!--  -->
            <div v-if="!['address1', 'address2'].includes(field)" :key="index" class=" d-f fd-c fields-group" :class="['country', 'province', 'city'].includes(field) ? 'lg-col-4 sm-col-6' : 'lg-col-3 sm-col-6'">
              <span class="p-2">{{ field }}</span>
              <span class="px-2" v-if="['country', 'province', 'city'].includes(field) && activeEditableBlock != 'address_details'">{{ customer.address[field] && customer.address[field].name ? customer.address[field].name : 'N/A' }}</span>
              <div class="px-1" v-else-if="['country', 'province', 'city'].includes(field) && activeEditableBlock == 'address_details' && countries && countries.length > 0">
                <card-select v-if="field == 'country'" class="lg-col-12 md-col-12  sm-col-12 select" :class="customer.address[field] ? 'active_select' : null" :options="countries" label="name" code="_id" :placeholder="placeholder(pluralize(field))" @input="select(field, $event)" :value="countries.find(c => customer.address[field] && c._id == customer.address[field]._id)" />
                <card-select v-if="field == 'province'" class="lg-col-12 md-col-12  sm-col-12 select" :class="customer.address[field] ? 'active_select' : null" :options="provinces" label="name" code="_id" :placeholder="placeholder(pluralize(field))" @input="select(field, $event)" :value="provinces.find(c => customer.address[field] && c._id == customer.address[field]._id)" />
                <card-select v-if="field == 'city'" class="lg-col-12 md-col-12  sm-col-12 select" :class="customer.address[field] ? 'active_select' : null" :options="cities" label="name" code="_id" :placeholder="placeholder(pluralize(field))" @input="select(field, $event)" :value="cities.find(c => customer.address[field] && c._id == customer.address[field]._id)" />
              </div>
              <span class="px-2" v-else-if="!['country', 'province', 'city'].includes(field) && activeEditableBlock != 'address_details'">{{ customer.address[field] ? customer.address[field] : 'N/A' }}</span>
              <card-input v-else-if="!['country', 'province', 'city'].includes(field) && activeEditableBlock == 'address_details'" class="px-2" v-model="customer.address[field]" :id="`a-${field}`" v-bind="data" :val="customer.address[field] ? customer.address[field] : ''" />
            </div>
            <!--  -->
            <div v-else :key="index+1" class="lg-col-6 d-f fd-c py-2 fields-group">
              <span class="p-2">{{ field }}</span>
              <span class="px-2" v-if="activeEditableBlock != 'address_details'">{{ customer.address[field] ? customer.address[field] : 'N/A' }}</span>
              <card-input v-else class="px-2" v-model="customer.address[field]" :id="`a-${field}`" v-bind="data" :val="customer.address[field] ? customer.address[field] : ''" />
            </div>
            <!--  -->
          </template>
          <!--  -->
        </div>
        <!--  -->
        <si-button v-if="activeEditableBlock != 'address_details'" class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)" @click="edit('address_details')"><span class="d-f fd-c ai-c px-1" v-html="editIcon"></span>{{ translate[$store.state.CURRENT_LANGUAGE].edit }}</si-button>
        <si-button v-else class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)" @click="save('address_details')"><span class="d-f fd-c ai-c px-1" v-html="saveIcon"></span>{{ translate[$store.state.CURRENT_LANGUAGE].save }}</si-button>
        <!--  -->
      </card-block>
      <!--  -->
    </div>
    <!--  -->
    <div class="py-2">
      <!--  -->
      <card-block :title="translate[$store.state.CURRENT_LANGUAGE].change_password">
        <!--  -->
        <template>
          <!--  -->
          <div class="w-f">
            <!--  -->
            <div class="d-f ai-c jc-c my-2">
              <div class=" lg-col-5 py-2 bg-r px-2 br-5 ta-c my-2" v-if="invalidChangePassword">
                {{ messgaeErr }}
              </div>
            </div>
            <!--  -->
            <div class="d-f fw-w my-3" v-if="activeEditableBlock == 'changepassword'">
              <card-input class="my-1" v-model="changePassword.currentPassword" :val="changePassword.currentPassword" type="password" placeholder="currentPassword" />
              <card-input class="my-1" v-model="changePassword.newPassword" :val="changePassword.newPassword" type="password" placeholder="newPassword" />
              <card-input class="my-1" v-model="changePassword.confirmNewPassword" :val="changePassword.confirmNewPassword" type="password" placeholder="confirmNewPassword" />
            </div>
            <!--  -->
            <div class="d-f ai-c jc-fe">
              <si-button v-if="activeEditableBlock != 'changepassword'" class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)" @click="edit('changepassword')"><span class="d-f fd-c ai-c px-1" v-html="editIcon"></span>{{ translate[$store.state.CURRENT_LANGUAGE].edit }}</si-button>
              <si-button v-else class=" d-f ai-c p-a t-3 mx-2" :class="$store.state.CURRENT_LANGUAGE == 'AR' ? 'l-3' : 'r-3'" :px="3" :py="1" background="var(--primary-color-op)" color="var(--primary-color)" @click="chnagePassword()"><span class="d-f fd-c ai-c px-1" v-html="saveIcon"></span>{{ translate[$store.state.CURRENT_LANGUAGE].save }}</si-button>
            </div>
            <!--  -->
          </div>
          <!--  -->
        </template>
        <!--  -->
      </card-block>
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
    'card-block': () => import('@/components/account/profile/CardBlock.vue'),
    'si-button': () => import('@/components/account/SiButton'),
    'card-input': () => import('@/components/account/profile/Input'),
    'card-select': () => import('~/components/SiSelect.vue'),
    'buttonLoader': () => import('@/components/buttonLoader.vue'),
  },
  data() {
    return {
      checkout_defaults: null,
      translate: {
        AR: require('../../locales/ar.json'),
        EN: require('../../locales/en.json'),
        FR: require('../../locales/fr.json')
      },
      invalidChangePassword: false,
      messgaeErr: '',
      changePassword: {
        currentPassword: null,
        newPassword: null,
        confirmNewPassword: null
      },
      isLoading: false,
      data: { placeholder: '', value: 'hello', id: 'firstname', readonly: false },
      activeEditableBlock: null,
      val: null,
      countries: [],
      provinces: [],
      cities: [],
      fields: { 
        personal: [
          'firstname', 
          'lastname', 
          'phone', 
          'email',
          'rib',
          'bank'
        ], 
        address: [
          'firstname', 
          'lastname', 
          'phone', 
          'email', 
          'address1', 
          'address2', 
          'country', 
          'province', 
          'city'
        ] 
      },
      customer: null,
      emailIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>',
      userIcon: '<svg aria-hidden="true" focusable="false" width="27" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>',
      editIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
      saveIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>'
    }
  },
  async fetch() {
    this.customer = await this.$customers({}, true);
    await this.getSettings()
    if (!this.customer.transfer) {
      this.customer.transfer = {};
    }
  },
  async mounted() {
    await this.getSettings()
  },
  methods: {
    async getSettings() {
      const settings = await this.$settings();
      this.checkout_defaults = settings.checkout_defaults;
    },
    async withdrawCashback() {
      const response = await this.$http.post('/customers/withdrawCashback');
      if(response.status == 200) {
        alert("withdraw Cashback Success")
      }
    },
    async chnagePassword() {
      this.invalidChangePassword = false
      if (this.changePassword.newPassword == this.changePassword.confirmNewPassword) {
        try {
          var object = {
            password: this.changePassword.newPassword,
            currentPassword: this.changePassword.currentPassword
          }
          var response = await this.$http.post(`/customers/update?id=${this.customer._id}`, object)
          this.activeEditableBlock = null;
        } catch (error) {
          this.messgaeErr = "Current Password Invalid"
          this.invalidChangePassword = true
          console.log('error forget passsword', error)
        }
      } else {
        this.messgaeErr = "Password Confirm Invalid"
        this.invalidChangePassword = true
      }
    },
    async edit(block) {
      this.activeEditableBlock = block;
      if (block == "address_details") {
        this.countries = (await this.$locations({}, true)).data; 
        this.getLocations();
      } 
    },
    save() {
      const customerId = this.customer._id;
      this.activeEditableBlock = null;

      let newCustomer = JSON.parse(JSON.stringify(this.customer));
      delete newCustomer._id;
      delete newCustomer.createdAt;
      delete newCustomer.email;
      delete newCustomer.updatedAt;
      
      this.$updateCustomer({ _id: customerId, data: newCustomer });
    },
    pluralize(name) {
      if (name == 'country') return 'countries';
      if (name == 'city') return 'cities';
      else return name + "s"
    },
    get(name) { 
      return this.pluralize(name) 
    },
    placeholder(placeholder, required = false) {
      if (required) return placeholder + '*';
      else return placeholder
    },
    async getLocations() {
      if (this.customer.address.country._id) {
        this.countries = (await this.$locations({}, true)).data;
      } 
      if (this.customer.address.country._id) {
        this.provinces = (await this.$locations({ country: this.customer.address.country._id }, true)).results;
      } 
      if (this.customer.address.province._id) {
        this.cities = (await this.$locations({ country: this.customer.address.country._id, province: this.customer.address.province._id }, true)).results;
      } 
    },
    select(field, event) {
      if (event) { this.$set(this.customer.address, field, event); this.getLocations() }
      if (!event) {
        this.$set(this.customer.address, field, {})
        if (field == "country") {
          this.$set(this.customer.address, "city", null);
          this.$set(this.customer.address, "province", null);
          this.cities = []
          this.provinces = []
        }
        if (field == "province") { this.$set(this.customer.address, "city", null); this.cities = [] }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-r {
  background: #EA5455;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 1px 1px 20px -7px #ed7577;
}

.user--icon {
  color: #0000002b;
  border-radius: 50px;
  padding: 14px 17px;
  background: #ffffff;
}

.email--text {
  color: #2351ffb8;
}

.withdraw--cashback {
  color: white;
  background-color: #2351ffb8;
}

.fields-group {
  span:first-child {
    font-size: 13px;
    color: #6d6d6d;
  };

  span:nth-child(2) {
    font-size: 13px;
    font-weight: 500;
    ;
  }
}
</style>
