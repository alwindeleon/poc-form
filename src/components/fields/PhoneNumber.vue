<template>
  <b-form-group  :label="label">
        <b-form-input
            required
            type="tel"
            placeholder="Enter phone number"
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
