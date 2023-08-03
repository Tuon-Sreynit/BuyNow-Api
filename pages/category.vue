<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 style="color: white; margin-left: 12px">
                    Manage Category
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
                          <form @submit.prevent="save" >
                            
                             <v-card>
                            <v-card-title class="blue darken-1">
                              <span class="text-h5 white--text">Add Category</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>
                                    <v-text-field
                                      label="Category Name" 
                                      v-model="cate"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                 
                                  </v-row>
                                  <v-row>
                                      <v-col align="center">
                                        <v-file-input
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick an image"
                                        prepend-icon="mdi-camera"
                                        label="Image"
                                        v-model="file"
                                      ></v-file-input>

                                      <div v-if="file">
                                        <img width="200" :src="createImageUrl(file)" />
                                      </div>
                                      </v-col>
                                   </v-row>
                              </v-container>
                              <!-- <small>*indicates required field</small> -->
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="orange darken-1" text @click="dialog = false">
                                Cancel
                              </v-btn>
                              <v-btn   :loading="isLoading"
                              :disabled="isLoading" type="submit"  color="blue darken-1" text >
                                ADD
                              </v-btn>
                            </v-card-actions>
                            <div align="center" class="red--text font-weight-bold" v-if="status == 'ERROR'">
                              {{ message }}
                               </div>
                              <div align="center" class="blue--text font-weight-bold" v-else>
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
          :items="categories"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
       
        >
       
        <template v-slot:item.image="{ item }">
          <div class="pa-1">
            <v-img :src="item.image" :alt="item.name" height="70px" width="70px" style="border-radius: 10px; "></v-img>
          </div>
        </template>
        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
              <editComponent  :id="item._id"/>
              <deleteComponent  :id="item._id"/>
            </v-row>
          </div>
        </template>
        <v-row>
          <v-col align="center" >
            <template v-slot:header.id="{ header }">
         {{ header.text }}
         </template>
         </v-col>
         <v-col align="center"> 
           <template v-slot:header.category="{ header }">
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
import editComponent from "~/components/category/editComponent.vue"
import deleteComponent from "~/components/category/deleteComponent.vue"
export default {
  components:{
     editComponent,deleteComponent
  },
    data() {

      return {
         search:'',
         isLoading: false,
         status: '',
         message: '',
         cate:'',
         file:null,
          image_url:'',
         categories:[],
         headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: '_id',
            class: "blue blue-darken-1 white--text",
           
          },
       
          // { text: 'Vendor Shop', value: 'vendor_shop', class: "green green-darken-1 white--text", },
          // { text: 'Address', value: 'address', class: "green green-darken-1 white--text" },
          // { text: 'Email Address', value: 'email', class: "green green-darken-1 white--text" },
          // { text: 'Movie Category Name ', value: 'movie', class: "green green-darken-1 white--text" },
          { text: 'Category Name', value: 'name', class: "blue blue-darken-1 white--text " ,  },
          { text: 'Category Image', value: 'image', class: "blue blue-darken-1 white--text" },
          { text: 'Action', value: 'action', class: "blue blue-darken-1 white--text" },],
        // icons: [
        //   {
        //     icons: 'mdi-card',
        //   },
        // ],
        products: [
          // {
          //   id: 'ban-001',
           
          //   category: 'Home Page',
          // },
          // {
          //   id: 'ban-002',
          
          //   category: 'Recently Added',
          // },
        ],
  
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
  watch: {
    dialog(status) {
      if (status == false) {
        this.status = ''
        this.message = ''
        this.cate=''
      }else {
        this.$axios
          .get('http://localhost:3001/api/category/')
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
                .get(`http://localhost:3001/api/category/`)
                .then((res) => {

                  this.categories= res.data
             
                })
                .catch((error) => {
                console.log(error.response)

                })

    },
    
    async save() {
      this.isLoading = true

 

      try {
   
        if (this.file) {
            let formData = new FormData()
            formData.append('file', this.file)
            const res = await this.$axios.post('http://localhost:3001/upload-image', formData)
            this.image_url = res.data
        }
        let data = {
        name : this.cate,
        image: this.image_url.data
    
      }

        await this.$axios.post('http://localhost:3001/api/category/add',data)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        this.getCategoryData();
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    createImageUrl(file) {
      return URL.createObjectURL(file)
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
