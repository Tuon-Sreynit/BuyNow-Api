<template>
    <div style="margin-top: 140px">
         <v-container>
            <v-row>
                <v-col align="center"> <h2>Order</h2></v-col>
            </v-row>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                        <h3>Username</h3>
                      </th>
                    <th class="text-left">
                      <h3>Product Name</h3>
                    </th>
                   
                    <th class="text-left">
                       <h3>Unit Price</h3> 
                      </th> 
                      <th class="text-left">
                      <h3>Quantity</h3>
                    </th>
                      <th class="text-left">
                        <h3>Total Price</h3>
                      </th>
                      <th class="text-left">
                        <h3>Status</h3>
                      </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in desserts"
                    :key="item.name"
                  >
                  <td>{{ item.username }}</td>
                    <td>{{ item.name }}</td>
                  
                    <td>{{ item.unitprice }}</td> 
                     <td>{{ item.quanity }}</td>
                    <td>{{ item.totalprice }}</td>
                    <td>{{ item.status}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-row>
                <v-col align="end">
                 
                        <div class="total" style="display:flex; justify-content: flex-end; padding: 15px">
                           
                                 <h3 >Total: <span style="color: red"> 7.80 </span>$</h3>
                         
                           
                         </div>
                  
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data () {
      return {
        desserts: [
          {
            username:'Mony',
            name: 'Strawberry Dress',
            quanity: 1, 
            unitprice: 7.80, 
            totalprice: 7.80,
            status: "Paid"
          },
        
        ],
      }
    },
  }
</script>
<style>

</style>