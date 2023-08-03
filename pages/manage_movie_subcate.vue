<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 style="color: white; margin-left: 12px">
                    Manage Movie Subcategory
                  </h2>
                  </v-row>
                  <v-row>
                    <v-col  align="start ">
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        dense
                        filled
                        outlined
                        solo
                       
                      ></v-text-field>
                    </v-col>
                    <v-col align="end" style="margin-top: 18px; margin-right: 12px">
                      <v-row justify="end">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              style="
                                background-image: linear-gradient(  to top,#48c6ef 0%,   #6f86d6 100%  );
                                color: whitesmoke !important;
                                margin-left: 40px;
                              "
                            >
                              <h3>ADD</h3>
                            </v-btn>
                          </template>
                          <v-card>
                             <form @submit.prevent="save" >
                               <v-card-title class= "green green-darken-1 white--text ">
                              <span class="text-h5 white--text">Add Subcategory</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>
                                    <v-text-field
                                      label="Subcategory Name" 
                                      required
                                      v-model="subcate"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col>
                                    <v-select
                                      :items="cates" 
                                      v-model="cate"
                                      item-text="Category_name"
                                      item-value="_id"
                                      label="Select Category"
                                      required
                                    ></v-select>
                                    </v-col>
                                  </v-row>
                                
                              </v-container>
                              <!-- <small>*indicates required field</small> -->
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="dialog = false">
                                Cancel
                              </v-btn>
                              <v-btn   :loading="isLoading"
                              :disabled="isLoading" type="submit"  color="blue darken-1" text >
                                ADD
                              </v-btn>
                            </v-card-actions>
                            </form>
                             <div align="center" class="red--text font-weight-bold" v-if="status == 'ERROR'">
                                  {{ message }}
                                   </div>
                                  <div align="center" class="green--text font-weight-bold" v-else>
                                  {{ message }}
                                   </div>
                           
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>

                  </v-row>
             </v-container>
        </div>
        <div style="padding:12px">
          <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
       
        >
       
        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
              
                <editComponent :id="item._id" :cates="cates"/>
             
                <deleteComponent :id="item._id"/>
            </v-row>
          </div>
        </template>
        <v-row>
          <v-col align="center" >
            <template v-slot:header.id="{ header }">
         {{ header.text }}
         </template>
         </v-col>
       
         <v-col align="end">  
           <template v-slot:item.status="{ item }">
           <v-chip
             :color="getColor(item.status)"
             dark
           >
             {{ item.status }}
           </v-chip>
         </template>
       </v-col>
       
        </v-row>
       
      </v-data-table>
        </div>
    </div>
</template>
<script>
import editComponent from '~/components/movie_subcategory/editComponent.vue'
import deleteComponent from '~/components/movie_subcategory/deleteComponent.vue'
 export default {
  components: { editComponent, deleteComponent },
    data() {
      return {
        subcate:'', 
        cate:'',
        isLoading: false,
        status: '',
        message: '',
        search: '',
         headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: '_id',
            class: "green green-darken-1 white--text",
           
          },
          // { text: 'Vendor Shop', value: 'vendor_shop', class: "green green-darken-1 white--text", },
          // { text: 'Address', value: 'address', class: "green green-darken-1 white--text" },
          // { text: 'Email Address', value: 'email', class: "green green-darken-1 white--text" },
          // { text: 'Movie Category Name ', value: 'movie', class: "green green-darken-1 white--text" },
         
          { text: 'Subcategory', value: 'Subcategory_name', class: "green green-darken-1 white--text " ,  },
          { text: 'Category', value: 'Category.Category_name', class: "green green-darken-1 white--text " , },
          { text: 'Action', value: 'action', class: "green green-darken-1 white--text" },],
       
        products: [],
        cates:[],
  
        dialog: false,
        rules: [
          (value) =>
            !value ||
            value.size < 2000000 ||
            'Image size should be less than 2 MB!',
        ],
      }
    },
     middleware: [
    'auth'
  ],
     created() {
      this.getSubCategoryData();
      this.getCategoryData()
  },
   
    methods: {
      async save() {
      this.isLoading = true

 

      try {
        console.log(this.cate)
        let data = {
        Subcategory_name: this.subcate,
        Category: this.cate
    
      }
   
        await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/add',data)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        this.getSubCategoryData()
       // location.replace('/manage_movie_subcate')
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
   
         getSubCategoryData(){
      const axios = require('axios');
  
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/`)
                .then((res) => {
               
                  this.products= res.data
                  console.log(this.products)
            
                })
                .catch((error) => {
                console.log(error.response)
              
      })
          
},
    getCategoryData(){
      const axios = require('axios');
  
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/category/`)
                .then((res) => {
               
                  this.cates= res.data
                  console.log(this.cates)
            
                })
                .catch((error) => {
                console.log(error.response)
                })
          
      }
      
     },
       
      




     }
  
</script>
<style scoped>
.dashboard{
    color: white;
    margin-left: 50px;
    margin-right: 50px;
}
</style>
