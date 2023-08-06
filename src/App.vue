
<template>
  <!-- Start Banner 01 -->
  <section class="section-padding banner-01 bg-p">
    <div class="bg-overlay"></div>
    <div class="container">
      <swiper>
        <swiper-slide v-for="(image, index) in imgBg" :key="index">
          <div class="img-bg" :style="{backgroundImage:'url('+ image + ')'}"></div>
          <div class="text-wrapper">
            <div class="ss-sub-title">
              <div class="circle"></div>
              <span class="font-medium">Production</span>
            </div>
            <h1 class="uppercase font-medium font-anton text-8xl">headphones</h1>  
            <p class="ss-text-wrapper size-md mt-3 color-01">
              ABOUT THE PROJECT Mode is an audio range designed 
              to provide optimal performance
              and comfort for every mode of use.                   
            </p> 
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- End Banner 01 -->
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/css';

  export default{
    data() {
      return {
        imgBg: [
          '/public/assets/banner/01.jpg', 
          '/public/assets/banner/02.jpg',
          '/public/assets/banner/03.jpg',
          '/public/assets/banner/04.jpg',
          '/public/assets/banner/05.jpg',
          '/public/assets/banner/06.jpg'
        ],
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    }, 
  }
</script>



