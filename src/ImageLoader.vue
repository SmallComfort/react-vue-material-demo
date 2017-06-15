<template>
  <div>
    <md-button class="md-primary md-raised" @click.native="loadImage">Load Image</md-button>
    <md-button class="md-primary md-raised" @click.native="clearImage">Clear Image</md-button>

    <div>
      <md-image :md-src="src"></md-image>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    src: null
  }),
  methods: {
    loadImage() {
      let options = [
        '//vuematerial.github.io/assets/joker-1.jpg',
        '//vuematerial.github.io/assets/joker-2.jpg',
        '//vuematerial.github.io/assets/joker-3.jpg',
        '//vuematerial.github.io/assets/card-image-1.jpg',
        '//vuematerial.github.io/assets/card-image-2.jpg'
      ];

      this.src = options[Math.floor(Math.random() * 5)];
    },
    clearImage() {
      this.src = null;
    }
  }
};
</script>
