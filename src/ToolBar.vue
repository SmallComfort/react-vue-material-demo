<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Default</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-toolbar class="md-dense">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Dense</h2>

      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>

    <md-toolbar class="md-medium">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1;">Medium</h2>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <span style="flex: 1;"></span>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>filter_list</md-icon>
        </md-button>
      </div>

      <div class="md-toolbar-container">
        <h2 class="md-title">Large</h2>
      </div>
    </md-toolbar>
  </div>  
</template>

<style lang="sass" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

    .md-fab {
      margin: 0;
      position: absolute;
      bottom: -20px;
      left: 16px;
    }

    .md-title {
      color: #fff;
    }

    .md-list {
      overflow: auto;
    }

    .md-list-action .md-icon {
      color: rgba(#000, .26);
    }

    .md-avatar-icon .md-icon {
      color: #fff !important;
    }

    .md-sidenav .md-list-text-container > :nth-child(2) {
      color: rgba(#fff, .54);
    }

    .md-account-header {
      .md-list-item:hover .md-button:hover {
        background-color: inherit;
      }

      .md-avatar-list .md-list-item-container:hover {
        background: none !important;
      }
    }
  }
</style>