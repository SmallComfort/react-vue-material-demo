<template>
  <div>
    <div class="has-ripple">
      <md-ink-ripple />
      This div has ripple effect
    </div>

    <div class="has-ripple purple">
      <md-ink-ripple />
      This div has ripple effect
    </div>

    <div class="has-ripple blue">
      <md-ink-ripple />
      This div has ripple effect
    </div>

    <div class="has-ripple red">
      <md-ink-ripple />
      This div has ripple effect
    </div>
  </div>
</template>

<style>
.has-ripple {
  margin-bottom: 16px;
  padding: 20px;
  display: inline-block;
  position: relative;
}

.blue {
  color: #2196F3;
}

.purple {
  color: #9C27B0;
}

.red {
  color: #F44336;
}

.card-ripple {
  width: 300px;
  margin-top: 24px;
}
</style>

