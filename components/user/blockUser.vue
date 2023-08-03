<template>
    <div class="p-2"  v-if="$auth.user">
            <v-row class="pl-2">
                <v-btn outlined
                  v-bind="attrs"
                  v-on="on"
                  color="red" 
                  v-if="$auth.user.data.isBlocked == false"
                  @click="block(id)"
                >
                Block 
                  <!-- <v-icon color="red">
                    mdi-cancel
                  </v-icon> -->
                </v-btn>
                <v-btn outlined
                  v-bind="attrs"
                  v-on="on"
                  color="red"
                  @click="unblock(id)"
                  v-if="$auth.user.data.isBlocked == true"
                >
                Unblock
                  <!-- <v-icon color="red">
                    mdi-cancel
                  </v-icon> -->
                </v-btn>
          
            </v-row>
          </div>

</template>
<script>
export default {
    props: ['id'],
    data() {
      return {
       
      }
    },
    
 
   
    methods: {
      async block(id) {
      this.isLoading = true

 

      try {
      
        let config = {
                    headers: {
                    Authorization: `${this.$auth.strategy.token.get()}`,
                                
                    // Authorization: `Bearer ${this.$auth.strategy.token.get()}`,
                    },
                }
        let data = {
       isBlocked: true
      
        }
   
        await this.$axios.put(`http://localhost:3001/auth/block-user/${this.id}`,data,config)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        
          
        // location.replace('/manage_user')
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
    async unblock(id) {
      this.isLoading = true

 

      try {
      
        let config = {
                    headers: {
                    Authorization: `${this.$auth.strategy.token.get()}`,
                                
                    // Authorization: `Bearer ${this.$auth.strategy.token.get()}`,
                    },
                }
        let data = {
            isBlocked : false
       
      
        }
   
        await this.$axios.put(`http://localhost:3001/auth/unblock-user/${this.id}`,data,config)
        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        
    //    location.replace('/manage_user')
      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
       
},

  
    }
</script>
