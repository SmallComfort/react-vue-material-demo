<template>
  <div>
    <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
    <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>
    <md-spinner :md-size="150" md-indeterminate></md-spinner>

    <md-spinner :md-size="20" :md-stroke="2" md-indeterminate class="md-accent"></md-spinner>
    <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>
    <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>
  </div>
</template>
