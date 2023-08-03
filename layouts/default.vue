<template>

  <v-app style="background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);">
<!-- #000428,#1D4350, #004e92 --> 
<HeaderMenu />  
 
<!-- background-color: #7f5a83;
background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%); background-color: white -->
        <Nuxt  style=" position: relative; background-color: #E0E0E0; z-index: 2;margin-bottom: 230px;
        box-shadow: 10px 10px 5px #0004;" />

 <PhoneNavbar  class="phone_nav d-md-none"/>  
<FooterPage />
   
</v-app>
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu.vue';
import FooterPage from '~/components/FooterPage.vue';
import PhoneNavbar from '~/components/PhoneNavbar.vue';
export default {
  head: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
      },
    ]
  },
  name: 'DefaultLayout',
  data() {
    return {
      
    }
  },
  components:{ 
    HeaderMenu,
    FooterPage, 
    PhoneNavbar
  }
}
</script>
<style>
*{
  font-family: "Lato";
  ;
}
.phone_nav{
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%
}
</style>
