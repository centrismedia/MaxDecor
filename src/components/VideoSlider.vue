<template>
  <section class="slider-prod__container">
    <img
      class="slider-prod__big-img-1"
      :class="{ 'slider-prod__img-active': activeImage === 'img1' }"
      :src="first"
      alt=""
    />
    <img
      class="slider-prod__big-img-2"
      :class="{ 'slider-prod__img-active': activeImage === 'img2' }"
      :src="second"
      alt=""
    />
    <video
      loop
      autoplay
      muted
      class="slider-prod__big-video"
      :class="{ 'slider-prod__img-active': activeImage === 'video' }"
      :src="video"
      ref="video"
    ></video>

    <div class="slider-prod__gradient"></div>

    <div class="slider-prod__btn-container">
      <div class="slider-prod__btn-3" @click="showVideo">
        <div class="slider-prod__btn-3_wrapper">
          <img class="btn-3_wrapper__btn-play" :src="playBtn" alt="" />
          <img class="btn-3_wrapper__poster" :src="playposter" alt="" />
        </div>
      </div>
      <div class="slider-prod__btn-1" @click="showImage('img1')">
        <img :src="first" alt="" />
      </div>
      <div class="slider-prod__btn-2" @click="showImage('img2')">
        <img :src="second" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      video: require("@/assets/video/10501.mp4"),
      playBtn: require("@/assets/img/product/playBtn-video-prod.svg"),
      playposter: require("@/assets/img/product/video-prod-poster.png"),
      first: require("@/assets/img/product/big_kitchen.jpg"),
      second: require("@/assets/img/product/10501-4.jpg"),
      activeImage: 'img1' // Initially set to 'img1'
    };
  },
  methods: {
    showImage(image) {
      this.activeImage = image;
      this.$refs.video.pause();
    },
    showVideo() {
      this.activeImage = 'video';
      this.$refs.video.play();
    }
  }
};
</script>

<style>
/* Add any necessary styles for the component here */
</style>
