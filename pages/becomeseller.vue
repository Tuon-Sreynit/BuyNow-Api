<template>
    <div>
        <v-container>
        <v-row style="margin-top: 140px;padding: 20px">
             <v-col align="center">
                <v-card align="center"> 
                    <img class="image" src="~/assets/img/Login-rafiki.png"></img>
    
                </v-card>
                <h3> Register to be Our Vendor</h3>
             </v-col>
             <v-col align="center" style=" margin-top: 90px">
               <h2 style="color: gray">. . . . . . . . . . . . . . . . .</h2>
             </v-col>
             <v-col align="center">
                <v-card align="center"> 
                    <img class="image" src="~/assets/img/Work time-rafiki.png"></img>
                </v-card>
                <h3> Waiting for Our Confirmation</h3>
             </v-col>
             <v-col align="center" style=" margin-top: 90px">
                <h2 style="color: gray">. . . . . . . . . . . . . . . . .</h2>
              </v-col>
             <v-col align="center">
                <v-card align="center"> 
                    <img class="image" src="~/assets/img/Business merger-rafiki.png"></img>
                </v-card>
                <h3>Horray! You become our Vendor!</h3>
             </v-col>
        </v-row>
    
       </v-container>
    
       <v-row style="background-color: white; padding: 20px" >
         <v-container>
            <v-row class="benefit_vendor">
              <v-col md="6" > 
                <h2 style="margin-bottom: 10px;">Benifits of Becoming Our Vendor</h2>
                <v-row class="benefit"><v-icon color="yellow">mdi-star</v-icon> Posting your product in our website</v-row>
                <v-row class="benefit"><v-icon color="yellow">mdi-star</v-icon> Managing your product</v-row>
                <v-row class="benefit"><v-icon color="yellow">mdi-star</v-icon> Having your own online store</v-row>
                <h2 class="mt-2">Why hestitate? </h2>
                <v-row class="mt-3 ml-1">Be our vendor now by click on register below!!</v-row>
                <v-row ><v-btn to="/vendor_register" class="mt-3 ml-3" color="primary">Register</v-btn> </v-row>
            </v-col>
              <v-col md="6" align="center"> 
                <img class="benefit_image" src="~/assets/img/Helping a partner-bro.png"></img>
              </v-col>
            </v-row>
            </v-container>
       </v-row>
    
    </div>
    </template>
    
    <script>
    </script>
    
    <style>
    .image{
        height: 220px;
        width: 200px;
        
    }
    h3{
        margin-top:10px;
        font-size: 1em;
        font-weight: bold;
    }
    .benefit{
        margin-left: 2%;
        padding: 10px;
    }
    .benefit_vendor{
        padding: 15px;
    }
    .benefit_image{
        margin-top: 10px;
        width: 250px;
        height: 280px;
    }
    </style>