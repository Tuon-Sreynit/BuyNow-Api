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
              <v-card-title  class="green green-darken-1 white--text">
                <span class="text-h5 white--text">Edit Category</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        label="Category Name"
                        required
                        v-model="category_name.Category_name"> </v-text-field>
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
                <v-btn type="submit" color="blue darken-1" text >
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
import axios from 'axios';
export default {
    props: ['id'],
    data() {
      return {
        catename:' ',
        category_name:'',
        dialog: false,
        isLoading: false,
        status: '',
        message: '',
      }
    },
     created(){
    this.getCategoryData()
    },

    methods: {
   
     getCategoryData(){
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/category/${this.id}`)
                .then((res) => {
                  this.category_name= res.data
          
                  console.log( "HI",res.data)
                })
                .catch((error) => {
                console.log(error.response)

                })

    },
      async save() {
        this.isLoading = true

      
        try {
            let data = {
           Category_name : this.category_name.Category_name
    
          }

            
          await this.$axios.put(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/category/${this.id}`,data)

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
