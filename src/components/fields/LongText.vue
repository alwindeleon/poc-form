<template>
  <div>
    <label>{{ label }}</label>
    <b-form-textarea
        placeholder="Enter long text"
        rows="4"
        max-rows="6"
        v-model="validation.$model"
        :state="!validation.$error"
    >
    </b-form-textarea>
     <b-form-invalid-feedback :state="!validation.$error">
        This is required
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="!validation.$error">
        Looks good!
      </b-form-valid-feedback>
  </div>
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
