<template>
  <div class="d-f fd-cr input--container mx-1 p-r" :class="focused?'focused':null">
    <span class="p-a t-10 l-0 fw-400 error" v-if="error">{{error}}</span>
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :value="val"
      @input="$emit('input',$event.target.value)"
      @focus="focus"
      @blur="blured"
    >
    <label ref="label" :for="id" :class="error ? 'text-danger' : null">{{label}}</label>
  </div>
</template>

<script>
export default {
    props:{
        placeholder:{ type: [String, Number], default: 'Enter text...' },
        val: { type: [String, Number], default: null },
        label: { type: String, default: '' },
        error: { type: Boolean, default: Boolean },
        color: { type: String, default: 'black' },
        disabled: { type: Boolean, default: false },
        id: { type: String, default: 'VueInput' },
        size: { type: String, default: null },
        type: { type: String, default: 'text' },
        readonly: { type: Boolean, default: false },
        valid: { type: Boolean, default: false },
        validColor: { type: String, default: 'green' },
        required: { type: Boolean, default: false },
        textarea: { type: Boolean, default: false },
        loader: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false },
        borderRadius: { type: Number, default: 4 },
        error:{type:String,default:null}
    },
    data(){return{focused:false}},
    methods:{focus(){this.focused=true},blured(){this.focused=false}}
}

</script>

<style lang="scss" scoped>
    // input{border:none;font-size: 14px;font-weight: 500;outline:none;background:transparent;color:rgb(0, 0, 0);}
    input{border:none;font-size: 1em;font-weight: 400;outline:none;background:transparent;color:rgb(0, 0, 0);}
    .focused{border-bottom-color:var(--primary-color) !important; box-shadow: 0 2px 3px -2px #cecece;}
    label{font-size: 1em;color: #6d6d6d;}
    ::placeholder{@extend label;font-weight: 400; color:rgb(173, 173, 173);}
    // .input--container{padding: 7px;background: #ffffff;border-bottom: 1px solid #b1b1b1;border-top-right-radius: 3px;border-top-left-radius: 3px;transition:.3s}
    .input--container{padding: 6px;background: #ffffff;border-bottom: 1px solid #b1b1b1;border-top-right-radius: 3px;border-top-left-radius: 3px;transition:.3s;font-size: 1em}
    .error{color: #ff0707; font-size: 13px;}
</style>
