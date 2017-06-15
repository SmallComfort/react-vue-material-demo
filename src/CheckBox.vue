<template>
  <div>
    <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Regular Checkbox</md-checkbox>
    <md-checkbox id="my-test2" name="my-test2" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>
    <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>
    <md-checkbox id="my-test4" name="my-test4" v-model="checkbox" disabled>Disabled</md-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false
    }
  }
}
</script>
