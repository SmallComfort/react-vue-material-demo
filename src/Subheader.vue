<template>
  <div>
    <div class="phone-viewport">
      <md-list>
        <md-subheader>Navigation</md-subheader>

        <md-list-item>
          <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon> <span>Outbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon> <span>Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon> <span>Spam</span>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-subheader>Contacts</md-subheader>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <span>Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <span>Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <span>Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </div>

    <div class="phone-viewport">
      <md-list class="custom-list md-triple-line">
        <md-subheader class="md-inset">Today</md-subheader>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Ali Connors</span>
            <span>Brunch this weekend?</span>
            <p>I'll be in your neighborhood doing errands...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">star</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>me, Scott, Jennifer</span>
            <span>Summer BBQ</span>
            <p>Wish I could come, but I'm out of town ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Sandra Adams</span>
            <span>Oui oui</span>
            <p>Do you have Paris recommendations ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="//vuematerial.github.io/assets/avatar-2.jpg" alt="People">
          </md-avatar>

          <div class="md-list-text-container">
            <span>Trevor Hansen</span>
            <span>Order confirmation</span>
            <p>Thank you for your recent order from ...</p>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>star_border</md-icon>
          </md-button>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>
    </div>
  </div>  
</template>
