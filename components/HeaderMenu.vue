<template>
   <div   id="box1" class="header">
    <v-row style="padding: 0">
      <v-col class="mt-3 col-3" align="center"  md="3"  >
            <img class="size" src="~/assets/img/logo1.png"></img>
        </v-col>
        <v-col  class=" col-9" md="6" justify="center"> 
             <div class="container" >
                  <div class="search-bar" id="dropdown-example-1">
                      <div id="select" >
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn text width="130px" v-bind="attrs" v-on="on" >
                              <div style="display: flex; justify-content: center">
                                  <div style="margin-top: 20px"><h4>Categories</h4></div> 
                                  <div><img src="~/assets/img/arrow.png"></img></div> 
                              </div>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item  v-for="cate in cates" :key="cate.id">
                              <v-list-item-title to="`/category/${cate.id}`"> {{ cate.name }}</v-list-item-title>
                             
                            </v-list-item>


                          </v-list>
                        </v-menu>
                        <!-- <v-overflow-btn    class="my-2" :items="dropdown_font"   label="Overflow Btn - filled" filled target="#dropdown-example-1"></v-overflow-btn> -->

                      </div>
                      <input @keypress.enter="searchProduct()"  v-model="search"  type="text" class="input" placeholder="Search">
                      <i class="fas fa-search"></i>
                 </div>
            </div>
        </v-col>
        <v-col class="page_right d-none d-md-block mt-8" align="center" md="3"  >
           <div class="right_header">
              <div v-if="!$auth.user">  
                <v-btn to="/login" icon text><v-icon class="icon white--text">mdi-account-circle-outline</v-icon></v-btn>
              </div>
              <div v-if="$auth.user">
                <h3 align="center" style="color: white;"> {{$auth.user.data.firstname}}</h3>
              </div>
            
              <div>
                <v-sheet  style="background-color: transparent; position:relative;"  >
                  <v-container >
                    <v-row >
                     <v-btn  icon @click.stop="drawer = !drawer" text >
                       <v-badge right color="green">
                        <span slot = "badge" >5</span>
                        <v-icon class="icon">  mdi-cart-outline</v-icon>
                     </v-badge>
                  </v-btn> 
                  </v-row>
                  </v-container> 
                  <v-navigation-drawer   right temporary style="position:fixed; top:0;height:100vh;width: 550px " v-model="drawer"    >
                  <v-list-item style="margin-top: 20px;margin-left: 20px; margin-right: 20px">
            
                       <h3 style="font-size: 1.2em;font-weight: 200;">Your added item is</h3>
                  </v-list-item>
                  <v-list-item style="margin-top: 30px;" >
                      <v-row justify="start">
                        <v-col align="start" md="4" class="pa-4">
                          <img height="150px" width="70%" src="http://cdn.shopify.com/s/files/1/0011/9783/4252/products/20_375a8763-f5d7-4184-a352-4523ef713733.jpg?v=1576267132"></img>
                        </v-col>
                        <v-col align="start"  md="8">
                            <h2 style="text-transform: uppercase;font-weight: 300;color: black">Dress</h2>
                            <h3>Quantity : <span style="color: red"> 1</span></h3>
                            <h2 style="text-transform: uppercase;font-weight: 300;color: black">$ 12</h2>
                            <v-row class="mt-1">
                              <v-col><v-btn icon><v-icon>mdi-plus</v-icon></v-btn></v-col>
                              <v-col><v-btn icon><v-icon>mdi-minus</v-icon></v-btn></v-col>
                              <v-col><v-btn icon><v-icon>mdi-delete</v-icon></v-btn></v-col>
                            </v-row>
                        </v-col>
                      </v-row>
                  </v-list-item>
                  <footer  >
                    <v-card-actions style="position: absolute;bottom:0;left:0">
                      <h2 style="text-transform: uppercase;font-weight:900; color: black">Total: <span style="color: red; font-weight: 900">$ 12.00</span></h2>
                      </v-card-actions>
                    <v-card-actions style="position: absolute;bottom:0;right:0">
                     
                        <v-btn to="/checkout" text style="background-color: blue; font-weight: bold; color: white">
                         CHECK OUT
                        </v-btn>
                      </v-card-actions>
                     </footer> 
                    </v-navigation-drawer> 
                  </v-sheet>  
              </div>
           </div>
        </v-col>
    </v-row>
     <v-row class="d-none d-md-flex" style="height: 55px;  background-color: white !important;margin-top:-20px">
              <PageMenu />  
    </v-row >
  
   </div>
</template>
<script>
import PageMenu from "~/components/PageMenu.vue"
import PhoneNavbar from "~/components/PhoneNavbar.vue"
  export default {
    components:{
    PageMenu,
    PhoneNavbar
   },
      data () {
        return {
          serch: '',
          cates: [],
          drawer: false, 
          dialog: false,
          justify: [
          'start',
        ],
        dropdown_font: ['All Categories', 'Clothes', 'Cosmetic', 'Electronics', 'Furniture'],
          
          
        }
      },
      created(){
    this.getCate()
    },
    methods:{
      searchProduct()
        {
          this.$router.push(`/product?search=${this.search}`)
        },
    getCate(){
    const axios = require('axios');
        axios
            .get(`http://localhost:3001/api/category`)
            .then((res) => {

                this.cates= res.data
                // console.log(this.cates)

            })
            .catch((error) => {
            console.log(error.response)

            })
    }
  }
}   

</script>
<style scoped>
.header{
    width: 100%;
    position: fixed;
    z-index: 100;
    top:0;
    background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
   
}


h2{
    font-size: 1.2em;
    /*color: rebeccapurple ;*/ 
    color: white;
    font-weight: bold;
}
.size{
    height: 80px;

}
.right_header{
    display: flex;
    justify-content: center;
}
.icon{
  height: 100px;
  width: 100%;
}
.container{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.search-bar{
  background-color:white;
  width: 100%;
  max-width: 500px;
  display:flex;
  padding: 2px;
  border-radius: 4px;
  height: 45px;
  margin-top: 10px;
}
#select{
  background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
  display: flex;
  align-items:center;
  justify-content: space-between;
  color:white;
  /*padding: 15px 15px ;*/
  cursor: pointer;
  
 
  position: relative;

}
#select ul{
  position: absolute;
  top: 120%;
  left: 0;
  list-style:none;
  background-color: white;
  color: #555;
  width: 100%;
  border-radius: 4px;
  z-index: 100;
  max-height: 0;
  overflow:hidden;
  transition: max-height 0.5s;

}
#select img{
  width: 50px;
 
}

.search-bar input{
  padding: 10px 25px;
  width: 100%;
  border:none;
  outline: none;
  font-size: 18px;
}
input::placeholder{
  font-size: 14px;
}
h4{
  font-size: 12px;
  margin-left: 23px;
}

</style>