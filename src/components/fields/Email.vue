<template>
  <b-form-group id="input-group" :label="label" label-for="input">
        <b-form-input
            id="input"
            required
            type="email"
            placeholder="Enter email"
            v-model="validation.$model"
            :state="!validation.$error"
        >
        </b-form-input>
        <b-form-invalid-feedback :state="!validation.$error">
            This is required
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="!validation.$error">
            Looks good!
        </b-form-valid-feedback>
    </b-form-group>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    validation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
