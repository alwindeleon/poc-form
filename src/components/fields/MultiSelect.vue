<template>
  <b-form-group :label="label" >
      <b-form-checkbox-group
        :options="options"
        v-model="validation.$model"
      >
      </b-form-checkbox-group>
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
