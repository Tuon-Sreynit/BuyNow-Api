<template>
  <div  style="margin-left: 100px; margin-right: 100px">
    <v-row>
        <v-col align="center">
      <h1 style="color: #0acffe; margin-top: 10px">Our Popuplar Products</h1> 
  </v-col>
    </v-row>
    <v-row >
      <v-col  > 
        <v-card class="box" style="padding: 20px;"   >
            <div class="title">
              <div> <h3 >Popular Clothes</h3> </div>
              <!-- <div><v-btn text class="white--text "> View All <v-icon  >mdi-chevron-right-circle </v-icon></v-btn></div> -->
            </div>
           
            <div style="margin-top: 20px" >
                <swiper class="swiper" :options="swiperOption" >
                  <swiper-slide v-for="cloth in cloths" :key="cloth.id">
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" :to="'/product/'+cloth._id">
                          <center>
                             <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" :src="cloth.image">
                         </center>
                      
                          <!-- <h5>Fleece Hoodie</h5>
                          <h4>$ 15</h4> -->
                          <div class="box1">
                              <div > <h5>{{cloth.name}}</h5></div>
                              <div>
                                <h4>$ {{cloth.price}}</h4>
                              </div>
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <!-- <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://media.kohlsimg.com/is/image/kohls/4489182?wid=96&hei=96&op_sharpen=1">
                         </center>
                      
                          <h5>Toddler Girl Nike </h5>
                          <h4>$ 15</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://i.etsystatic.com/29515757/r/il/801064/3628949674/il_1588xN.3628949674_ccr5.jpg">
                         </center>
                      
                          <h5>White Shirt </h5>
                          <h4>$ 10</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide> 
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://i.etsystatic.com/29515757/r/il/5bc5f1/4099914116/il_1588xN.4099914116_ro12.jpg">
                         </center>
                      
                          <h5>Floral Blouse</h5>
                          <h4>$ 15</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide> -->
                    <!-- <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://zandokh.com/image/cache/catalog/products/2023-01/1222212136/Contrast-Print-T-shirt%20(2)-cr-450x672.jpg">
                         </center>
                      
                          <h5>T-shirt With Print</h5>
                          <h4>$ 11.03</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide> -->
                    
                  </swiper>
            </div>
          
        </v-card>
      </v-col>
    </v-row>
    <v-row >
        <v-col  > 
        <v-card  style="padding: 20px;"   >
          <div class="title">
            <div> <h3 style="color: #0acffe">Popular Electronic Devices</h3> </div>
            <!-- <div><v-btn text style="color: #0acffe"> View All <v-icon  style="color: #0acffe">mdi-chevron-right-circle </v-icon></v-btn></div> -->
          </div>
            <div style="margin-top: 20px" >
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="elec in elecs" :key="elec.id">
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" :to="'/product/'+elec._id">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" :src="elec.image">
                         </center>
                      
                         <div class="box1">
                              <div > <h5>{{elec.name}}</h5></div>
                              <div>
                                <h4>$ {{elec.price}}</h4>
                              </div>
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <!-- <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v9151007020920676706/products/61939.main.01.png&height=100&width=100&outputFormat=JPEG">
                         </center>
                      
                          <h5>Tangee Blush Compact</h5>
                          <h4>$ 15.95</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://www.thaiwholesaler.com/wp-content/uploads/2022/08/4126784ba847d792981065d73f2ac4ab-247x296.jpg">
                         </center>
                      
                          <h5>Kumiko Collagen</h5>
                          <h4>$ 15</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://d3i908zd4kzakt.cloudfront.net/data/item/1549946106/thumb-HLSS01SR7JuQ656Y7IKs7KeE_405x405.jpg">
                         </center>
                      
                          <h5>Jumiso Serum 30ml</h5>
                          <h4>$ 12</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://d3i908zd4kzakt.cloudfront.net/data/item/1647583506/thumb-7Yag7L2U67O07JWE66eI7KG0_405x405.jpg">
                         </center>
                      
                          <h5> Blue matte sunstick</h5>
                          <h4>$ 9.99</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v1296983193304632982/products/36190.main.png&height=100&width=100&outputFormat=JPEG">
                         </center>
                      
                          <h5>Nail Cream</h5>
                          <h4>$ 14.95</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide> -->
                    
                  </swiper>
            </div>
          
        </v-card>
      </v-col>
    </v-row>
    <v-row >
      <v-col  > 
        <v-card class="box" style="padding: 20px;"   >
            <div class="title">
              <div> <h3 >Popular Costmetic Product </h3> </div>
              <!-- <div><v-btn text class="white--text "> View All <v-icon  >mdi-chevron-right-circle </v-icon></v-btn></div> -->
            </div>
            
            <div style="margin-top: 20px" >
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="cost in costs" :key="cost.id">
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" :to="'/product/'+cost._id">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" :src="cost.image">
                         </center>
                      
                         <div class="box1">
                              <div > <h5>{{cost.name}}</h5></div>
                              <div>
                                <h4>$ {{cost.price}}</h4>
                              </div>
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <!-- <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/Huawei/Huawei-Mate-50-Pro/2-orange-1667985579vELZu.jpg">
                         </center>
                      
                          <h5>Huawei Mate 50 Pro</h5>
                          <h4>$ 999</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://res.cloudinary.com/lautsprecher-teufel/image/upload/c_lfill,f_auto,q_auto,w_800/v1/products/AIRY_True_Wireless/airy-tws-main-black-1300x1300x72.jpg">
                         </center>
                      
                          <h5>AIRY TRUE WIRELESS</h5>
                          <h4>$ 45</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/Accessories/Apple/Connector/USB-C-to-3-5-mm-Headphone-Jack-Adapter/untitled-1-16560015150K0ya.png">
                         </center>
                      
                          <h5>USB-C to Headphone Jack Adapter</h5>
                          <h4>$ 15</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/Accessories/Xiaomi/Mi-AIoT-Router-AC2350/untitled-2-1644290122Bh416.png">
                         </center>
                      
                          <h5>Mi AIoT Router AC2350</h5>
                          <h4>$ 55</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card>
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/Huawei/Huawei-nova-Y61/1huawei-nova-y61-blue-1667981261J0ZpP.jpg">
                         </center>
                      
                          <h5>Huawei nova Y61</h5>
                          <h4>$ 149</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                    </swiper-slide>  -->
                  </swiper>
            </div>
        </v-card>
      </v-col>
    </v-row>
     <v-row >
        <v-col  > 
        <v-card  style="padding: 20px;"   >
          <div class="title">
            <div> <h3 style="color: #0acffe">Popular Furniture</h3> </div>
            <!-- <div><v-btn text style="color: #0acffe"> View All <v-icon  style="color: #0acffe">mdi-chevron-right-circle </v-icon></v-btn></div> -->
          </div>
           
            <div style="margin-top: 20px" >
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="furn in furns" :key="furn.id">
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" :to="'/product/'+furn._id">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                        height="200px" width="100%" :src="furn.image" >
                         </center>
                      
                         <div class="box1">
                              <div > <h5>{{furn.name}}</h5></div>
                              <div>
                                <h4>$ {{furn.price}}</h4>
                              </div>
                         </div>

                     </nuxt-link>
                      </v-card> 
                    </swiper-slide>

                    <!-- <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%"
                         src="https://image.made-in-china.com/2f1j00QKRVfgWGOsbv/Electric-Dual-Motor-Office-Desk-Height-Adjustable-Standing-Computer-Stand-up-Table-Adjustable.jpg">
                         </center>
                      
                          <h5> Adjustable Table</h5>
                          <h4>$ 90</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" 
                        src="https://cdn.shopify.com/s/files/1/0526/2088/6193/products/H8e2583d472f84aa0850b210824f06cf56_800x.png?v=1660252784">
                         </center>
                      
                          <h5>MODERN STACKABLE CHAIR</h5>
                          <h4>$ 55</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://cdn.shopify.com/s/files/1/0526/2088/6193/products/H26f356048fd6490d88b35c0ed63de2760_700x.jpg?v=1660252662">
                         </center>
                      
                          <h5>NORDIC LOUNGE CHAIR</h5>
                          <h4>$ 65</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://s.alicdn.com/@sc04/kf/Hcd99db962a1540d3a7f01abd9f8c2fbfJ.jpg_100x100xz.jpg">
                         </center>
                      
                          <h5>Luxury Outdoor Sofa</h5>
                          <h4>$ 278</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                        
                    </swiper-slide>
                    <swiper-slide>
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" to="/product/1">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://s.alicdn.com/@sc04/kf/He1a027c1e763402a8c1db1de9fba9ed98.jpg_100x100xz.jpg">
                         </center>
                      
                          <h5>Kainice Soft Sofa </h5>
                          <h4>$ 2.65</h4>
                          <div class="box1">
                              <div > <h6>IN STOCK</h6></div>
                              <div><v-btn icon color="pink"  style="margin-top: -15px">
                                  <v-icon dark small>mdi-cart</v-icon>
                                </v-btn></div>
                         
                         </div>
                     </nuxt-link>
                      </v-card> 
                        
                    </swiper-slide> -->
                    
                  </swiper>
            </div> 
        </v-card>
      </v-col>
    </v-row>
    <v-row >
        <v-col  > 
        <v-card class="box" style="padding: 20px;"   >
          <div class="title">
            <div> <h3>Popular Books</h3> </div>
            <!-- <div><v-btn text style="color: #0acffe"> View All <v-icon  style="color: #0acffe">mdi-chevron-right-circle </v-icon></v-btn></div> -->
          </div>
           
            <div style="margin-top: 20px" >
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="book in books" :key="book.id">
                      <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                        <nuxt-link style="text-decoration:none" :to="'/product/'+book._id">
                          <center>
                        <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                        height="200px" width="100%" :src="book.image" >
                         </center>
                      
                         <div class="box1">
                              <div > <h5>{{book.name}}</h5></div>
                              <div>
                                <h4>$ {{book.price}}</h4>
                              </div>
                         </div>

                     </nuxt-link>
                      </v-card> 
                    </swiper-slide>

                  </swiper>
            </div> 
        </v-card>
      </v-col>
    </v-row>
    <br/>
