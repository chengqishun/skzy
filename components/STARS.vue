<template>
  <div @mouseenter="$emit('enter','STARS')"
       @mouseleave="$emit('leave','STARS')"
       class="faction yggdrasil"
       style="animation-duration: 0s;">
    <div class="icon-box">
      <svg id="图层_1"
           data-name="图层 1"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 46 43"
           class="icon yggdrasil">
        <defs>
          <style>
          .cls-1 {
            fill-rule: evenodd;
          }
          </style>
        </defs>
        <path d="M18.76,22.34h0L20.46,24h0l5.93,5.88.85-.84V26.19l-8.91-8.82,0,0-1.74-1.72V8.49l-1.69,1.68v3.77l-5.09-5v-5L7.72,6v4.2l2.13,2.09H5.18l-1.7,1.68h8.06L13.66,16H3.9L.51,19.4H3.9l1.28-1.26h9.33ZM23.85,9.75V17.3l3-2.94V11l3.39-3.36H38.7l-2.12-2.1H34V3L32.34,1.35v4.2H28.09ZM14.51,34.51H9L7.3,36.19v4.62L9,42.49V37l.85-.84h7.21l-1.27,1.26h-3.4L9.85,40v2.52l3-2.94h4.66l3.4-3.36,3.39,3.36h2.12l.85-.84-8.48-8.39Zm5.1-27.28v9.6L22,19.16l.18-.18V7.23l3-2.94h3.82L27.24,3H23.42L20.88,5.55,19.61,4.29,23.42.51H21.3l-3,2.94h-3L14.09,4.71h3ZM41.25,11H31.91l-3,2.93h0l-5.09,5V21l3.39,3.36V23.18l3.4-3.36H38.7L37,18.14H29.37l5.09-5h6.36l4.67,4.62V15.2ZM29.37,34.51l-1.28-1.25h0l-8.48-8.4-.85.83h0v2.95l8.1,8-.47-.47H36.58v1.26l1.7,1.68V35.77L37,34.51Zm-1.7,2.94,2.12,2.1h5.09l3,2.94V40l-2.54-2.52Z"
              class="cls-1"></path>
      </svg>
    </div>
    <div class="zh">众星</div>
    <div class="en">STARS</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>