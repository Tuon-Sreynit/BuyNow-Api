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
            <form @submit.prevent="save" >
              <v-card>
          <v-card-title  class="green green-darken-1 white--text">
            <span class="text-h5 white--text">Edit Subscription Plan</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Package Name" 
                    v-model="product.name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                      label="Price ($)"
                      v-model="product.price" 
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Duration (Days)"
                      v-model="product.value" 
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
                        v-model="product.description"

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
    props: ['id'],
    data() {
      return {
        name:'',
        price:'',
        description:'',
        value:'',
        isLoading: false,
        status: '',
        message: '',
        
        dialog: false,
        product: '',
      }
    },
    
    created() {
      this.getSubData();
      
  },
   
    methods: {
      async save() {
      this.isLoading = true

 

      try {
        console.log(this.cate)
        let data = {
          name:this.product.name,
          price:this.product.price,
          description:this.product.description,
          value:this.product.value,
      
      }
   
        await this.$axios.put(`https://sabay-entertainment-movie-api-1308.onrender.com/api/subscription/${this.id}`,data)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        
       location.replace('/manage_subscription')
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
   
       
    getSubData(){
      const axios = require('axios');
  
            axios
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/subscription/${this.id}`)
                .then((res) => {
                  this.product= res.data
                })
                .catch((error) => {
                console.log(error.response)
                })
      }
      
     },
       
  
    }
</script>
