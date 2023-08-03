<template>
    <div style="margin-top: 140px; padding: 20px">
        <v-card>
            <v-tabs v-model="tab" background-color="#78a2bf" dark  centered >
                <v-tab style="font-weight: bold;">
                    ALL
                </v-tab>
                <v-tab   v-for="cate in cates" :key="cate.id" style="font-weight: bold;">
                    <div>{{ cate.name }} </div>
                </v-tab>
            </v-tabs>
    
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="product in products" :key="product.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+product._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="product.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{product.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{product.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="cost in costs" :key="cost.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+cost._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="cost.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{cost.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{cost.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
       

                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="elec in elecs" :key="elec.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+elec._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="elec.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{elec.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{elec.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>


                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="cloth in cloths" :key="cloth.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+cloth._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="cloth.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{cloth.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{cloth.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>


                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="furn in furns" :key="furn.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+furn._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="furn.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{furn.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{furn.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>

                <v-tab-item>
                    <v-card flat>
                        <v-card-text >
                            <v-row >
                                    <v-col  cols="12" sm="3" v-for="book in books" :key="book.id" >
                                        <v-card
                                        class="mx-auto object-fit-contain"
                                        
                                        style="padding: 10px"
                                        outline
                                         >
                                            <nuxt-link style="text-decoration: none" :to="'/product/'+book._id">
                                            
                                                <center>
                                                <img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" 
                                                height="200px" width="fit" :src="book.image" >
                                                </center>
                                            
                                                <div class="box1">
                                                    <div > <h5>{{book.name}}</h5></div>
                                                    <div>
                                                        <h4>$ {{book.price}}</h4>
                                                    </div>
                                                </div>
                                            
                                            </nuxt-link>
                                        </v-card>
                                    </v-col>
                                 </v-row>
                        </v-card-text>
                    </v-card>
                </v-tab-item>

            </v-tabs-items>
                
        </v-card>
</div>




</template>

<script>
export default {
    data () {
        return {
            tab: null,
            cates: [],
            page: 1,
            products: [],
            cloths:[],
            elecs:[],
            furns:[],
            costs:[],
            books:[],
           
        }
    },

    created() {
         this.getProductdata()
         this.getCatedata()

         this.getClothedata()
        this.getElecsdata()
        this.getCostsdata()
        this.getFurnsdata()
        this.getBooksdata()
    },
    methods: {
        handlePageChange(value) {
        this.page = value;
        },
    getProductdata() {
      var config = {
        method: 'get',
        url: 'http://localhost:3001/api/product',
      }
      this.$axios(config)
        .then((response) => {
          console.log('PRODUCTS',response.data)

          this.products = response.data
          let all = response.data
          let name = this.$route.query.search

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getCatedata() {
      var config = {
        method: 'get',
        url: 'http://localhost:3001/api/category',
      }
      this.$axios(config)
        .then((response) => {
          console.log('CATEGORY',response.data)

          this.cates = response.data
    

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getClothedata(){
          var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca1fd77aa3c47a778b69e3`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.cloths = response.data
          console.log(this.cloths )
        })
        .catch(function (error) {
          console.log(error)
        })
       },
       getElecsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64c8ed053e311fd1c7ffde88`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.elecs = response.data
          console.log(this.elecs)
        })
        .catch(function (error) {
          console.log(error)
        })

      },
      getCostsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64c8e9d6101025eb6e779f94`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.costs = response.data
          console.log(this.costs)
        })
        .catch(function (error) {
          console.log(error)
        })

      },
      getFurnsdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca20567aa3c47a778b69ff`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.furns = response.data
          console.log(this.furns)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      getBooksdata(){
        var config = {
        method: 'get',
        url: `http://localhost:3001/api/product?Category=64ca901df2a12d6bee4c3389`,

      }
      this.$axios(config)
        .then((response) => {
          
          this.books = response.data
          console.log(this.books)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
},

}
</script>


<style scoped>
.box {
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  
     
}
.title{
  display: flex;
  justify-content: space-between;
}
h3{
    color:  white ;
    font-weight: bold;
}
h4{
    color:  #063999 ;
    font-weight: bold;
}

h6{
    color: green;

}
.box1{
    display: flex;
    justify-content: space-between;
}
img{ height: 180px; width: 90%}
</style>