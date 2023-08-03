<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on" icon
              >
              <v-icon color="green">
                mdi-pencil
              </v-icon>
              </v-btn>
            </template>
            <v-card>
              <form @submit.prevent="save" >
                  <v-card-title class= "green green-darken-1 white--text ">
                    <span class="text-h5 white--text">Edit Subcategory</span>
                      </v-card-title>
                        <v-card-text>
                          <v-container>
                           <v-row>
                             <v-col>
                               <v-text-field
                                 label="Subcategory Name" 
                                   required
                                      v-model="subcate.Subcategory_name"
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
                                Edit
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
    </div>
</template>
<script>
export default {
    props: ['id','cates'], 
    data() {
      return {
        dialog: false,
        cate:'',
        subcate:'', 
        isLoading: false,
        status: '',
        message: '',
        search: '',
     
  
      }
    },
   
      created() {
      this.getSubCategoryData();
  },
   
    methods: {
         async save() {
        this.isLoading = true

      
        try {
            let data = {
            Subcategory_name: this.subcate.Subcategory_name,
            Category: this.cate
            
            }

            
          await this.$axios.put(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/${this.id}`,data)

          this.$nuxt.$emit('getProduct')
          this.status = 'OK'
          this.message = 'Success'
          this.dialog = false
          location.replace('/manage_movie_subcate')
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
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/${this.id}`)
                .then((res) => {
               
                  this.subcate= res.data
                  console.log(this.subcate)
                  this.cate = this.subcate.Category
            
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