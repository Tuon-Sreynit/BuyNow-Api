<template>
<div>
      <v-container class="fill-height">
        <v-row>
            <v-btn  icon   @click.stop="drawer = !drawer" text style="margin-top: 15px;" v-show="carts.quantity>0">
                <v-badge right color="green"  >
                     <span slot = "badge" >{{ carts.quantity}}</span>
                     <!-- <span v-if="carts.cart_quantity==0" slot = "badge" >0</span> -->
                     <v-icon class="icon">  mdi-cart-outline</v-icon>
                </v-badge> 
            </v-btn> 
            <v-btn  icon   @click.stop="drawer = !drawer" text style="margin-top: 15px;" v-show="carts.cart_quantity==0">
                <v-badge right color="green"  >
                     <span slot = "badge" >{{ carts.quantity}}</span>
                     <!-- <span v-if="carts.cart_quantity==0" slot = "badge" >0</span> -->
                     <v-icon class="icon">  mdi-cart-outline</v-icon>
                </v-badge> 
            </v-btn> 
           
        </v-row>
      </v-container>
      <v-navigation-drawer v-if="$auth.loggedIn" v-model="drawer" absolute right temporary style="height:100vh;width: 550px ">
                       
                      <v-list-item style="margin-top: 20px;margin-left: 20px; margin-right: 20px" v-show="carts.quantity>0">
              
                         <h3 style="font-size: 1.2em;font-weight: 200;">Your added items:</h3>
                    </v-list-item>
                    <v-list-item style="margin-top: 20px;margin-left: 20px; margin-right: 20px" v-show="carts.quantity==0">
                            <v-col align="center" class="mt-15">
                                <h3 style="font-size: 1.2em;font-weight: 200;">
                                     Your Cart is Empty!
                                      
                               </h3>Please choose one of our services!
                               <v-img height="auto" width="100%" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"></v-img>
                            </v-col>
                         
                    </v-list-item>
                    <v-list-item style="margin-top: 30px;" v-for="item in carts.data" :key="item.id" >
                       <div style="display: flex; justify-content: space-between;gap: 40px; ">
                        <div style="height:200px">
                          <v-img style="border-radius: 10px" height="150px" width="155px" :src="item.image"></v-img>
                        </div>
                        <div style="padding: 20px; width:300px"> 
                          <v-row>
                            <v-col align="end">
                              <h5 style="text-transform: uppercase;font-weight: 300;">{{ item.name }}</h5>
                              <div style="display: flex; justify-content: end">
                                <div class="ml-5">  <h5>Quantity :</h5></div>
                                <div><h5>{{ item.quantity }}</h5></div>
                              </div>
                            
                              <h5 style="text-transform: uppercase;font-weight: 300;">$ {{  item.grand_total}}</h5>
                              <v-row class="mt-1">
                                <v-col><v-btn icon><v-icon  @click="   $store.dispatch('updateQuantityCart', {  cart_id:item.cart_id, operator: '1'}) " >mdi-plus </v-icon></v-btn></v-col>
                       
                                <v-col><v-btn icon><v-icon  @click="   $store.dispatch('updateQuantityCart', {  cart_id: item.cart_id, operator: '-1'}) " >mdi-minus</v-icon></v-btn></v-col>
                                <v-col><v-btn @click="RemoveCart(item.cart_id)"  icon><v-icon>mdi-delete</v-icon></v-btn></v-col>
                              </v-row>
                            </v-col>
                        
                          </v-row>
                       

                            
                        </div>
                       </div>
                       
                    </v-list-item>
                    <div  v-for="item in carts.data" :key="item.id">
                    
                      <div   style="background-color: linear-gradient(to right, #c02425, #f0cb35) ">
                     
                            <v-card-actions style="position: absolute;bottom:0;left:0;z-index: 1000  ">
                               
                            <h2  v-if="carts" style="text-transform: uppercase;font-weight:900;">Total: <span style="color: red; font-weight: 900">$ {{carts.total }}</span></h2>
                            
                            </v-card-actions>
                          <v-card-actions style="position: absolute;bottom:0;right:0; z-index: 1000  ">
                          
                              <v-btn @click="CheckVerify()" text style="background-color: orange; font-weight: bold; color: white">
                              CHECK OUT
                              </v-btn>
                            </v-card-actions>
                      </div>
                    </div> 
           </v-navigation-drawer>
        </div>
</template>
<script>

export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
          ],
        }
      },computed:{
          carts(){
            return this.$store.state.carts;
          },

      },
         methods:{
           RemoveCart(carts){
               console.log(carts)
               this.$store.dispatch('removeCart',carts)
            }, 
            CheckVerify(){
              if(this.$auth.state.user.verify_status == "completed"){
            
                    location.replace('/checkout') 
                   
                }
                 else if(this.$auth.state.user.verify_status=="pending"){
                  location.replace('/') 
                 
                 } 
            }  
      }
  }
</script>
<style>

</style>