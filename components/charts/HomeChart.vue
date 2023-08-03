<template>
    <div v-if="chartOptions.xaxis.categories.length > 0">
      <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
 </template>

<script>
import axios from 'axios'
export default {
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: []
          }
        },
        series: [{
          name: 'Amount',
          data: []
        }]
      }
    },

    created () {
        this.getPaymentAnalysis();

    },

    methods: {
        getPaymentAnalysis() {
            axios.get(`https://sabay-entertainment-movie-api-1308.onrender.com/api/payment`)
                .then((res) => {
                    console.log('get payment analysis', res.data)
                    let all = res.data;
                    const groupedData = all.reduce((result, item) => {
                    const createdAt = item.createdAt.split('T')[0]; // Extract the date part from createdAt
                    if (!result[createdAt]) {
                      result[createdAt] = {
                        totalPrice: 0
                      };
                    }
                    result[createdAt].totalPrice += item.plan.price;
                    return result;
                  }, {});

                  console.log(groupedData);
                  this.chartOptions.xaxis.categories = Object.keys(groupedData)
                  this.series[0].data = Object.values(groupedData).map((group) => group.totalPrice)

                  console.log(this.chartOptions)
                  console.log(this.series)

                  const totalPrice = Object.values(groupedData).reduce((sum, group) => {
                    return sum + group.totalPrice;
                  }, 0);

                  console.log(totalPrice);

                  this.$nuxt.$emit('get-total-sale', totalPrice)


                }).catch((error) => {
                    console.error(error)
                })
        }
    },
};
</script>