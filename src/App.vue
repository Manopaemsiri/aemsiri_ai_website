<template>
  <!-- Banner 01 -->
  <section class="section-padding banner-01 bg-s">
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
  <!-- End Banner 01  -->

  <!-- Service -->
  <section class="bg-p">
    <div class="container max-w-full">
      <div class="grid grid-cols-12">
        <div class="md:col-span-4 sm:col-span-6 col-span-12">
          <div class="ss-card ss-card-01 card-left">
            <div class="wrapper">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M17.5 2h-16c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h7.5v2h-3.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-2h7.5c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM18 13.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v10z"></path>
                </svg>
              </div>
              <div class="text">
                <p class="h6 uppercase font-medium">How we work</p>
                <p class="ss-text-wrapper color-01 size-xxs">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-4 sm:col-span-6 col-span-12">
          <div class="ss-card ss-card-01 card-center">
            <div class="wrapper">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.5 15h-4c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
                  <path d="M13 20c-0.198 0-0.386-0.119-0.464-0.314l-1.697-4.242-2.963 3.386c-0.137 0.157-0.357 0.212-0.552 0.139s-0.324-0.26-0.324-0.468v-15c0-0.198 0.117-0.377 0.298-0.457s0.392-0.046 0.539 0.087l11 10c0.153 0.139 0.205 0.358 0.13 0.55s-0.26 0.32-0.466 0.32h-4.261l1.726 4.314c0.103 0.256-0.022 0.547-0.279 0.65l-2.5 1c-0.061 0.024-0.124 0.036-0.186 0.036zM11 14c0.028 0 0.056 0.002 0.084 0.007 0.172 0.029 0.315 0.146 0.38 0.307l1.814 4.536 1.572-0.629-1.814-4.536c-0.062-0.154-0.043-0.329 0.050-0.466s0.248-0.22 0.414-0.22h3.707l-9.207-8.37v12.539l2.624-2.999c0.096-0.109 0.233-0.171 0.376-0.171z"></path>
                </svg>
              </div>
              <div class="text">
                <p class="h6 uppercase font-medium">What we do</p>
                <p class="ss-text-wrapper color-01 size-xxs">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-4 sm:col-span-12 col-span-12">
          <div class="ss-card ss-card-01 card-right">
            <div class="wrapper">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5 15c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.646 3.646 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
                  <path d="M15 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.646-3.646-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z"></path>
                  <path d="M7.5 15c-0.091 0-0.182-0.025-0.265-0.076-0.234-0.146-0.305-0.455-0.159-0.689l5-8c0.146-0.234 0.455-0.305 0.689-0.159s0.305 0.455 0.159 0.689l-5 8c-0.095 0.152-0.258 0.235-0.424 0.235z"></path>
                </svg>
              </div>
              <div class="text">
                <p class="h6 uppercase font-medium">Get a quote</p>
                <p class="ss-text-wrapper color-01 size-xxs">
                  Lorem ipsum dolor sit amet consectetur adipiscing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Service -->

  <!-- About -->
  <section class="section-padding section-01 bg-s">
    <div class="container">
      <div class="grid grid-cols-12">
        <div class="md:col-span-6  col-span-12">
          <div class="text-container">  
            <p class="lg:text-8xl md:text-7xl text-6xl uppercase  letter-stroke font-medium text-center">aemsiri</p> 
            <p class="lg:text-8xl md:text-7xl text-6xl uppercase font-medium text-right margin-right-negative">creative</p> 
            <p class="text-right ss-text-wrapper size-2xs mr">
              We build and activate brands through cultural insight, 
              strategic vision, and the power of emotion across 
              every element of its expression.              
            </p>
          </div>
        </div>
        <div class="md:col-span-6 font-anton col-span-12">
          <div class="ss-img">
            <div class="img-bg" :style="{backgroundImage:'url(/public/assets/img/content/01.jpg)'}"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About -->
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



