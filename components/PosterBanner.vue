<template>
    <div class="margin-top:250px">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide> <v-img class="size" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></v-img></swiper-slide>
                    <swiper-slide><v-img class="size" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></v-img></swiper-slide>
                    <swiper-slide><v-img class="size" src="https://images.unsplash.com/photo-1524289286702-f07229da36f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></v-img></swiper-slide>
                    <swiper-slide><v-img class="size" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"></v-img></swiper-slide>
                  <div class="swiper-scrollbar" slot="scrollbar"></div>
                </swiper>
            </swiper-slide>
           
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
    </div>
</template>
<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-scrollbar',
    title: 'Scrollbar',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        }
      }
    }
  }

</script>
<style scoped>
.size{
    height: 550px;
    width: 100%;
    
}
</style>
