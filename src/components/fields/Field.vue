<template>
    <div>
        <component
            :is="type"
            :label="label"
            :options="options"
            :validation="validation"
         />
    </div>
</template>

<script>
import Date from '@/components/fields/Date.vue'
import Dropdown from '@/components/fields/Dropdown.vue'
import Email from '@/components/fields/Email.vue'
import LongText from '@/components/fields/LongText.vue'
import MultiSelect from '@/components/fields/MultiSelect.vue'
import PhoneNumber from '@/components/fields/PhoneNumber.vue'
import ShortText from '@/components/fields/ShortText.vue'

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    validation: {
      type: Object,
      required: true
    }
  },
  components: {
    Date,
    Dropdown,
    Email,
    LongText,
    MultiSelect,
    PhoneNumber,
    ShortText
  }
}
</script>

<style>

</style>
