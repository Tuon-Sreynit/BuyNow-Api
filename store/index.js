// import axios from 'axios'
export const strict = false

export const state = () => ({

   carts:'',
   cartloading: false,
   favs:'', 
   favloading: false,
   alert: {
    msg: '',
    show: false,
    color: '',
    icon: ''
  },
  //  payment:[
  //   {
  //     name:'ABA 010 601 168 | Simsophea',
  //     payment_method:'ABA'
  //   },
  //   {
  //     name:'Aceleda 010 601 168 | Simsophea',
  //     payment_method:'Aceleda'
  //   },
  //   {
  //     name:'',
  //     payment_method:'Transfer'
  //   },
  //  ], 
})

//update state data
export const mutations = {
    set_carts(state , carts){
        state.carts = carts
    },
    set_cartloading(state , bool){
        state.cartloading = bool
     },
     set_favs(state , favs){
      state.favs = favs
    },
  set_favloading(state , bool){
      state.favloading = bool
   }, 
   
  setAlert(state, payload) {
    state.alert = payload
  },

}

// export const getters = {

// }
export const actions = {

    getcarts(context){
        let config = {   
    
            headers: { 
                token: this.$auth.strategy.token.get()
            },
        };
        this.$axios.get('https://mekongtv.anakutjobs.com/public/api/cart',config)
        .then((res) => {
            console.log('cartsss', res)
            context.commit('set_carts' ,res.data)
            // context.commit('set_carts' ,res.total)
            context.commit('set_cartloading',false)
         
        })
    },

    add_to_cart(context, data){
        let config = {   
    
            headers: { 
                token: this.$auth.strategy.token.get()
            },
        };

        this.$axios.post('https://mekongtv.anakutjobs.com/public/api/cart/add', data , config)
        .then(() => {
          
            context.dispatch('getcarts')
            context.dispatch('alertMsg', {
              icon: 'mdi-check-circle-outline',
              msg: 'Service is Added!',
              color: 'green',
            })
            context.dispatch('floatIconHandler', 'cart')
        })
        .catch((err) => {
            console.log('Something is wrong!' , err)
            context.dispatch('alertMsg', {
                icon: 'mdi-alpha-x-circle-outline',
                msg: 'Something went wrong',
                color: 'red',
              })
        })
    },  
    async removeCart(context, course_id) {
        try {
          const res = await this.$axios.delete(`https://mekongtv.anakutjobs.com/public/api/cart/remove/${course_id}`)
          console.log('remove cart', res)
          context.dispatch('getcarts')
          context.dispatch('alertMsg', {
            icon: 'mdi-alpha-x-circle-outline',
            msg: 'Service is Removed!',
            color: 'red',
          })
        } catch (error) {
          console.log('error remove card', error)
        }
    },
      async updateQuantityCart(context, { cart_id, operator }) {
        console.log(cart_id, operator)
        try {
          const res = await this.$axios.put(`https://mekongtv.anakutjobs.com/public/api/cart/update/${cart_id}`, {
            quantity: operator,
          })
          console.log('update quantity cart', res)
          context.dispatch('getcarts')
        } catch (error) {
          console.log('update quantity cart', error)
        }
    },


      //favorite
      getfavs(context){
        let config = {   
    
            headers: { 
                token: this.$auth.strategy.token.get()
            },
        };
        this.$axios.get('https://mekongtv.anakutjobs.com/public/api/favourite',config)
        .then((res) => {
            console.log('favsss', res)
            context.commit('set_favs' ,res.data)
            context.commit('set_favloading',false)
        })
    },
    add_fav(context, data){
        let config = {   
    
            headers: { 
                token: this.$auth.strategy.token.get()
            },
        };

        this.$axios.post('https://mekongtv.anakutjobs.com/public/api/favourite/add', data , config)
        .then(() => {

            context.dispatch('getfavs')
            context.dispatch('floatIconHandler', 'heart')

            context.dispatch('alertMsg', {
              msg: ' Favorite Added ! ',
              icon: 'mdi-check-circle-outline',
              color: 'green',
            })
        })
        .catch((err) => {
            console.log('Something is wrong!' , err)
            context.dispatch('alertMsg', {
                msg: 'Something went wrong',
                color: 'red',
              })
        })
    },  
    async removefav(context, favourite_id) {
        try {
          const res = await this.$axios.delete(`https://mekongtv.anakutjobs.com/public/api/favourite/remove/${favourite_id}`)
          console.log('remove fav', res)
          context.dispatch('getfavs')
          context.dispatch('alertMsg', {
            icon: 'mdi-alpha-x-circle-outline',
            msg: 'Favorite is Removed!',
            color: 'red',
          })
        } catch (error) {
          console.log('error remove fav', error)
          context.dispatch('alertMsg', {
            msg: 'Something went wrong',
            color: 'red',
          })
        }
      },
      alertMsg(context, { msg, color, icon }) {
        context.commit('setAlert', {
          icon: icon,
          msg: msg,
          show: true,
          color: color,
        })
    
        setTimeout(() => {
          context.commit('setAlert', {
            icon:'',
            msg: '',
            show: false,
            color: '',
          })
        }, 5000)
      },
      floatIconHandler(context, iconName) {
        if (iconName == 'cart') {
          context.commit('setFloatIcon', {
            cartBg: 'red',
            heartBg: 'white',
          })
    
          setTimeout(() => {
            context.commit('setFloatIcon', {
              cartBg: 'green',
              heartBg: 'white',
            })
          }, 1000)
        } else if (iconName == 'heart') {
          context.commit('setFloatIcon', {
            cartBg: 'green',
            heartBg: 'red',
          })
    
          setTimeout(() => {
            context.commit('setFloatIcon', {
              cartBg: 'green',
              heartBg: 'white',
            })
          }, 1000)
        }
      },
      resendOtp(context) {
        return new Promise((resolve, reject) => {
          this.$axios
            .post('https://mekongtv.anakutjobs.com/public/api/auth/resend', {
              phone: this.$auth.user.phone,
              secret: 'ANAKUT',
              type: 'resend'
            })
            .then((res) => {
              console.log('resendOtp', res.data)
              resolve('success')
            })
            .catch((err) => {
              console.log('resendOtp', err.response)
              reject('error')
            })
        })
      },
}

