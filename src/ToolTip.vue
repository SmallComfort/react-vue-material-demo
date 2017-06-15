<template>
  <div>
    <div>
      <md-button class="md-icon-button md-raised md-primary">
        <md-icon>folder</md-icon>
        <md-tooltip md-direction="top">My tooltip</md-tooltip>
      </md-button>

      <md-avatar>
        <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
        <md-tooltip md-direction="bottom">My tooltip</md-tooltip>
      </md-avatar>
    </div>

    <div>
      <md-button class="md-icon-button md-raised md-warn">
        <md-icon>home</md-icon>
        <md-tooltip md-direction="left">My tooltip</md-tooltip>
      </md-button>

      <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon>
        <md-tooltip md-direction="right">My tooltip</md-tooltip>
      </md-avatar>
    </div> 
  </div>
</template>

<style lang="sass" scoped>
  .md-button,
  .md-avatar {
    margin: 24px;
  }
</style>

