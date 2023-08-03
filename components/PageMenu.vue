<template>
<v-container class="padding: 0px;">
  <div class="header_box" >
    <v-row class="sub_header " >
          <v-col class="box">
                  <v-btn to="/" text rounded > 
                    <v-icon style="height: 20px; ">mdi-home-outline</v-icon><h4>Home</h4>
                  </v-btn>

                </v-col>
                <v-col class="box">
                  <v-btn to="/product" text  rounded> 
                    <v-icon  style="height: 20px;">mdi-shopping-outline </v-icon><h4>Product</h4>
                  </v-btn>
                </v-col>
                <!-- <v-col class="box">
                  <v-btn to="/becomeseller" text rounded  > 
                    <v-icon style="height: 20px; ">mdi-account-multiple-plus-outline</v-icon><h4>Become Seller</h4>
                  </v-btn>

                </v-col> -->
                <v-col class="box">
                  <v-btn  to="/aboutus" text  rounded > 
                    <v-icon  style="height: 20px;">mdi-information-outline</v-icon><h4>About Us</h4>
                  </v-btn>
                </v-col>
            </v-row>
        </div>
</v-container>
</template>
<script>
import PageMenu from "~/components/PageMenu.vue"
  export default {
   components:{
    PageMenu
   }
 }
</script>
<style scoped>
.header_box{
    display: flex;
    justify-content: center;

}

h4{
    font-size: 1em;
}
.v-btn--active {

  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  transition:0.1s all;
  font-weight: bold;
  color: white !important;
}
</style>