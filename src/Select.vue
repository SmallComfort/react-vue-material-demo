<template>
  <div>
    <div class="field-group">
      <md-input-container>
        <label for="movie">Movie</label>
        <md-select name="movie" id="movie" v-model="movie">
          <md-option value="fight_club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather_ii">Godfather II</md-option>
          <md-option value="godfather_iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp_fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="country">Country</label>
        <md-select name="country" id="country" v-model="country">
          <md-option value="australia">Australia</md-option>
          <md-option value="brazil">Brazil</md-option>
          <md-option value="japan">Japan</md-option>
          <md-option value="united_states">United States</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="font">Font</label>
        <md-select name="font" id="font" v-model="font">
          <md-option value="arial">Arial</md-option>
          <md-option value="calibri">Calibri</md-option>
          <md-option value="cambria">Cambria</md-option>
          <md-option value="comic_sans">Comic Sans</md-option>
          <md-option value="consolas">Consolas</md-option>
          <md-option value="courier">Courier</md-option>
          <md-option value="droid_sans">Droid Sans</md-option>
          <md-option value="georgia">Georgia</md-option>
          <md-option value="helvetica">Helvetica</md-option>
          <md-option value="impact">Impact</md-option>
          <md-option value="roboto">Roboto</md-option>
          <md-option value="segoe_ui">Segoe UI</md-option>
          <md-option value="times_new_roman">Times New Roman</md-option>
          <md-option value="ubuntu">Ubuntu</md-option>
          <md-option value="verdana">Verdana</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="food">Food</label>
        <md-select name="food" id="food" v-model="food">
          <md-subheader>Fruits</md-subheader>
          <md-option value="apples">Apples</md-option>
          <md-option value="bananas">Bananas</md-option>
          <md-option value="peaches">Peaches</md-option>
          <md-option value="oranges">Oranges</md-option>

          <md-subheader>Vegetables</md-subheader>
          <md-option value="carrots">Carrots</md-option>
          <md-option value="cucumbers">Cucumbers</md-option>

          <md-subheader>Baked Goods</md-subheader>
          <md-option value="apple_pie">Apple Pie</md-option>
          <md-option value="chocolate_cake">Chocolate Cake</md-option>
        </md-select>
      </md-input-container>
    </div>

    <md-button class="md-raised md-primary" @click.native="setPulpFiction">Set Pulp Fiction</md-button>
  </div> 
</template>

