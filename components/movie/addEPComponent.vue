<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on" icon
              >
              <v-icon color="blue">
                mdi-plus-circle
              </v-icon>
              </v-btn>
            </template>
            <form @submit.prevent="save" >
                 <v-card >
                      <v-card-title class="green green-darken-1 white--text">
                              <span class="text-h5 white--text">Add Movie Episode</span>
                      </v-card-title>
                       <v-card-text>
                             <v-container>
                              <v-row>
                                    <v-col align="center" md="8">
                                        <!-- <h5>EP <span></span></h5> -->
                                        <v-text-field
                                          v-for="(input, index) in inputs"
                                          :key="index"
                                          v-model="inputs[index]"
                                          label="EP"
                                          outlined
                                          clearable
                                        ></v-text-field>
                                 
                                    </v-col> 
                                    <v-col  align="end" ><v-btn    v-for="(input, index) in inputs"
                                      :key="index" color="green" class="mt-3 mb-9 white--text" @click="addInput">More EP</v-btn></v-col>
                                  </v-row>
                             </v-container>
                              
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="dialog = false">
                                Cancel
                              </v-btn>
                              <v-btn :loading="isLoading"
                                :disabled="isLoading"
                                type="submit"  color="blue darken-1" text >
                               Add
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
        inputs: [''],
        movies: [],
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
      addInput() {
      this.inputs.push(''); // Add a new empty element to the array
    },
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
       // const res = await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/upload-image', formData)
       const res = await this.$axios.post('http://localhost:3001/upload-image', formData)
       this.image_url = res.data
     }

      let data = {
      	   episode:this.episode,
  
       }

   // await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/add', data)
   await this.$axios.post('http://localhost:3001/api/movie/add', data)

          this.$nuxt.$emit('getProduct')
          this.status = 'OK'
          this.message = 'Success'
          this.dialog = false
          this.getMovieData();

        } catch (error) {
          this.status = 'ERROR'
          this.message = 'Something went wrong'
        }

        setTimeout(() => {
          this.isLoading = false
        }, 2000)
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
      
  },

    }
</script>