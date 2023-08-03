<template>
    <div >
        <v-bottom-navigation
        :value="value"
        color="primary"
      >
        <v-btn to="/" >
          <span>Home</span>
    
          <v-icon>mdi-home</v-icon>
        </v-btn>
    
        <v-btn to="/product" >
          <span>product</span>
    
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
    
        <v-btn to="/becomeseller" >
          <span>Seller</span>
    
          <v-icon>mdi-account-multiple-plus-outline</v-icon>
        </v-btn>
        <v-btn to="/cart" >
            <span>Cart</span>
      
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn to="/account" >
            <span>Account</span>
      
            <v-icon>mdi-card-account-mail-outline</v-icon>
          </v-btn>
      </v-bottom-navigation>
    </div>
</template>
<script>

</script>
<style>

</style>
