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
              <v-card>
                <v-row justify="start">
                  <v-col align="center" md="4" class="pa-4">
                    <img height="100px" width="70%" src="http://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132"></img>
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
                 <div class="total">
                    <h3 >Total: <span style="color: red"> 7.80 </span>$</h3>
                 </div>
              </v-card>
            </v-col>
         </v-row>
         <v-row>
            
        </v-row>

    </div>
    
   </v-container>
</div>
</template>
<script>
 

export default {
    data () {
      return {
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