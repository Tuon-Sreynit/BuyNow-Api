<template>
<div style="margin-top: 100px">
<div>
    <v-row>
        <v-col align="center" class="mt-15">
            <img height="55px" width="50px" src="https://cdn-icons-png.flaticon.com/512/552/552848.png"></img>
            <h2>User Name</h2>
        </v-col>

    </v-row>
    <v-divider></v-divider>
    <v-row style="padding: 20px"> 
        <nuxt-link style="text-decoration: none" to="/order">
        <v-col align="start" >
            <v-icon>
              mdi-list-box-outline
            </v-icon>Order
        </v-col>
    </nuxt-link>
    </v-row>
    <v-divider></v-divider>
    <v-row style="padding: 20px"> 
        <v-col align="start">
           <v-icon>mdi-logout</v-icon>Logout
        </v-col>
    </v-row>

</div>
</div>
</template>
<script>
</script>
<style>

</style>