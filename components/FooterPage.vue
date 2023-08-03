<template> 

    <div class="footer" >
        
        <div class="container" >
            <v-row class="box1 mx-auto">
                <v-col align="center" md="5">
                    <h3>About Us</h3>
                    <v-row>
                        <v-col align="center" md="3">
                            <img class="size" src="~/assets/img/logo1.png" />
                        </v-col>
                        <v-col align="start" style="padding:20px">
                            <p style="text-align: start; ">Buynow is an online webiste that has many good products and review videos for users to check before buying</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col align="center" md="3">
                    <h3>Contact Us</h3>
                    <v-row>
                       
                        <v-col align="center">
                            <h5>+855 12345678</h5>
                            <h5>+855 11223344</h5>
                            <h5>+855 11111111</h5>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col align="center"><h4> buynow@gmail.com</h4></v-col>
                       
                    </v-row>
                </v-col>
                <v-col align="center" md="4">
                    <h3>Quick Link</h3>
                    <v-row>
                       
                        <v-col align="center">
                            <nuxt-link to="/" style="text-decoration:none"> 
                                 <h5>Home</h5>
                            </nuxt-link>
                            <nuxt-link to="/product" style="text-decoration:none"> 
                                <h5>Product</h5>
                           </nuxt-link>
                           <nuxt-link to="/becomeseller" style="text-decoration:none"> 
                            <h5>Become Seller</h5>
                           </nuxt-link>
                           <nuxt-link to="/aboutus" style="text-decoration:none"> 
                            <h5>About Us</h5>
                           </nuxt-link>
                           <nuxt-link to="/contact" style="text-decoration:none"> 
                            <h5>Contact</h5>
                           </nuxt-link>
                           
                            
                        </v-col>
                    </v-row>
                    
                </v-col>
            </v-row>
    
    </div>
    </div>
    
    </template>
    <style scoped>
    .footer{
      
        position: fixed;
        top:10;
        bottom: 0;
        margin-top: 20px;
        width: 100%;
        height: 250px;
       
        background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);
        display: flex;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;
    }
    .container{
        margin-top: 60px;
        /* margin-left: auto;
        margin-right: auto; */
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .box1{
        display: flex;
        justify-content: center;
    }
    .size{
        height: 80px;
    
    }
    h3{
    color: blue;} 
    </style>