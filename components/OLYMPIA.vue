<template>
  <div @mouseenter="$emit('enter','OLYMPIA')"
       @mouseleave="$emit('leave','OLYMPIA')"
       class="faction sakura"
       style="animation-duration: 0s;">
    <div class="icon-box">
      <svg data-v-7b862320=""
           id="图层_1"
           data-name="图层 1"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 43 40"
           class="icon olympia">
        <defs data-v-7b862320="">
          <style data-v-7b862320="">
          .cls-1 {
            fill-rule: evenodd;
          }
          </style>
        </defs>
        <path data-v-7b862320=""
              d="M17.44,13.34V28.76l-3.87,3.85v-18l2.58-2.57Z"
              class="cls-1"></path>
        <polygon data-v-7b862320=""
                 points="8.41 0.92 2.39 6.92 9.27 13.77 13.57 9.49 10.99 6.92 9.27 8.63 7.55 6.92 10.56 3.92 18 11 28.2 0.92 8.41 0.92"
                 class="cls-1"></polygon>
        <polygon data-v-7b862320=""
                 points="37.23 0.92 30.78 0.92 19.16 11.92 19.16 16.34 20.45 17.62 34.22 3.92 37.23 6.92 35.51 8.63 33.79 6.92 31.21 9.49 35.51 13.77 42.39 6.92 37.23 0.92"
                 class="cls-1"></polygon>
        <polygon data-v-7b862320=""
                 points="30.78 12.49 29.48 11.2 19.16 21.48 19.16 28.76 13.63 34.33 8.41 34.33 4.11 38.61 17.87 38.61 24.32 32.19 24.32 22.34 30.78 15.91 30.78 12.49"
                 class="cls-1"></polygon>
        <polygon data-v-7b862320=""
                 points="36.35 34.31 30.81 34.31 30.78 18.48 26.05 23.19 26 32.66 20.02 38.61 40.67 38.61 36.35 34.31"
                 class="cls-1"></polygon>
      </svg>
    </div>
    <div class="zh">奥山</div>
    <div class="en">OLYMPIA</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.olympia {
  height: 108px;
  margin-bottom: 8px;
}
</style>