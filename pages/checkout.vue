<template>
<div style="margin-top:140px">
    <v-container>
    <div>
         <v-row>
            <v-col  md="8">
                <h2> Checkout </h2>
                <v-divider></v-divider>
                <div style="margin-top: 20px">
                  
                  <v-stepper v-model="e1">
                    <v-stepper-header>
                      <v-stepper-step
                        :complete="e1 > 1"
                        step="1"
                      >
                       Location 
                      </v-stepper-step>
                
                      <v-divider></v-divider>
                
                      <v-stepper-step
                        :complete="e1 > 2"
                        step="2"
                      >
                        Payment
                      </v-stepper-step>
                
                      <v-divider></v-divider>
                
                     
                    </v-stepper-header>
                
                    <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-text-field class="mt-3" dense  label="Input Location"></v-text-field>
                        <div style="display:flex; justify-content:flex-end">
                          <v-btn  color="primary"   @click="e1 = 2">
                         Continue
                       </v-btn>
                     </div>
                      </v-stepper-content>
                
                      <v-stepper-content step="2">
                        <v-btn
                        width="100%"
                        class="justify-start my-2 text-capitalize"
                        outlined
                      >
                        <v-radio-group v-model="select_payment">
                          <v-radio
                            label="cash on delivery"
                            value="1"
                            @click="bank = false"
                          ></v-radio>
                        </v-radio-group>
                      </v-btn>
                      <v-btn
                    width="100%"
                    class="justify-start my-2 text-capitalize"
                    outlined
                  >
                    <v-radio-group v-model="select_payment">
                      <v-radio
                        label="transfer money"
                        value="2"
                        @click="bank = !bank"
                      ></v-radio>
                    </v-radio-group>
                  </v-btn>
                  <div v-show="bank">
                    <div class="my-5 ml-2">
                     
                      <div class="mt-2">
                        <v-radio-group v-model="selected_bank">
                          <v-row
                            class="pa-2 no-gutters align-center"
                            style="border-top: 1px solid #eee"
                            v-for="b in banks"
                            :key="b.name"
                          >
                            <div>
                              <v-radio :value="b.name"> </v-radio>
                            </div>

                            <div>
                              <div style="width: 35px; height: 35px">
                                <img
                                  class="rounded-circle"
                                  width="100%"
                                  height="100%"
                                  :src="b.img"
                                  alt=""
                                />
                              </div>
                            </div>

                            <div class="ml-3">
                              <div>{{ b.name }}</div>
                              <div></div>
                              <div>{{ b.id }} | {{ b.more }}</div>
                            </div>
                            
                          </v-row>
                          <template>
                            <v-file-input
                              :rules="rules"
                              accept="image/png, image/jpeg, image/bmp"
                       
                              prepend-icon="mdi-camera"
                              label="Payment Picture"
                            ></v-file-input>
                          </template>
                        </v-radio-group>
                      </div>
                    </div>
                  </div>

                  <div style="display:flex; justify-content:flex-end">
                    <v-btn to="/order" color="primary"   @click="e1 = 2">
                      Checkout
                    </v-btn>
                 </div>
                        
                       
                      </v-stepper-content>
                    </v-stepper-items>
                  </v-stepper>
                </div>
            </v-col>
            <v-col  md="4" style="margin-top:20px">
              <v-card style="margin-top: 30px; padding: 10px;" v-for="cart in carts" :key="cart.id">
                <v-row  justify="start"  >
                        <v-col align="start" md="4" class="pa-4">
                          <img height="150px" width="70%" :src="cart.product.image">
                        </v-col>
                        <v-col align="start"  md="8">
                            <h2 style="text-transform: uppercase;font-weight: 300;color: black">{{cart.product.name}}</h2>
                            <h3>Quantity : <span style="color: red"> {{cart.quantity}}</span></h3>
                            <h2 style="text-transform: uppercase;font-weight: 300;color: black">$ {{cart.price}}</h2>
                            <v-row class="mt-1">
                              <v-col><v-btn @click="increase(cart._id)" icon><v-icon>mdi-plus</v-icon></v-btn></v-col>
                              <v-col><v-btn @click="decrease(cart._id)" icon><v-icon>mdi-minus</v-icon></v-btn></v-col>
                              <v-col><v-btn @click="deleteCart(cart._id)" icon><v-icon>mdi-delete</v-icon></v-btn></v-col>
                            </v-row>
                        </v-col>
                      </v-row>
                <v-divider></v-divider>
                 
              </v-card>
              <div class="total">
                    <h3 >Total: <span style="color: red"> 40.30</span>$</h3>
                 </div>
            </v-col>
         </v-row>
         <v-row>
            
        </v-row>

    </div>
    
   </v-container>
</div>
</template>
<script>
 import axios from 'axios'

export default {
    data () {
      return {
        carts: [],
        e1: 1,
        radioGroup: 1,
        bank: null,
      banks: [
        { name: 'ABA', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDH4lY6CAtSdCScceZE_ThkHlR3t5z1eqH0-X84mnhsuLs_Sxiqbe4BQALeU-c5eBYRHU&usqp=CAU', id: '012644848', more: 'BuyNow168' },
        { name: 'Aceleda', img: 'https://www.phnompenhpost.com/sites/default/files/styles/full-screen/public/field/image/44dfgd.jpg?itok=M2XoAN5V', id: '012644848', more: 'BuyNow168' },
        {
          name: 'Phone Number',
          img: 'https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark.png',
          id: '012644848',
          more: '( Wing, True Money, eMoney )',
        },
     
      ],
      selected_bank: null,
      paymode: null,
      select_payment: null,
      }
    },
    mounted(){
      axios.get('https://buynow-api.onrender.com/cart')
      .then(res => {
        this.carts = res.data
      })
      .catch(err => {
        console.error(err)
      })
    },
    deleteCart(id){
        axios.delete('https://buynow-api.onrender.com/cart/delete/'+id)
        .then(res => {
          axios.get('https://buynow-api.onrender.com/cart')
          .then(res => {
            this.carts = res.data
          })
          .catch(err => {
            console.error(err)
          })
        })
        .catch(err => {
          console.log(err);
        })
      },
      increase(id) {
        axios.post('https://buynow-api.onrender.com/cart/increase/'+id)
        .then(res => {
          axios.get('https://buynow-api.onrender.com/cart')
          .then(res => {
            this.carts = res.data
          })
          .catch(err => {
            console.error(err)
          })
        })
        .catch(err => {
          console.log(err);
        })
      },
      decrease(id) {
        axios.post('https://buynow-api.onrender.com/cart/decrease/'+id)
        .then(res => {
          axios.get('https://buynow-api.onrender.com/cart')
          .then(res => {
            this.carts = res.data
          })
          .catch(err => {
            console.error(err)
          })
        })
        .catch(err => {
          console.log(err);
        })
      }
  }
</script>
<style scoped>
.total{
  background-color: #d3d3d3;
  height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-top: 5px;
}
</style>