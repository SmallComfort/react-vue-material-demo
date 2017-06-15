<template>
  <div>
    <md-input-container>
      <label>Single</label>
      <md-file v-model="single"></md-file>
    </md-input-container>

    <md-input-container>
      <md-file v-model="placeholder" placeholder="A nice input placeholder"></md-file>
    </md-input-container>

    <md-input-container>
      <md-file placeholder="Disabled" disabled></md-file>
    </md-input-container>

    <md-input-container>
      <label>Initial Value</label>
      <md-file v-model="initialValue"></md-file>
    </md-input-container>

    <md-input-container>
      <label>Multiple</label>
      <md-file v-model="multiple" multiple></md-file>
    </md-input-container>

    <md-input-container>
      <label>Only Images</label>
      <md-file v-model="onlyImages" accept="image/*"></md-file>
    </md-input-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    single: null,
    placeholder: null,
    initialValue: 'my-profile-picture.jpg',
    multiple: null,
    onlyImages: null
  })
}
</script>
