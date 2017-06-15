<template>
  <div>
    <md-progress :md-progress="progress"></md-progress>
    <md-progress class="md-accent" :md-progress="progress"></md-progress>
    <md-progress class="md-warn" :md-progress="progress"></md-progress>
  </div>  
</template>

<style scoped>
  .progress-area {
    height: 44px;
  }

  .md-button {
    margin: 16px 0 0;
  }

  .md-progress {
    margin-bottom: 16px;
  }
</style>

<script>
export default {
  data () {
    return {
      progress: 0,
      progressInterval: null,
      transition: true
    }
  },
  methods: {
    startProgress() {
      this.progressInterval = window.setInterval(() => {
        this.progress += 3;

        if (this.progress > 100) {
          window.clearInterval(this.progressInterval);
        }
      }, 100);
    },
    restartProgress() {
      this.progress = 0;
      this.transition = false;

      window.clearInterval(this.progressInterval);
      window.setTimeout(() => {
        this.transition = true;
        this.startProgress();
      }, 600);
    }
  },
  mounted() {
    this.startProgress();
  }
}
</script>

