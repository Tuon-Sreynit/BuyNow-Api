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
          <v-card>
           <form @submit.prevent="save" >
            <v-card-title  class="blue blue-darken-1 white--text">
              <span class="text-h5 white--text5">Edit Category</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Category Name"
                      required
                      v-model="name.name"> </v-text-field>
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
              <v-btn type="submit" color="blue darken-1" text >
                Edit
              </v-btn>
            </v-card-actions>
           </form>
             <div align="center" class="red--text font-weight-bold" v-if="status == 'ERROR'">
                  {{ message }}
              </div>
              <div align="center" class="blue--text font-weight-bold" v-else>
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
      name:'',
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
              .get(`http://localhost:3001/api/category/${this.id}`)
              .then((res) => {
                this.name= res.data
        
               
              })
              .catch((error) => {
              console.log(error.response)

              })

  },
    async save() {
      this.isLoading = true

    
      try {
          let data = {
         name : this.name.name
  
        }

          
        await this.$axios.put(`http://localhost:3001/api/category/${this.id}`,data)

        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        location.reload("/category")
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
