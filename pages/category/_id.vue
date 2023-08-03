<template>
    <div class="wrapper">
        <!-- <v-row  >
            <v-col class="filter_box mb-4" >
                <v-card class="mx-auto pa-8 " outlined style="margin-top: 140px" height="380"  width="300" >
                 <h3>Sort</h3>
                 <v-select height="20px" :items="items" label="Sort Price" outlined ></v-select>
                 <h3>Price</h3>
                 <v-row>
                  <div style="display:flex; justify-content: space-evenly ; margin-top:10px; padding: 12px; gap: 10px">
                        <div><p >From </p>  </div>
                        <div><v-text-field width="80px" outlined dense  ></v-text-field></div>
                        <div><p>to </p> </div>
                        <div><v-text-field width="80px" outlined dense  ></v-text-field></div>
                  </div>
                </v-row>
                <v-row>
                    <v-col align="end"> <v-btn color="blue "> <v-icon color="white">mdi-filter</v-icon><h4>Filter</h4></v-btn></v-col>
                </v-row>
               
                </v-card>
            </v-col>
           
          
          
        </v-row> -->
         <!-- <v-row > 
               <v-col>
                  <v-card>
                    <h2>Categories</h2>
                    <v-divider></v-divider>
                  </v-card>
               </v-col>
               <v-col>
                 
               </v-col>
              
            </v-row> -->
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