<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on" icon
              >
              <v-icon color="green">
                mdi-alpha-e-circle
              </v-icon>
              </v-btn>
            </template>
            <form @submit.prevent="save" >
                 <v-card >
                      <v-card-title class="green green-darken-1 white--text">
                              <span class="text-h5 white--text">Edit Movie Episoide </span>
                      </v-card-title>
                       <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>

                                      <v-text-field
                                        label="Title"
                                        v-model="products.title"
                                        required
                                      ></v-text-field>
                                  </v-col>
                                  <v-col>
                                      <v-text-field
                                        label="Type"
                                        required
                                         v-model="products.type"
                                      ></v-text-field>
                                    </v-col>

                                  </v-row>
                                  <v-row>
                                  <v-col>
                                    <v-select
                                      :items="subcates"
                                      v-model="subcate"
                                      item-text="Subcategory_name"
                                      item-value="_id"
                                      label="Subcategory"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-col>

                                      <v-text-field
                                        label="Year"
                                        required   
                                        v-model="products.year"
                                      ></v-text-field>

                                  </v-col>

                                  </v-row>
                                  <v-row>
                                    <v-col>
                                      <v-text-field
                                        v-model="products.trailer"
                                        label="trailer"
                                          outlined
                                      ></v-text-field>
                                     </v-col>
                                     </v-row>
                                     <v-row>
                                      <v-col>

                                      <v-text-field
                                        label="Description"
                                        v-model="products.description"
                                        outlined
                                        clearable
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
                              <v-btn color="blue darken-1" text @click="dialog = false">
                                Cancel
                              </v-btn>
                              <v-btn :loading="isLoading"
                                :disabled="isLoading"
                                type="submit"  color="blue darken-1" text >
                                Edit
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
    </div>
</template>
<script>
export default {
  props: ['id','subcates'], 
    data() {
      return {
        dialog: false,
    
        title:'',
        subcates:'',
        subcate:'',
        type:'',
        trailer:'',
        year:'',
        description:' ',
        episode:[],
        isLoading: false,
        status: '',
        message: '',
        file:null,
        image_url:'',
        products:''
      }
    },
   
    created() {
      // this.getSubCategoryData();
      this.getMovieData();

  },

    methods: {
      getMovieData(){
        const axios = require('axios');
      // let products=[]
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/${this.id}`)
                .then((res) => {

                  this.products= res.data
                  console.log(this.products)
                  this.subcate = this.products.subcategory
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
            const res = await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/upload-image', formData)
            this.image_url = res.data
          }

           let data = {

          title:this.products.title,
          description:this.products.description,
          type:this.products.type,
          year:this.products.year,
          trailer: this.products.trailer,
          subcategory:this.subcate,
      
          movie_thumbnail: this.image_url.data
        }

        await this.$axios.put(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/${this.id}`, data)

        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        location.replace('/manage_movie')
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