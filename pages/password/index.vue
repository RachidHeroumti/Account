<template>
    <!--  -->
    <div class="py-2 px-5" v-if="customer">
        <!--  -->
        <card-block class="md-fd-c">
            <!--  -->
            <div class="d-f fd-c py-3 lg-col-6 sm-col-12">
                <!--  -->
                <div v-for="(field, index) in fields.filter(item => item.show == true)" :key="index" class="d-f fd-c py-2 fields-group">
                    <!--  -->
                    <div class="p-2 d-f jc-sb">
                        <div>{{ field.name | t }}</div>
                    </div>
                    <!--  -->
                    <card-input class="px-2" v-model="newCustomer[field.name]" :id="`p-${field.name}`" v-bind="field" :error="errors[`${field.name}`] ? errors[`${field.name}`] : null" :val="newCustomer[field.name] ? newCustomer[field.name] : ''" />
                    <!--  -->
                </div>
                <!--  -->
                <si-button v-if="toChangepassword" class="mx-3" :px="8" :py="2" background="var(--primary-color-op)" color="var(--primary-color)" @click="toggleField('reset_code', false)"><span class="d-f fd-c ai-c px-1"></span>{{ 'return' | t }}</si-button>
                <!--  -->
                <si-button :px="8" :py="2" background="var(--primary-color-op)" color="var(--primary-color)" @click="update(toChangepassword ? -1 : 1)"><span class="d-f fd-c ai-c px-1"></span>{{ toChangepassword ? 'reset' : 'update' | t }}</si-button>
                <!--  -->
            </div>
            <!--  -->
            <div class="d-f ai-fs jc-fe lg-col-6 sm-col-12"></div>
            <!--  -->
        </card-block>
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
        'card-input': () => import('@/components/account/profile/Input.vue'),
    },
    async fetch() {
        this.customer = await this.$customers({})
    },
    data() {
        return {
            customer: null,
            newCustomer: {
                verify: {},
                password: null,
                currentPassword: null,
                confirmPassword: null
            },
            errors: {
                confirmPassword: null
            },
            toChangepassword: false,
            fields: [
                { name: 'currentPassword', placeholder: "******", type: 'password', show: true },
                { name: 'reset_code', placeholder: 'reset_code', type: 'text', show: false },
                { name: 'newPassword', placeholder: "******", type: 'password', show: true },
                { name: 'confirmNewPassword', placeholder: "******", type: 'password', show: true }
            ],
        }
    },
    methods: {
        toggleField(fieldname, value) {
            this.errors = {};
            this.newCustomer = {}
            this.fields[this.fields.findIndex(item => item.name == fieldname)].show = value;
            if (fieldname == 'currentPassword') { this.fields[this.fields.findIndex(item => item.name == 'reset_code')].show = true; this.toChangepassword = true; this }
            else { this.fields[this.fields.findIndex(item => item.name == 'currentPassword')].show = true; this.toChangepassword = false }
        },
        async update(index) {
            if (index == 1) {
                if (this.validation(this.newCustomer, 'update')) {
                    this.errors = {}
                    delete this.newCustomer.confirmPassword;
                    const response = await this.$updateCustomer({ _id: this.customer._id, data: this.newCustomer })
                    if (response.data && response.data._id) {
                        this.customer = response.data;
                        this.newCustomer = {};
                    } else {
                        this.$set(this.errors, 'currentPassword', response)
                    }
                }
            } else {
                this.newCustomer.verify = {};
                this.newCustomer.verify.code = this.newCustomer.reset_code
                if (this.validation(this.newCustomer)) {
                    delete this.newCustomer.confirmPassword;
                    delete this.newCustomer.reset_code;
                    const response = await this.$updateCustomer({ _id: this.customer._id, data: this.newCustomer })
                    if (response.data && response.data._id) {
                        this.customer = response.data;
                        this.newCustomer = {};
                    } else {
                        this.$set(this.errors, 'currentPassword', 'code incorrect')
                    }
                }
            }
        },
        validation(customer, type) {
            let valid = true
            if (type == 'update') {
                if (!customer.currentPassword) { this.$set(this.errors, 'currentPassword', "field should not be empty"); valid = false }
                else if (customer.currentPassword && customer.currentPassword.length < 6) { this.$set(this.errors, 'currentPassword', "max length"); valid = false }
                else this.errors.currentPassword = null
            }
            if (!customer.password) { this.$set(this.errors, 'password', "field should not be empty"); valid = false }
            else if (customer.password && customer.password.length < 6) { this.$set(this.errors, 'password', "max length"); valid = false }
            else this.errors.password = null
            if (!customer.confirmPassword) { this.$set(this.errors, 'confirmPassword', "field should not be empty"); valid = false }
            else if (customer.confirmPassword && customer.confirmPassword.length < 6) { this.$set(this.errors, 'confirmPassword', "max length"); valid = false }
            else this.errors.confirmPassword = null
            if (customer.password && customer.confirmPassword && customer.confirmPassword != customer.password) { this.$set(this.errors, 'confirmPassword', 'Passwords do not match'); valid = false }
            return valid;
        }
    }
}
</script>

<style lang="scss" scoped>
.fields-group {
    span {
        color: #6a6a6a;
    };

    span:first-child {
        font-size: 14px;
    };

    div:nth-child(3) span {
        font-size: 13px;
        cursor: pointer;
        color: #496df8;

        &:hover {
            color: #2351FF;
        }
    }
}

.forget-password {
    span {
        font-size: 13px !important;
        cursor: pointer;
        color: #496df8;

        &:hover {
            color: #2351FF;
        }
    }
}
</style>
