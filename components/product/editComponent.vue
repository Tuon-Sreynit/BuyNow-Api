<template>
  <div>
      <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on" icon
            >
            <v-icon color="blue">
              mdi-pencil
            </v-icon>
            </v-btn>
          </template>
          <form @submit.prevent="save" >
            <v-card>
              <v-card-title  class="blue blue-darken-1 white--text">
                <span class="text-h5 white--text">Edit Product </span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                      label="Product Name"
                      v-model="products.name"
                      required
                    ></v-text-field>                                
                    </v-col>
                    <v-col>
                        <v-text-field
                          label="Product Price"
                          v-model="products.price"
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
                    </v-row>
                    <v-row>
                   
                    <v-col>
                      <v-text-field
                          label="Description"
                          required
                          outlined
                          clearable
                          v-model="products.description"
                         
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
                  Edit
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
  </div>
</template>
<script>
export default {
  props: ['id','cates'], 
  data() {
    return {
      dialog: false,
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
      search: '',
      products:''
    
   

    }
  },
  created() {
      // this.getSubCategoryData();
      this.getProductData();

  },

    methods: {
      getProductData(){
        const axios = require('axios');
      // let products=[]
            axios
                .get(`http://localhost:3001/api/product/${this.id}`)
                .then((res) => {

                  this.products= res.data
                  console.log(this.products)
                  this.cate = this.products.Category
                })
                .catch((error) => {
                console.log(error.response)

                })
      },
      //   getSubCategoryData(){
      // const axios = require('axios');

      //       axios
      //           .get(`http://localhost:3001/api/movie/subcategory/${this.id}`)
      //           .then((res) => {

      //             this.subcates= res.data
      //             console.log(this.subcates)

      //           })
      //           .catch((error) => {
      //           console.log(error.response)

      // })

      // },
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

            title:this.products.title,
          description:this.products.description,
          type:this.products.type,
          Category:this.products.cate,
          image: this.image_url.data
        }

        await this.$axios.put(`http://localhost:3001/api/product/${this.id}`, data)

        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
      location.reload("/product")

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