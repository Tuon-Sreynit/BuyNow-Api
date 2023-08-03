<template>
    <div class="detail"> 
    
             <div class="thumb-example">
            <!-- swiper1 -->
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            
                <swiper-slide ><img class="img" :src="p_item.image"> </swiper-slide>
                <swiper-slide ><img  class="img" :src="p_item.image"> </swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
           
                <swiper-slide class="slide"><img class="img_thumnail" :src="p_item.image"> </swiper-slide>
                <swiper-slide class="slide"><img class="img_thumnail" :src="p_item.image"> </swiper-slide>
            </swiper>
             </div>
       <div>
        <div>
             <v-row>
                    <v-col align="center" md="5" class="cols-12 mt-5">
                        <img class="img_demo" :src="p_item.image"></img>
                    </v-col>
                    <v-col  align="start" md="6" class="py-15 cols-12 ">
                        <h2>{{p_item.name}}</h2>
                        <v-divider></v-divider>
                        <div class="detail_product">
                            <div><h3>Price:</h3></div>
                            <div><h3 style="color: red; font-weight: bold">{{p_item.price}} $</h3> </div>
                        </div>
                        <div class="detail_product">
                            <div><h3>Description:</h3></div>
                            <div><h3 style=" font-weight: bold">{{p_item.description }}</h3> </div>
                        </div>
                       
                        <div class="detail_product pt-5">
                            <div><v-btn color="blue"> <h4 style="color:white; font-weight:bold">ADD TO CART </h4></v-btn></div>
                            <div><v-btn  color="red"><h4 style="color:white; font-weight:bold">CHECK OUT </h4></v-btn> </div>
                        </div>
                    </v-col>   
              </v-row> 
              <v-divider></v-divider>
             
          
                <v-container> 
                     <h2 style="margin-top: 15px">Other Products</h2>
                     <div class="mt-5">
                        <v-row>
                          <v-col  v-for="r_item in r_items.slice(0,4) " :key="r_item.id" cols="12" sm="3" v-show="r_items.id!=$route.params.id">
                            <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                              <nuxt-link style="text-decoration: none" :to="'/product/'+r_item._id">
                              <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" :src="r_item.image"></center>
                              
                              <div class="box1">
                                  
                                <h5> {{r_item.name}}</h5>
                                    <h4>  {{r_item.price}} $</h4>
                              </div>
                            </nuxt-link>
                            </v-card>
                          </v-col>

                          </v-row>
                       </div>
                </v-container>
           </div>  
        </div> 
 </div>
</template>
  
  <script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
  
    export default {
      name: 'swiper-example-thumbs-gallery',
      title: 'Thumbs gallery with Two-way control',
      components: {
        Swiper,
        SwiperSlide
      },
      data() {
        return {
          p_item:[],
          r_items:[],
          swiperOptionTop: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
          swiperOptionThumbs: {
            loop: true,
            loopedSlides: 5, // looped slides should be the same
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true
          }, 
        }
      },
      mounted() {
        this.$nextTick(() => {
          const swiperTop = this.$refs.swiperTop.$swiper
          const swiperThumbs = this.$refs.swiperThumbs.$swiper
          swiperTop.controller.control = swiperThumbs
          swiperThumbs.controller.control = swiperTop
        })
      },
      created(){
        this.getProductbyID()
      }, methods:{
        async getProductbyID(){
          var axios = require('axios')
          var config = {
      method: 'get',
      url: `http://localhost:3001/api/product/${this.$route.params.id}`,
      range:'0-3'
      }
      var data = await axios(config);
      this.p_item= data.data
      this.relatedProduct()
     
   },  
   relatedProduct(){
   
    var config = {
        method: 'get',
        url: 'http://localhost:3001/api/product',
      
      }
      this.$axios(config)
        .then((response) => {
          console.log(response.data)
          
          this.r_items = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
   }
     }

}
  </script>
  
  <style  scoped>
    .detail{
        margin-top: 140px;
    }
    .thumb-example {
      background-color: black;
    }
       .img_thumnail{
        height:200px;
        width: 100%;
       } 
       .img{
        height: 560px;
        width: 100%;
       }
       .slide{
        height: 300px;
        width: 100%;
        padding:5px;
       }
       .img_demo{
        height: 400px;
        width:55%;
       }
       .detail_product{
        display:flex;
        gap: 40px;
        
       }
       .box1{
        display: flex;
        justify-content: space-between;
      }
       .gallery-top {
          height: 80%;
          width: 100%;
        }
        .gallery-thumbs {
          height: 20%;
          box-sizing: border-box;
        
        }
        .gallery-thumbs .swiper-slide {
          width: 25%;
          height: 100%;
          opacity: 0.4;
        }
        .gallery-thumbs .swiper-slide-active {
          opacity: 1;
        }
        h4{
            color:  #063999 ;
            font-weight: bold;
          }
          
          h6{
            color: green;
          
          }
  
  </style>