<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 class="ml-3" style="color: white">
                    Manage Product
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
                        <v-dialog v-model="dialog" persistent max-width="800px">
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
                              <v-card-title  class="blue blue-darken-1 white--text">
                                <span class="text-h5 white--text">Add Product </span>
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col>
                                      <v-text-field
                                      label="Product Name"
                                      v-model="name"
                                      required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                          label="Product Price"
                                          v-model="price"
                                          required
                                        ></v-text-field>
                                      </v-col>
                                      <v-col>
                                        <v-select
                                          :items="cates"
                                          v-model="cate"
                                          item-text="name"
                                          item-value="_id"
                                          label="Product Category"
                                          required
                                        ></v-select>
                                      </v-col>
                                       <!-- <v-col>
                                        <v-select
                                          :items="movies"
                                          v-model="movie"
                                          item-text="title"
                                          item-value="_id"
                                          label="Movie"
                                          required
                                        ></v-select>
                                      </v-col> -->

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
                                      <!-- <v-text-field
                                          label="Description"
                                          required
                                        ></v-text-field> -->

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
                                <v-btn  :loading="isLoading"
                                :disabled="isLoading"
                                type="submit"   color="blue darken-1" text >
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
        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
                <editComponent  :id="item._id" :cates="cates"/>

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
             </v-container>
        </div>
    </div>
</template>
<script>
import editComponent from '~/components/product/editComponent.vue';
import deleteComponent from '~/components/product/deleteComponent.vue';
export default {
  components:{
    editComponent, deleteComponent
  },
    data() {
      return {
         search:'',
         name:'',
         cates:'',
         cate:'',
         price:'',
         description:' ',
         isLoading: false,
          status: '',
          message: '',
          file:null,
          image_url:'',

         headers: [
          // {
          //   text: 'ID',
          //   align: 'start',
          //   sortable: false,
          //   value: 'id',
          //   class: "blue blue-darken-1 white--text",

          // },
          // { text: 'Vendor Shop', value: 'vendor_shop', class: "blue blue-darken-1 white--text", },
          // { text: 'Address', value: 'address', class: "blue blue-darken-1 white--text" },
          // { text: 'Email Address', value: 'email', class: "blue blue-darken-1 white--text" },
          // { text: 'Phone Number', value: 'phone_number', class: "blue blue-darken-1 white--text" },
          { text: 'Product Name ', value: 'name', class: "blue blue-darken-1 white--text" },
          { text: 'Product Price', value: 'price', class: "blue blue-darken-1 white--text" },
          { text: 'Description', value: 'description', class: "blue blue-darken-1 white--text" },
          { text: 'Product Image', value: 'image', class: "blue blue-darken-1 white--text" },
          // { text: 'Banner Category', value: 'Category.category_name', class: "blue blue-darken-1 white--text " ,  },
          { text: 'Action', value: 'action', class: "blue blue-darken-1 white--text" },],
        // icons: [
        //   {
        //     icons: 'mdi-card',
        //   },
        // ],
        products: [
          // {
          //   id: 'ban-001',
          //   title: 'The Glory',
          //   type: 'Revange',
          //   des:'After becoming a primary school teacher, she takes in the son of the man who tormented her the most to enact her vengeance.',
          //   image:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNF8dnUiY8ad1Z9-QRGPoRpqYjvwiVbLHkMcS5SO5h9Wm5SEy3',
          //   category: 'Home Page',
          //   movie:'K-Drama'
          // },
          // {
          //   id: 'ban-002',
          //   title: 'The Glory',
          //   type: 'Revange',
          //   des:'After becoming a primary school teacher, she takes in the son of the man who tormented her the most to enact her vengeance.',
          //   image:'https://th.bing.com/th/id/OIP.Mir4HQdguOeNR8uuBm3jmQHaFo?pid=ImgDet&rs=1',
          //   category: 'Home Page',
          //   movie:'K-Drama'
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

  created() {
      this.getCategoryData();
      this.getProductData();
      this.getMovieData()

  },

    methods: {
      getProductData(){
        const axios = require('axios');
      // let products=[]
            axios
                .get(`http://localhost:3001/api/product/`)
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
                .get(`http://localhost:3001/api/category`)
                .then((res) => {

                  this.cates= res.data
                  console.log(this.cates)

                })
                .catch((error) => {
                console.log(error.response)

      })

      },
      getMovieData(){
      const axios = require('axios');

            axios
                .get(`http://localhost:3001/api/product`)
                .then((res) => {

                  this.movies= res.data
                  console.log(this.movies)

                })
                .catch((error) => {
                console.log(error.response)

      })

      },
       async save() {




      this.isLoading = true

        let image_url = ''

        try {
          if (this.file) {
            let formData = new FormData()
            formData.append('file', this.file)
            const res = await this.$axios.post('http://localhost:3001/upload-image', formData)
            this.image_url = res.data
          }

           let data = {

          name:this.name,
          description:this.description,
          price:this.price,
          Category:this.cate,
          image: this.image_url.data
        }

        await this.$axios.post('http://localhost:3001/api/product/add', data)

        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        location.replace('/product')

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
