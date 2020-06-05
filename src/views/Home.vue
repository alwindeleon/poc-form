<template>
  <b-row class="justify-content-md-center my-5">
    <b-col cols='6'>
      <Header />
      <Field
        v-for="(field) in sampleData"
        :type="field.type"
        :label="field.name"
        :options="field.options"
        :key="field.id"
        :validation="$v.form[field.name]"
      />
      <b-button v-if="$v.form.$invalid" variant="primary">Submit</b-button>
      <div v-else>
        <download-csv
          class="btn btn-primary"
          :data="[form]"
          name= "form.csv"
        >
            Download Data
        </download-csv>
        <button class="btn btn-primary mx-2" @click="clearForm"> Clear </button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Header from '@/components/common/Header.vue'
import Field from '@/components/fields/Field.vue'
import SampleData from '@/fixtures/sample-form.json'

export default {
  data () {
    return {
      sampleData: SampleData,
      form: this.generateForm()
    }
  },
  mounted () {
    this.$v.$touch()
  },
  methods: {
    clearForm () {
      this.form = this.generateForm()
    },
    generateForm () {
      return SampleData.reduce((result, { name }) => {
        result[name] = ''
        return result
      }, {})
    }
  },
  components: {
    Header,
    Field
  },
  validations () {
    return {
      form: this.sampleData.reduce((result, { name }) => {
        result[name] = {
          required
        }
        return result
      }, {})
    }
  }
}
</script>
