export const strict = false

export const state = () => ({

   carts:'',
   cartloading: false,

   alert: {
    msg: '',
    show: false,
    color: '',
    icon: '',

  },

})

//update state data
export const mutations = {
    set_carts(state , carts){
        state.carts = carts
    },
    set_cartloading(state , bool){
        state.cartloading = bool
     },
 
   
  setAlert(state, payload) {
    state.alert = payload
  },

}

export const actions = {

    getcarts(context){
        let config = {   
    
            headers: { 
                token: this.$auth.strategy.token.get()
            },
        };
        this.$axios.get('https://buynow-api.onrender.com/cart',config)
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

        this.$axios.post('https://buynow-api.onrender.com/cart/add', data , config)
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
    async removeCart(context, id) {
        try {
          const res = await this.$axios.delete(`https://buynow-api.onrender.com/cart/delete/${id}`)
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
      async updateQuantityCart(context, { id, operator }) {
        console.log(cart_id, operator)
        try {
          const res = await this.$axios.put(`https://buynow-api.onrender.com/cart/update/${id}`, {
            quantity: operator,
          })
          console.log('update quantity cart', res)
          context.dispatch('getcarts')
        } catch (error) {
          console.log('update quantity cart', error)
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
  
}