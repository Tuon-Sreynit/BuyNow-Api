<template>
    <div class="dashboard">
        <div>
            <v-container>
                <v-row>
                  <h2 class="ml-3" style="color: white">
                    Manage Movie
                  </h2>
                  </v-row>
                  <v-row>
                    <v-col  align="start ">
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        dense
                        filled
                        outlined
                        solo

                      ></v-text-field>
                    </v-col>
                    <v-col align="end" style="margin-top: 18px; margin-right: 12px">
                      <v-row justify="end">
                        <v-dialog v-model="dialog" persistent max-width="800px">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              style="
                                background-image: linear-gradient(  to top,#48c6ef 0%,   #6f86d6 100%  );
                                color: whitesmoke !important;
                                margin-left: 40px;
                              "
                            >
                              <h3>ADD</h3>
                            </v-btn>
                          </template>
                          <form @submit.prevent="save" >
                                 <v-card >
                            <v-card-title class="green green-darken-1 white--text">
                              <span class="text-h5 white--text">Add Movie</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col>

                                      <v-text-field
                                        label="Title"
                                        v-model="title"
                                        required
                                      ></v-text-field>
                                  </v-col>
                                  <v-col>
                                      <v-text-field
                                        label="Type"
                                        required
                                         v-model="type"
                                      ></v-text-field>
                                    </v-col>

                                  </v-row>
                                  <v-row>
                                  <v-col>
                                    <v-select
                                      :items="subcates"
                                      v-model="subcate"
                                      item-text="Subcategory_name"
                                      item-value="_id"
                                      label="Subcategory"
                                      required
                                    ></v-select>
                                  </v-col>
                                  <v-col>

                                      <v-text-field
                                        label="Year"
                                        required
                                        v-model="year"
                                      ></v-text-field>

                                  </v-col>

                                  </v-row>
                                  <v-row>
                                    <v-col>
                                      <v-text-field
                                        v-model="trailer"
                                        label="Trailer"
                                          outlined
                                      ></v-text-field>
                                     </v-col>
                                    </v-row>
                                    <v-row>
                                    <v-col>
                                      <v-text-field
                                        v-model="movie_link"
                                        label="Movie Link"
                                          outlined
                                      ></v-text-field>
                                     </v-col>
                                    </v-row>
                                     <v-row>
                                      <v-col>

                                      <v-text-field
                                        label="Description"
                                        v-model="description"
                                        outlined
                                        clearable
                                        required
                                      ></v-text-field>

                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col align="center">
                                      <v-file-input
                                          accept="image/png, image/jpeg, image/bmp"
                                          placeholder="Pick an image"
                                          prepend-icon="mdi-camera"
                                          label="Image"
                                          v-model="file"
                                        ></v-file-input>

                                            <div v-if="file">
                                        <img width="200" :src="createImageUrl(file)" />
                                      </div>

                                  </v-col>

                                  </v-row>

                              </v-container>
                              <!-- <small>*indicates required field</small> -->
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="dialog = false">
                                Cancel
                              </v-btn>
                              <v-btn :loading="isLoading"
                                :disabled="isLoading"
                                type="submit"  color="blue darken-1" text >
                                ADD
                              </v-btn>
                            </v-card-actions>
                            <div align="center" class="red--text font-weight-bold" v-if="status == 'ERROR'">
                              {{ message }}
                               </div>
                              <div align="center" class="green--text font-weight-bold" v-else>
                              {{ message }}
                               </div>
                          </v-card>
                          </form>



                        </v-dialog>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>

                  </v-row>
             </v-container>
        </div>
        <div style="padding:12px">
          <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="5"
          :search="search"
          class="elevation-1"

        >

        <template #[`item.movie_thumbnail`]="{ item }">
          <img class="py-1" :src="item.movie_thumbnail" height="80px" width="70px" style="border-radius: 10px; object-fit: fill"  />
        </template>
        <template v-slot:item.action="{ item }" >
          <div class="p-2" >
            <v-row class="pl-2">
              <addEPComponent  :id="item._id"/>
              <editEPComponent  :id="item._id"/>
              <editComponent :id="item._id" :subcates="subcates"/>
              <deleteComponent  :id="item._id"/>
                <!-- <v-btn icon
                    v-bind="attrs"
                    v-on="on">
                  <v-icon color="red">
                    mdi-delete
                  </v-icon>
                </v-btn> -->
            </v-row>
          </div>
        </template>
        <v-row>

         <v-col align="end">
           <template v-slot:item.status="{ item }">
           <v-chip
             :color="getColor(item.status)"
             dark
           >
             {{ item.status }}
           </v-chip>
         </template>
       </v-col>

        </v-row>

         </v-data-table>
       </v-container>
        </div>
    </div>
</template>
<script>
import EditComponent from '~/components/movie/editComponent.vue'
import deleteComponent from '~/components/movie/deleteComponent.vue'
import addEPComponent from '~/components/movie/addEPComponent.vue'
import editEPComponent from '~/components/movie/editEPComponent.vue'
export default {
  components:{
         EditComponent ,deleteComponent, addEPComponent,editEPComponent
 },

    data() {
      return {
      search: '',
      title:'',
      subcates:'',
      trailer:'',
      type:'',
      year:'',
      movie_link:'',
      description:' ',
      episode:[],
      isLoading: false,
      status: '',
      message: '',
      file:null,
      image_url:'',



       components:{
         EditComponent
       },

         headers: [

          { text: 'Title ', value: 'title', class: "green green-darken-1 white--text" },
          { text: 'Subcate ', value: 'subcategory.Subcategory_name', class: "green green-darken-1 white--text" },
          { text: 'Type', value: 'type', class: "green green-darken-1 white--text" },

          { text: 'Year', value: 'year', class: "green green-darken-1 white--text" },
          { text: 'Image', value: 'movie_thumbnail', class: "green green-darken-1 white--text" },
          // { text: 'Trailer', value: 'trailer', class: "green green-darken-1 white--text" },
          { text: 'Episoide', value: 'episode.length', class: "green green-darken-1 white--text" },
          // { text: 'Description', value: 'description', class: "green green-darken-1 white--text text-xs" },
          { text: 'Action', value: 'action', class: "green green-darken-1 white--text" },],

          products: [],

          dialog: false,
          rules: [
            (value) =>
              !value ||
              value.size < 2000000 ||
              'Image size should be less than 2 MB!',
          ],
      }
    },
     middleware: [
    'auth'
  ],
    created() {
      this.getSubCategoryData();
      this.getMovieData();

  },

    methods: {
      getMovieData(){
        const axios = require('axios');
      // let products=[]
            axios
                // .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie`)
                .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie`)
                .then((res) => {

                  this.products= res.data
                  console.log(this.products)

                })
                .catch((error) => {
                console.log(error.response)

                })
      },
        getSubCategoryData(){
      const axios = require('axios');

            axios
                // .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/`)
                  .get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/subcategory/`)
                .then((res) => {

                  this.subcates= res.data
                  console.log(this.subcates)

                })
                .catch((error) => {
                console.log(error.response)

      })

      },
       async save() {




      this.isLoading = true

        let image_url = ''

        try {
          if (this.file) {
            let formData = new FormData()
            formData.append('file', this.file)
            // const res = await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/upload-image', formData)
            const res = await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/upload-image', formData)
            this.image_url = res.data
          }

           let data = {

          title:this.title,
          description:this.description,
          type:this.type,
          year:this.year,
          movie_link:this.movie_link,
          trailer:this.trailer,
          subcategory:this.subcate,
          episode:this.episode,
          movie_thumbnail: this.image_url.data
        }

        // await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/add', data)
        await this.$axios.post('https://sabay-entertainment-movie-api-1308.onrender.com/api/movie/add', data)

        this.$nuxt.$emit('getProduct')
        this.status = 'OK'
        this.message = 'Success'
        this.dialog = false
        location.replace('/manage_movie')

      } catch (error) {
        this.status = 'ERROR'
        this.message = 'Something went wrong'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },

    createImageUrl(file) {
      return URL.createObjectURL(file)
    },
  },

      }

</script>

<style scoped>
.dashboard{
    color: white;
    margin-left:30px;
    margin-right: 30px;
  }
</style>
