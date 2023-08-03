<template>
  
  <v-app  style="background-color: #97cff2">
    
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app 
      style="background: rgba(255, 255, 255, 0.89);"
     v-show="$auth.loggedIn" 
     zoom="80%"
   
    >
    
      <div class="mt-5 "    v-show="$auth.loggedIn">
        <v-row>
          <v-col align="center">
            <img  style="width: 100px; height: 100px;" src="~/assets/img/logo1.png">
          </v-col>
        </v-row>
        <v-col  class="mb-5"> 
         <userProfile/>
        </v-col>
        <v-row  >
        
      
        </v-row>
        <v-row>
          <!-- <v-col align="start" class="ml-6">  <div><h4>Navigation</h4> </div>
          </v-col> -->

        </v-row>
      </div>
      <v-list>
        <v-list-item
          router
          exact to="/"
        >
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Dashboard
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          router
          exact to="/category"
        >
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Categories
          </v-list-item-content>
      </v-list-item>

      <v-list-item
          router
          exact to="/product"
        >
          <v-list-item-action>
            <v-icon>mdi-file-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Products
          </v-list-item-content>
      </v-list-item>
         <!-- <v-list-group
            
            prepend-icon="mdi-view-dashboard"
            no-action
      > -->
     
        <!-- <template v-slot:activator>
          
          <v-list-item-content  >
            <v-list-item-title >Categories</v-list-item-title>
          </v-list-item-content>
        </template> -->

        <!-- <v-list-item router exact to="/category" >
          <v-list-item-content >
            <v-list-item-title  ><v-icon class="mr-3">mdi-select-group</v-icon>Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->

        <!-- <v-list-item router exact to="/cateImage">
          <v-list-item-content  >
            <v-list-item-title ><v-icon  class="mr-3">mdi-image-edit</v-icon>Picture</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group> -->
       <!-- <v-list-group
            
            prepend-icon="mdi-file-plus"
            no-action
      >
        <template v-slot:activator>
          
          <v-list-item-content  >
            <v-list-item-title >Products</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item router exact to="/movie_category" >
          <v-list-item-content >
            <v-list-item-title  ><v-icon class="mr-3">mdi-select-group</v-icon>Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact to="/manage_movie_subcate" >
          <v-list-item-content >
            <v-list-item-title  ><v-icon class="mr-3">mdi-shape-plus</v-icon>Subcategory</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router exact to="/product">
          <v-list-item-content  >
            <v-list-item-title ><v-icon  class="mr-3">mdi-play-box-edit-outline</v-icon>movie</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group> -->

      
      <v-list-item
          router
          exact to="/manage_user"
        >
          <v-list-item-action>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />User
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          exact to="/manage_subscription"
        >
          <v-list-item-action>
            <v-icon>mdi-history</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Histories
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item
          router
          exact to="/manage_transaction"
        >
          <v-list-item-action>
            <v-icon>mdi-cash-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title />Transaction
          </v-list-item-content>
        </v-list-item> -->
    
          <!-- <v-list-item-action  align="center">
            <v-row>
                 <v-col align="center"><v-icon >mdi-logout-variant</v-icon></v-col>
              </v-row>
          </v-list-item-action> -->
              <div class="logout">
                   <v-row>
                      <v-col align="center"> 
                        <v-btn text @click="refresh()">
                          <v-icon >mdi-logout</v-icon>  Logout
                          
                        </v-btn>
                      
                      </v-col>
              </v-row>
              </div>
           
        
     
      </v-list>
     
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app  v-show="$auth.loggedIn" > 
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
   
     
      <v-spacer />
    
    </v-app-bar>
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

      
  
  </v-app>
 
</template>

<script>
import userProfile from '~/components/user/userProfile.vue'
export default {
 components: { 
 userProfile
  },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/',
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire',
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      // title: 'Vuetify.js',
    }
  },
  methods:{
    refresh(){
        this.$auth.strategy.token.reset()
        location.replace('/login')  }
  }
}
</script>
<style scoped>
.img_logo{
  height: 40px;
  width: 180px;
}
.profile{
  display: flex;
  justify-content: center;
  gap: 8px;
  
}
.img_profile{
  width: 50px;
  height: 50px;
  border-radius: 100%;
 
}
h4{
  color: #4F4F4F;
}
h6{
  color: #736F6F;
}
 .v-list-item--active{
   background-color: transparent;
  color: #034C7C;
  border-left: 10px solid #034C7C;
 
  font-weight: bold;
  z-index: 10000;
  position:relative;
}
.logout{
  position: absolute;
  bottom: 20px; 
  left: 25%
}
/* .theme--light{
  color: white;
} */
</style>