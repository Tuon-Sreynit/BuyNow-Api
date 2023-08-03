<template>
    <div class="wrapper">
         <v-row > 
               <v-col>
                  <v-card>
                    <h2>Categories</h2>
                    <v-divider></v-divider>
                  </v-card>
               </v-col>
               <v-col>
                 
               </v-col>
              
            </v-row>
    </div>
  </template>
  <script>
  export default {
    data: () => ({
      items: ['Default', 'High to Low Price', 'Low to High Price'],
    }),
  }
  </script>
  <style scoped> 
 h4{
    color: white;
    font-weight: bold;
 }
 .wrapper{
    position: absolute;
 }
 
  </style>