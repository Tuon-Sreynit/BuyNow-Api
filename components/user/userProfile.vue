<template>
<div>
  <v-row  v-if="$auth.user">
          <v-col  class="profile">
              <!-- <div >
                <img class="img_profile" :src="$auth.user.data.profile_img">
              </div> -->
              <div class="pa-1" >
               
                   <h3 align="center" style="font-weight: 800; color: blue;"> {{$auth.user.data.firstname}}<span class="ml-2">{{$auth.user.data.lastname}}</span></h3>
                   <h6 class="mt-1" align="center"> {{$auth.user.data.role}}</h6> 
                </div>
              
              <!-- <div  class="pa-2">
                <v-icon>mdi-dots-vertical</v-icon>
              </div> -->
            
          </v-col>
  </v-row>
</div>
</template>
<style scoped>
.profile{
  display: flex;
  justify-content: right;
  gap: 8px;
  margin-right: 50px;
  
}

.img_profile{
  width: 50px;
  height: 50px;
  border-radius: 100%;
 
}
</style>