<template>
  <div>
    <PosterBanner/>
    <CategoryList/>
    <div style="margin-top: 30px;">
       <ProductList/>
    </div>
   
  </div>


</template>

<script>
import PosterBanner from '~/components/PosterBanner.vue';
import CategoryList from '~/components/CategoryList.vue';
import ProductList from '../components/ProductList.vue';

export default {

  components:{ 
   PosterBanner,
   CategoryList,
   ProductList
  }
}
</script>
<style>

</style>
