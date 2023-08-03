<template>
<div style="margin-top:140px">
    <v-container>
        <v-row>
            <v-col>
                <h3>Cart</h3>
                <v-divider></v-divider>
                <v-card class="mt-5">
                    <v-row justify="start">
                      <v-col align="center" md="4" class="pa-4">
                        <img height="100px" width="100px" src="http://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132"></img>
                      </v-col>
                      <v-col align="start"  md="8">
                          <h4 style="text-transform: uppercase;font-weight: 300;color: black">Dress</h4>
                          <h3>Quantity : <span style="color: red"> 1</span></h3>
                          <h3 style="text-transform: uppercase;font-weight: 300;color: black">$ 12</h3>
                          <v-row >
                            <v-col><v-btn icon><v-icon small>mdi-plus</v-icon></v-btn></v-col>
                            <v-col><v-btn icon><v-icon  small>mdi-minus</v-icon></v-btn></v-col>
                            <v-col><v-btn icon><v-icon  small>mdi-delete</v-icon></v-btn></v-col>
                          </v-row>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                     <div class="total" style="display:flex; justify-content: flex-end; padding: 15px">
                        <div>
                             <h3 >Total: <span style="color: red"> 7.80 </span>$</h3>
                        </div>
                       
                     </div>
                  </v-card>
            </v-col>
        </v-row>
   </v-container>
</div>
</template>
<script>

</script>
<style>

</style>