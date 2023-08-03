<template>
<v-container>
    <v-row>
      <v-col align="center">
          <h1 style="color: #0acffe; margin-top: 10px">Shop with Category</h1> 
      </v-col>

    </v-row>
    <v-row class="mt-10">
        <v-col md="3" v-for="cate in cates" :key="cate.id">
            <v-card class="mx-auto"  max-width="300"  outlined  >

               <v-img class="size" :src="cate.image">
                     <v-row class="lightbox white--text pa-2 fill-height" style=" background-color: rgba(0, 0, 0, 0.5);height:262px;align-items: center;">
                        
                        <v-col  align="center" >
                          <div >
                        
                           <div><h3  style="color:white; font-size: 2em; font-weight: bold">{{ cate.name }}</h3></div>
                          </div>
                         </v-col>
                     </v-row>
               </v-img>
                
            </v-card>
           
        </v-col>
        <!-- <v-col md="3">
            <v-card class="mx-auto"  max-width="300"   outlined >
                <v-img class="size" src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNraW4lMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                    <v-row class="lightbox white--text pa-2 fill-height" style=" background-color: rgba(0, 0, 0, 0.5);height:262px;align-items: center;">
                        
                        <v-col  align="center" >
                          <div >
                        
                           <div><h3  style="color:white; font-size: 2em; font-weight: bold">Cosmetic</h3></div>
                          </div>
                         </v-col>
                     </v-row>
                </v-img>
            </v-card>
            
   
        </v-col>
        <v-col md="3">
            <v-card class="mx-auto"  max-width="300"   outlined >
                <v-img class="size"  src="https://images.unsplash.com/photo-1631037561126-0782ab7e666e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8OTUwNjU0M3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
                    <v-row class="lightbox white--text pa-2 fill-height" style=" background-color: rgba(0, 0, 0, 0.5);height:262px;align-items: center;">
                        
                        <v-col  align="center" >
                          <div >
                        
                           <div><h3  style="color:white; font-size: 2em; font-weight: bold">Electronic</h3></div>
                          </div>
                         </v-col>
                     </v-row>
                </v-img>
            
            </v-card>
  
        </v-col>
        <v-col md="3">
            <v-card class="mx-auto"  max-width="300"   outlined >
                <v-img class="size"  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                    <v-row class="lightbox white--text pa-2 fill-height" style=" background-color: rgba(0, 0, 0, 0.5);height:262px;align-items: center;">
                        
                        <v-col  align="center" >
                          <div >
                        
                           <div><h3  style="color:white; font-size: 2em; font-weight: bold">Furniture</h3></div>
                          </div>
                         </v-col>
                     </v-row>
                </v-img>
            </v-card>
            
        </v-col> -->
    </v-row>
</v-container>
</template>
<script>
    import 'swiper/css/swiper.css'

    export default {

    data() {
        return {
         cates:[]
        }
    },
    created(){
    this.getCate()
    },
    methods:{
    getCate(){
    const axios = require('axios');
        axios
            .get(`http://localhost:3001/api/category`)
            .then((res) => {

                this.cates= res.data
                // console.log(this.cates)

            })
            .catch((error) => {
            console.log(error.response)

            })
    }
    }
    }


</script>
<style scoped>
h2{
    color:  #063999 ;
}
.size{
    height: 250px;
    width: 100%;
}
</style>
