<template>
  <b-form-group :label="label">
        <b-form-select
          :options="options"
          required
          v-model="validation.$model"
            :state="!validation.$error"
        ></b-form-select>
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
    options: {
      type: Array,
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
