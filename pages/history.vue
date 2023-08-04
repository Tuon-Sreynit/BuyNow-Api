<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 class="ml-3" style="color: white">
                    Manage History
                  </h2>
                  </v-row>
                  <v-row>
                  
                    <v-col align="end" style="margin-top: 18px; margin-right: 12px">
                      <v-row justify="end">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                          <form @submit.prevent="save" >
                                <v-card>
                            <v-card-title  class="green green-darken-1 white--text">
                              <span class="text-h5 white--text">Add </span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>
                                    <v-text-field
                                      label="Package Name" 
                                      v-model="name"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                  <v-col>
                                      <v-text-field
                                        label="Price ($)"
                                        v-model="price" 
                                        required
                                      ></v-text-field>
                                    </v-col>
                                    <v-col>
                                      <v-text-field
                                        label="Duration (Days)"
                                        v-model="day" 
                                        required
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                               
                                    <v-col>
                                      <v-text-field
                                          label="Description"
                                          required
                                          outlined
                                          clearable
                                          v-model="description"

                                        ></v-text-field>
                                  
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
                              <v-btn  :loading="isLoading"
                              :disabled="isLoading"
                              type="submit" color="blue darken-1" text >
                                ADD
                              </v-btn>
                            </v-card-actions>
                            <div align="center" class="red--text font-weight-bold" v-if="status == 'ERROR'">
                              {{ message }}
                            </div>
                            <div align="center" class="green--text font-weight-bold" v-else>
                              {{ message }}
                            </div>
                          </v-card>
                          </form>
                      
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
        <template v-slot:item.image="{ item }">
          <div class="p-4">
            <v-img :src="item.image" :alt="item.name" height="70px" width="70px" style="border-radius: 10px; "></v-img>
          </div>
        </template>
        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
                <editComponent :id="item._id" />
                
                <deleteComponent  :id="item._id" />
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
             </v-container>
        </div>
    </div>
</template>
<script>
import editComponent from '~/components/history/editComponent.vue'
import deleteComponent from '~/components/history/deleteComponent.vue'
export default {
  components:{
   editComponent, deleteComponent
  },

    data() {
      return {
         search:'',
         name:'',
         price:'',
         carts:[],
         cates:[],
         quantity: '',
         description:'',
         total: '80.80',
         isLoading: false,
        status: '',
        message: '',
         headers: [
          // {
          //   text: 'ID',
          //   align: 'start',
          //   sortable: false,
          //   value: 'id',
          //   class: "green green-darken-1 white--text",
          // },
          { text: 'User name', value: 'user.name', class: "blue blue-darken-1 white--text" },
          { text: 'Product name', value: 'product.name', class: "blue blue-darken-1 white--text" },
          { text: 'Price', value: 'price', class: "blue blue-darken-1 white--text " ,  },
          { text: 'quantity', value: 'quntity', class: "blue blue-darken-1 white--text " ,  },
          { text: 'Description', value: 'product.description', class: "blue blue-darken-1 white--text " ,  },
          
          { text: 'Total', value: 'total', class: "blue blue-darken-1 white--text " ,  },

        ],
      
        products: [],
  
        dialog: false,
        rules: [
          (value) =>
            !value ||
            value.size < 2000000 ||
            'Image size should be less than 2 MB!',
        ],
      }
    }, middleware: [
    'auth'
  ],

  created(){
    this.getCate()
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
    methods:{
        searchProduct()
          {
            this.$router.push(`/product?search=${this.search}`)
          },
      getCate(){
      const axios = require('axios');
        axios
          .get(`https://buynow-api.onrender.com/api/category`)
          .then((res) => {

              this.cates= res.data
              // console.log(this.cates)

          })
          .catch((error) => {
          console.log(error.response)

          })
      },
       
    }
}
</script>

<style scoped>
.dashboard{
    color: white;
    margin-left: 50px;
    margin-right: 50px;
  }
</style>