<template>
  <div>
    <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">
      <template scope="chip">
        <span>{{ chip.value }}</span>
        <small v-if="chip.value === 'Amsterdam'">(favorite)</small>
      </template>
    </md-chips>
  </div>
</template>

<script>
export default {
  data: () => ({
      cities: ['Amsterdam', 'London', 'Tokio']
  })
}
</script>
