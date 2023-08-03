<template>
<div >
 <v-container style="display:flex; justify-content: center;margin-top: 150px;margin-bottom: 20px">  
    <div>
        <v-card class="mx-auto mt-3" max-width="740" outlined>
            <v-row>
                <v-col >
                    <v-list-item three-line>
                        <v-list-item-content >
                            <v-row class="mt-2">
                                <v-col align="center" ><h2>Vendor Registration</h2></v-col>
                            </v-row>
                            <v-row>
                                <v-col align="center" >
                                    
                                    <p>Complete form to signup as a vendor</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col align="center" class="mt-5">
                                    <img height="300px" width="100%" src="~/assets/img/Fill out-amico.png"></img>
                                </v-col>
                            </v-row>
                        </v-list-item-content>
                       
                      </v-list-item>
                </v-col>
                <v-col class="left_corner">
                    <center>
                        <h3>Point of Contact</h3>
                       </center>
                       <v-row>
                        <v-col>
                            <h3 >First Name</h3>
                             <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 
                        </v-col>
                        <v-col>
                            <h3 >Last Name</h3>
                             <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <h3 >Phone Number</h3>
                             <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 
                        </v-col>
                        <v-col>
                            <h3 >Email</h3>
                             <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 
                        </v-col>
                    </v-row>
                <center>
                    <h3>Shop Contact Information</h3>
                   </center>
                    <v-row>
                        <v-col>
                        <h3 >Business Name</h3>
                        <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 

                        <v-row>
                            <v-col>
                                <h3 >Shop Address</h3>
                                <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field>
                                </v-col>
                                <v-col>
                                <h3 >Province/City</h3>
                                 <v-text-field  class="mx-4"  flat hide-details  width="100%"  solo></v-text-field> 
                            </v-col>

                           
                        </v-row>
                        <v-row>
                            <v-col>
                                 <v-file-input  label="Input Shop Logo"  filled prepend-icon="mdi-camera"></v-file-input>
                            </v-col>
                        </v-row>
                    </v-col>
                        
                    </v-row>
                    <v-row style="display: flex; justify-content: center">
                         <div>
                              <v-btn to="/vendor_validation" color="green"><h4 style="color:white"> Register</h4></v-btn>
                           </div>
                     </v-row>
                </v-col>
            </v-row>
       
    
      </v-card>
</div>
 </v-container>
   
</div>
</template>
<script>
  export default {
    data: () => ({
      files: [],
    }),
  }
</script>
<style>
.card{
    padding: 30px;
}
.left_corner{
    background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
    border-radius: 20px;
    padding: 20px;

}
h3{
    margin-left: 20px;
}
.v-input__slot{
    height: 20px;
    padding: 5px;
}
</style>