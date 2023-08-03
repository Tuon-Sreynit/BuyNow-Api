<template>
  <div class="dashboard">
    <div>
      <v-container>
        <v-row>
          <h2 style="color: white">
            Dashboard
          </h2>
        </v-row>
        <v-row class="box_list">
         
            <v-col class="dashboard_list" md="3">
              <div class="list_1">
                <img class="icon" src="~/assets/img/film.png">
              </div>
              <div class="text">
                <h3>Categories</h3>
                <h5 class="mt-2">Total: {{countCategory()}}</h5>
              </div>
          </v-col>
        
      
             <v-col class="dashboard_list" md="3">
              <div class="list_2">
                <img class="icon" src="~/assets/img/subscription-model.png">
              </div>
              <div class="text">
                <h3>Products</h3>
                <h5 class="mt-2">Total: {{countProduct()}}</h5>
              </div>
          </v-col>
        
          
    
           <v-col class="dashboard_list" md="3">
            <div class="list_3">
              <img class="icon" src="~/assets/img/eye.png">
            </div>
            <div class="text">
              <h3> Users</h3>
              <h5 class="mt-2">Total: {{ countUsers() }}</h5>
            </div>
          </v-col>
    
         
        </v-row>
       
      </v-container>

      <div style="padding:12px; margin-top: 50px;">
          <v-data-table
              :headers="headers"
              :items="products"
              :items-per-page="5"
              :search="search"
              class="elevation-1"

            >
              <template v-slot:item.image="{ item }">
                <div class="pa-1">
                  <v-img :src="item.image" :alt="item.name" height="70px" width="70px" style="border-radius: 10px; "></v-img>
                </div>
              </template>
              <v-row>
                <v-col align="center" >
                  <template v-slot:header.id="{ header }">
                    {{ header.text }}
                  </template>
                </v-col>



              </v-row>

          </v-data-table>
      </div>

    </div>

  </div>

</template>

<script>
import axios from 'axios'
import HomeChart from '~/components/charts/HomeChart.vue'
 export default {
    components: {
      HomeChart,
    },

    created () {
      this.$nuxt.$on('get-total-sale', (total) => {
        this.totalSale = total
      })

      this.getCategoryData()
      this.getProductData()
      this.getUsersData()


    },
    
    data() {
      return {
        totalSale: '',
        mostViewed: [],
        totalView: '',
        totalMovies: '',
        totalPayment: '',
        categories: [],
        products: [],
        users: [],
        headers: [
          { text: 'Product Name ', value: 'name', class: "blue blue-darken-1 white--text" },
          { text: 'Product Price', value: 'price', class: "blue blue-darken-1 white--text" },
          { text: 'Description', value: 'description', class: "blue blue-darken-1 white--text" },
          { text: 'Product Image', value: 'image', class: "blue blue-darken-1 white--text" },
          { text: 'Category Of Product ', value: 'Category.name', class: "blue blue-darken-1 white--text" },
          // { text: 'Banner Category', value: 'Category.category_name', class: "blue blue-darken-1 white--text " ,  },
         ],
      }
    },

    middleware: [
    'auth'
  ],
    methods: {
      getCategoryData(){
      const axios = require('axios');
      let category=[]
            axios
                .get(`http://localhost:3001/api/category/`)
                .then((res) => {

                  this.categories= res.data
             
                })
                .catch((error) => {
                console.log(error.response)

                })

    },
    getProductData(){
      const axios = require('axios');
      let product=[]
            axios
                .get(`http://localhost:3001/api/product`)
                .then((res) => {

                  this.products= res.data
                  console.log(this.products);
             
                })
                .catch((error) => {
                console.log(error.response)

                })

    },

    getUsersData(){
          let config = {
                    headers: {
                    Authorization: `${this.$auth.strategy.token.get()}`,
                                
                    // Authorization: `Bearer ${this.$auth.strategy.token.get()}`,
                    },
                }
                
            axios
                .get(`http://localhost:3001/auth/users/all`,config)
                .then((res) => {

                  this.users= res.data.data.docs
                  console.log(this.users)

                })
                .catch((error) => {
                console.log(error.response)

                })
    }, 
        // getMostViewed() {
        //   axios({
        //     url: 'https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/analysis/mostviewed',
        //     method: 'get'
        //   }).then((res) => {
        //     console.log('most viewed', res.data.data)
        //     this.mostViewed = res.data.data.movies
        //     this.totalView = res.data.data.totalViews
        //     this.totalMovies = res.data.data.totalMovies
        //   })
        // },
        countCategory(){
          return this.categories.length;
        },
        countProduct(){
          return this.products.length;
        },
        countUsers(){
          return this.users.length;
        },

        // getPaymentAnalysis() {
          
        //   axios({
        //     url: 'https://sabay-entertainment-movie-api-1308.onrender.com/api/payment/analysis/payment',
        //     method: 'get'
        //   }).then((res) => {
        //     console.log('total payment', res.data.data)
        //     this.totalPayment = res.data.data
        //   })
        // }
    
      }
    }

    

</script>
<style scoped>
.dashboard{
  color: white;
  margin-left: 50px;
  margin-right: 50px;
}
.dashboard_list{
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.89);
  height: 80px;
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  
}
.box_list{
  display: flex;
  justify-content: space-between;
}
.list_1{
  border-radius: 10px;
  width: 60px;
  height:60px;
  background-color: #97cff2;
  padding: 10px;

}
.list_2{
  border-radius: 10px;
  width: 60px;
  height:60px;
  background-color: #9f02ff;
  padding: 10px;
}
.list_3{
  border-radius: 10px;
  width: 60px;
  height:60px;
  background-color: #ff02b8;
  padding: 10px;
}
.icon{
  height: 40px;
  width: 40px;
}
.text{
  text-align: end;
 
}
p,h5{
  color: #736f6f;
}
h2 ,h3{
  color:#034c7c;
}
.card{
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.89);
  margin-top: 50px;
  padding: 20px;
}
.most_viwed{
  display: flex;
  gap: 20px;
}
.movie_poster{
  border-radius: 10px;
  height:50px;
  width: 50px;
}
</style>
