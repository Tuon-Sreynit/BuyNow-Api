<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 style="color: white; margin-left: 12px">
                    Manage Movie Category
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
                        <v-dialog v-model="dialog" persistent max-width="700px" max-height="400px">
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
                                <v-card-title style="background-color:#034C7C">
                              <span class="text-h5 white--text">Add Category</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>
                                    <v-text-field
                                      v-model="category_name"
                                      label="Category Name"
                                      required
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
                              <v-btn    :loading="isLoading"
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
          :items="category"
          :items-per-page="10"
          :search="search"
          class="elevation-1"

        >

        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
            <v-col align="center"> 
                <v-row>
                  <editComponent  :id="item._id"/> 
                  <deleteComponent  :id="item._id"/>
                </v-row>
             
            </v-col>
           
               
                <!-- <v-btn icon
                    v-bind="attrs"
                    v-on="on">
                  <v-icon color="red">
                    mdi-delete
                  </v-icon>
                </v-btn> -->
            </v-row>
          </div>
        </template>

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
import editComponent from '~/components/movie_category/editComponent.vue'
import deleteComponent from '~/components/movie_category/deleteComponent.vue'
 export default {
  components: { editComponent,deleteComponent
  },


    data() {
      return {
        search: '',
        category_name:'',
        category:[],
        isLoading: false,
        status: '',
        message: '',
         headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: '_id',
            class: "ml-5 green green-darken-1 white--text",

          },
          // { text: 'Vendor Shop', value: 'vendor_shop', class: "green green-darken-1 white--text", },
          // { text: 'Address', value: 'address', class: "green green-darken-1 white--text" },
          // { text: 'Email Address', value: 'email', class: "green green-darken-1 white--text" },
          // { text: 'Movie Category Name ', value: 'movie', class: "green green-darken-1 white--text" },
          { text: 'Category Name', value: 'Category_name', class: "green green-darken-1 white--text " ,  },
          { text: 'Action',   align: 'start' ,value: 'action', class: " green green-darken-1 white--text" },],
        dialog: false,
        rules: [
          (value) =>
            !value ||
            value.size < 2000000 ||
            'Image size should be less than 2 MB!',
        ],
      }
    },
  watch: {
    dialog(status) {
      if (status == false) {
        this.status = ''
        this.message = ''
        this.category_name=''
      }else {
        this.$axios
          .get('http://localhost:3001/category/')
          .then((res) => (this.categories = res.data))
      }
    },
  },
      created() {
      this.getCategoryData();
    },
    middleware: [
      'auth'
    ],

    methods: {
    getCategoryData(){
      const axios = require('axios');
      let category=[]
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/category/`)
                .then((res) => {

                  this.category= res.data
             
                })
                .catch((error) => {
                console.log(error.response)

                })

    },
    async save() {
      this.isLoading = true

 

      try {
   
        let data = {
        Category_name : this.category_name
    
      }

        await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/category/add',data)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        location.replace('/movie_category')
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
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
