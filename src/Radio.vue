<template>
  <div>
    <div>
      <md-radio v-model="radio1" id="my-test1" name="my-test-group1" md-value="1">My beautiful radio</md-radio>
      <md-radio v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">Another radio</md-radio>
      <md-radio v-model="radio1" id="my-test3" name="my-test-group1" md-value="3">Another another radio</md-radio>
    </div>

    <div>
      <md-radio v-model="radio2" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Primary radio</md-radio>
      <md-radio v-model="radio2" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Another primary radio</md-radio>
      <md-radio v-model="radio2" id="my-test6" name="my-test-group2" md-value="3" class="md-primary">Another another primary radio</md-radio>
    </div>

    <div>
      <md-radio v-model="radio3" id="my-test7" name="my-test-group3" md-value="1" class="md-warn">Warn radio</md-radio>
      <md-radio v-model="radio3" id="my-test8" name="my-test-group3" md-value="2" class="md-warn">Another warn radio</md-radio>
      <md-radio v-model="radio3" id="my-test9" name="my-test-group3" md-value="3" class="md-warn">Another another warn radio</md-radio>
    </div>

    <div>
      <md-radio v-model="radio4" id="my-test10" name="my-test-group3" md-value="1">My beautiful radio</md-radio>
      <md-radio v-model="radio4" id="my-test11" name="my-test-group3" md-value="2" disabled>Disabled</md-radio>
      <md-radio v-model="radio4" id="my-test12" name="my-test-group3" md-value="3">Another radio</md-radio>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        radio1: 2,
        radio2: 1,
        radio3: 1,
        radio4: 1,
        radio5: 2,
        radio6: 3,
        radio7: 1,
        radio8: 2
      };
    }
  };
</script>
