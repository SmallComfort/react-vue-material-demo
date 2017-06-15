<template>
  <div>
    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog1')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
      <md-dialog-title>Create new note</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Note</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog2')">Create</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" id="custom" @click.native="openDialog('dialog1')">Custom</md-button>
    <md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog2')">
      <md-icon>add</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  }
}
</script>
