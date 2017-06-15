<template>
  <div>
    <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>
    <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>
    <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>
    <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>
  </div> 
</template>

<script>
  export default {
    data() {
      return {
        checked0: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: true,
        checked9: true,
        checked10: true
      };
    },
    methods: {
      submit() {
        alert('This switch submits the form');
      }
    }
  };
</script>