</div>
    
    </template>
    <script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-multiple-slides-per-biew',
    title: 'Multiple slides per view',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        cloths:[],
        elecs:[],
        furns:[],
        costs:[],
        books:[],
        swiperOption: {
       
            loop: true,  breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 60
            },
            1012: {
              slidesPerView: 5,
              spaceBetween: 50
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 5
            }
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }, 
     
      }
    },
    created() {
        this.getClothedata()
        this.getElecsdata()
        this.getCostsdata()
        this.getFurnsdata()
        this.getBooksdata()
      },
      methods:{
      getClothedata(){
          var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca1fd77aa3c47a778b69e3`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.cloths = response.data
          console.log(this.cloths )
        })
        .catch(function (error) {
          console.log(error)
        })
       },
       getElecsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64c8ed053e311fd1c7ffde88`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.elecs = response.data
          console.log(this.elecs)
        })
        .catch(function (error) {
          console.log(error)
        })

      },
      getCostsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64c8e9d6101025eb6e779f94`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.costs = response.data
          console.log(this.costs)
        })
        .catch(function (error) {
          console.log(error)
        })

      },
      getFurnsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca20567aa3c47a778b69ff`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.furns = response.data
          console.log(this.furns)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getBooksdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca901df2a12d6bee4c3389`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.books = response.data
          console.log(this.books)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
      }
  }
 </script>
    <style scoped>
    .box {
      background-color: #8BC6EC;
      background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
      
         
    }
    .title{
      display: flex;
      justify-content: space-between;
    }
    h3{
        color:  white ;
        font-weight: bold;
    }
    h4{
        color:  #063999 ;
        font-weight: bold;
    }

    h6{
        color: green;

    }
    .box1{
        display: flex;
        justify-content: space-between;
    }
    img{ height: 180px; width: 90%}
    </style>
    