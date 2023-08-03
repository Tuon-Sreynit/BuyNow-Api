<template>
<div>
  <v-container>
    <div style="display:flex; justify-content: center; border:1px solid #034773; border-radius: 10px; padding: 15px; margin-right:15%; " >

        <v-row>
        <v-col md="6" align="center" style="padding: 2%" class="mt-2">
          <img class="img_login"  src="~/assets/img/Sign in-rafiki.png">
        </v-col>
        <v-col>
            <v-card style="margin-top: -12px; margin-bottom: -12px;padding: -12px; width: 100%; margin-left: 12px; padding:50px;border-radius: 0px 10px 10px 0" >

             <form @submit.prevent="userLogin">
            <center>
              <img class="logo mt-4"  src="~/assets/img/logo1.png">
            </center>
            <v-row class="mt-2 " >
                <v-col align="center" >
                </v-col>
            </v-row>
            <v-row>
                <v-col align="center" >
                    <p style="margin-top: -5px">Welcome to BuyNow! Please Login to our Website!</p>
                </v-col>
            </v-row>

           <v-row>
              <v-col align="start"  class="ml-5">
                 <v-text-field  name="email"       v-model="login.email" required outlined  label="Email"  prepend-inner-icon="mdi-email-outline"
                 :error-messages="errorMessages('email')"
                 @input="resetErrorMessages('email')"
              ></v-text-field>
              </v-col>
              </v-row>
              <v-row  style="margin-top: -12px; ">
                  <v-col align="start"  class="ml-5">
                 <v-text-field name="password"      v-model="login.password" outlined  required  label="Password"  prepend-inner-icon="mdi-lock-outline"
                 :error-messages="errorMessages('password')"
                 @input="resetErrorMessages('password')"
                counter
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"></v-text-field>
              </v-col>

              </v-row>
              <v-row>
               <v-col align="start"  class="ml-5"  style="margin-top: -12px; ">
                <v-btn width="100%" color="#034C7C" style="border-radius: 5px; padding: 20px;margin-bottom: 40px; height: 50px"
                :loading="isLoading"
                  :disabled="isLoading"
                  type="submit"
                  elevation="0">
                  <h4>Login</h4>
                </v-btn>
              </v-col>
              </v-row>
              <!-- <v-row>
                <v-col align="center">  <v-btn to="/forgot" text><p>Forget Password ?</p></v-btn></v-col>
              </v-row> -->
               </form>
            </v-card>

        </v-col>

        </v-row>

    </div>
  </v-container>

</div>

</template>
<script>
export default {
  auth: 'guest',
  name: 'login',

  data() {
    return {
      error: '',
      isLoading: false,
      showPassword: false,
      login: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async userLogin() {
      this.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        //user login success redirect user to home page
        if (response.data.success) {
          this.$router.push('/')
        }
      } catch (err) {
        this.error = err.response.data.error
      }
      this.isLoading = false
    },
    errorMessages(property) {
      return this.error[property]
    },
    resetErrorMessages(property) {
      if (this.error[property]) {
        this.error[property] = ''
      }
    }
    // async userLogin() {
    //   this.isLoading = true
    //    let response = await this.$auth.loginWith('local', {
    //             data: {
    //                 email: this.email,
    //                 password: this.password,
    //             },
    //         })

    //         if ( response.data.success==true){
    //                  this.$auth.strategy.token.set(response.data.token)
    //                  this.$auth.setUser(response.data.user)
    //                 //  location.reload()
    //                 // location.replace('/')
    //                  this.$router.push('/')
    //                 //  this.refresh()
    //       }

    //       else if (response.success==false) {
    //             console.log("error")
    //         // this.$auth.strategy.token.set(response.data.token)
    //         // this.$auth.setUser(response.data.user)

    //         // this.refresh()
    //         // this.$router.push('/subscription')


    //   }




    // },
    //  errorMessages(property) {
    //   return this.error[property]
    // },

    // resetErrorMessages(property) {
    //   if (this.error[property]) {
    //     this.error[property] = ''
    //   }
    // },
    
  },
}
</script>
<style scoped>
.img_login{
height: 600px;
width: 400px
}
.logo{
height: 150px;
width: 150px
}
.login_input{
background: rgba(255, 255, 255, 0.89);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);

border-radius: 0px 10px 10px 0px;

}
h3{
color:#4F4F4F;
font-weight: bold
 }
 p{
 font-size: 12px;
 color: #736F6F;
 font-weight: bold

 }
 h4{
 color:white;

 }
 h5{
 color:#034C7C;

 }
</style>
