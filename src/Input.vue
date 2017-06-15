<template>
  <div>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <md-icon class="md-warn">
          warning
          <md-tooltip>Be careful. You're almost broken!</md-tooltip>
        </md-icon>
        <label>Money</label>
        <md-input type="text"></md-input>
        <md-icon>attach_money</md-icon>
      </md-input-container>

      <md-input-container>
        <md-icon>phone</md-icon>
        <label>Phone</label>
        <md-input type="tel"></md-input>
      </md-input-container>

      <md-input-container>
        <md-icon>speaker_notes</md-icon>
        <label>Notes</label>
        <md-textarea></md-textarea>
      </md-input-container>
    </form>
  </div>
</template>
