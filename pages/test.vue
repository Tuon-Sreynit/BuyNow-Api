<template>
  <div style="margin-top: 140px; padding: 20px">
    <v-container>
      <v-row>
        <v-col md="3" class="d-none d-md-block">
          <v-card class="category_class" max-width="250">
            <h4>Categories</h4>
            <v-divider></v-divider>
            <v-list>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content v-if="item.title == 'All'">
                    <v-list-item-title @click="selectFilter('', '')" v-text="item.title"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content v-else>
                    <v-list-item-title  v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="child in item.items" :key="child.title">
                                <!-- <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                          </v-list-item-content> -->
                  <v-btn text @click="selectFilter(item.title, child.title)">{{
                    child.title
                  }}</v-btn>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
          <v-card class="pa-8" outlined height="380" width="250">
            <h3>Sort</h3>
            <v-select
              height="20px"
              :items="things"
              label="Sort Price"
              outlined
            ></v-select>
            <h3>Price</h3>
            <v-row>
              <div
                style="
                  display: flex;
                  justify-content: space-evenly;
                  margin-top: 10px;
                  padding: 12px;
                  gap: 10px;
                "
              >
                <div><p>From</p></div>
                <div>
                  <v-text-field width="80px" outlined dense></v-text-field>
                </div>
                <div><p>to</p></div>
                <div>
                  <v-text-field width="80px" outlined dense></v-text-field>
                </div>
              </div>
            </v-row>
            <v-row>
              <v-col align="end">
                <v-btn color="blue ">
                  <v-icon color="white">mdi-filter</v-icon>
                  <h4>Filter</h4></v-btn
                ></v-col
              >
            </v-row>
          </v-card>
        </v-col>
        <v-col md="9">
          <v-card class="category_list">
            <div class="header_list py-3">
              <div>
                <h3>Showing All Results</h3>
              </div>
              <div class="header_list_right">
                <!-- <div>
                  <h3>12 items</h3>
                </div> -->
              </div>
            </div>
            <v-divider></v-divider>
            <div class="filter">
              <v-row>
                <v-col></v-col>
              </v-row>
            </div>
            <div>
              <v-row>
                <v-col
                v-for="product in products"
                  :key="product.id"
                  cols="12"
                  sm="3"
                  v-show="filterProducts(product)"
                >
                  <v-card
                    class="mx-auto"
                    max-width="360"
                    style="padding: 10px"
                    outline
                  >
                    <nuxt-link style="text-decoration: none" :to="`/product/${product.id}`">
                   
                      <center>
                        <img
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                          width="100%"
                          :src="product.image"
                        />
                      </center>
                      <h5>{{ product.name }}</h5>
                      <h4>{{ product.price }} $</h4>
                      <div class="box1">
                        <div>
                          <h6>IN STOCK</h6>
                        </div>
                        <div>
                          <v-btn icon color="pink" style="margin-top: -15px">
                            <v-icon dark small>mdi-cart</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </nuxt-link>
                  </v-card>
                </v-col>
                      </v-row>
            </div>
            <!-- <div>
                      <v-row>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v7664355527186068357/products/84715.main.png&height=100&width=100&outputFormat=JPEG"></center>
                            <h5>Rose Coconut Oil</h5>
                            <h4>$ 22.95</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://www.thaiwholesaler.com/wp-content/uploads/2022/11/71MIBIfMH9L-247x296.jpg"></center>
                            <h5>Egg White Peel Off Mask</h5>
                            <h4>$ 4.09</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/SAMSUNG/Phone/Galaxy-A-04/copper1-16722792541ybJB.jpg"></center>
                            <h5>Galaxy A04</h5>
                            <h4>$ 139</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://res.cloudinary.com/lautsprecher-teufel/image/upload/c_lfill,f_auto,q_auto,w_800/v1/products/AIRY_SPORTS/airy-sports-main-night-black.jpg"></center>
                            <h5>AIRY SPORTS</h5>
                            <h4 style="color: blue">$ 25</h4>
                            <div class="box1">
                              <v-row>
                                <v-col cols="12" sm="6">
                                  <div>
                                    <h6 style="color: green">IN STOCK</h6>
                                  </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <div>
                                    <v-btn icon end color="pink"  style="margin-top: -15px">
                                      <v-icon dark small>mdi-cart</v-icon>
                                    </v-btn>
                                  </div>
                                </v-col>
                              </v-row>
                                
                                
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                      </v-row>
                     </div> -->
            <!-- <div>
                      <v-row>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://d3i908zd4kzakt.cloudfront.net/data/item/1667528964/thumb-33_405x405.jpg"></center>
                            <h5>[heimish] Dailism Liquid Lipstick</h5>
                            <h4>$ 11.02</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://soklyphone.com/storage/Accessories/WiWU/WiWU-Waltz-Rotating-iPad-Case-11/black-1670985150TTJVO.jpg"></center>
                            <h5>WiWU Waltz Rotating Case iPad 11''</h5>
                            <h4>$ 21.10</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://thebodyshop.com.kh/media/catalog/product/cache/1/image/478x/040ec09b1e35df139433887a97daa66f/h/y/hybrisimages_1020032_2_mascara_super_volume_01_10ml_silv_pck_inmbsps524.jpg"></center>
                            <h5>Mascara Super Volume</h5>
                            <h4>$ 13.50</h4>
                            <div class="box1">
                                <div>
                                  <h6>IN STOCK</h6>
                                </div>
                                <div>
                                  <v-btn icon color="pink"  style="margin-top: -15px">
                                    <v-icon dark small>mdi-cart</v-icon>
                                  </v-btn>
                                </div>
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3">
                          <v-card class="mx-auto"  max-width="360" style="padding: 10px; " outline>
                            <nuxt-link style="text-decoration:none" to="/product/1">
                            <center><img class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" src="https://thebodyshop.com.kh/media/catalog/product/cache/1/image/478x/040ec09b1e35df139433887a97daa66f/w/e/webimages_range_5_powder_matte_clay_range_square_range_sqr_inneops416_m_l.jpg"></center>
                            <h5>Matte Clay Powder</h5>
                            <h4 style="color: blue">$ 55.45</h4>
                            <div class="box1">
                              <v-row>
                                <v-col cols="12" sm="6">
                                  <div>
                                    <h6 style="color: green">IN STOCK</h6>
                                  </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <div>
                                    <v-btn icon end color="pink"  style="margin-top: -15px">
                                      <v-icon dark small>mdi-cart</v-icon>
                                    </v-btn>
                                  </div>
                                </v-col>
                              </v-row>
                                
                                
                            </div>
                            </nuxt-link>
                          </v-card>
                        </v-col>
                      </v-row>
                     </div> -->
            <div class="py-2">
              <template>
                <div class="text-center">
                  <v-pagination
                    v-model="page"
                    :length="3"
                    @input="handlePageChange"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                  ></v-pagination>
                </div>
              </template>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    cat_id: '',
    sub_id: '',
    cate:[],
    products: [],
    page: 1,
    itemsss:[],
    items: [
      {
        title: 'All',
        active: true,
      },
      {
        items: [{ title: 'Woman' , id:1 }, { title: 'Man'  ,id:2 }, { title: 'Kid', id:3 }],
        title: 'Clothes',
      },
      {
        items: [
          { title: 'American' },
          { title: 'Korean' },
          { title: 'Thailand' },
        ],
        title: 'Cosmetic',
      },
      {
        items: [
          { title: 'Headphone' },
          { title: 'Phone' },
          { title: 'Accessory' },
        ],
        title: 'Electronics',
      },
      {
        items: [{ title: 'Table' }, { title: 'Chair' }, { title: 'Sofa' }],
        title: 'Furniture',
      },
    ],
    things: ['Default', 'High to Low Price', 'Low to High Price'],
  }),
  
  watch: {
    '$route.query': {
      handler() {
        this.getProductdata()
        this.getCatedata()
      },
      deep: true,
    },
  },

  created() {
    this.getProductdata()
    this.getCatedata()
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

          let all = response.data
          let name = this.$route.query.search
          // name = name.toLowerCase()

          let products = []
          if(name) {
            all.forEach((p) => {
              let lowerName = p.name.toLowerCase()
              if(lowerName.includes(name)) {
                products.push(p)
              }
            })

            this.products = products
          } else {
          this.products = response.data
          }

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    categoryClick(id) {
      var config = {
        method: 'get',
        url: `http://localhost:3001/api/category/${id}`,
        headers: { 
          'Accept': 'application/json', 
          'Authorization': 'Bearer 35|1ZCov5ygIqFpW6mQgwh5wPWG8cDgmBFDEczWbV6z', 
   
  },
      }
      this.$axios(config)
        .then((response) => {
            this.itemsss = response.data
          console.log("itemsss", this.itemsss)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    selectFilter(cat_id, sub_id) {
    this.cat_id = cat_id;
    this.sub_id = sub_id;
  },

  filterProducts(product) {
    let show = false

    console.log(product.sub_category, this.sub_id);

    if(!this.sub_id) {
      show = true
      return show
    } else {
      if(product.sub_category == this.sub_id) {
        show = true
        return show
      }
    }
    
  },
  getCatedata(){}

  },

 
}
</script>
<style scoped>
.category_class {
  padding: 20px;
}
.category_list {
  padding: 15px;
}
.header_list {
  display: flex;
  justify-content: space-between;
}
.header_list_right {
  display: flex;
  gap: 20px;
}
h3 {
  color: #000030;
}

h4 {
  color: #063999;
  font-weight: bold;
}

h6 {
  color: green;
}
.box1 {
  display: flex;
  justify-content: space-between;
}
img {
  height: 180px;
  width: 90%;
}
</style>
