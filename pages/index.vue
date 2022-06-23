<template>
  <div class="pc-wrapper">
    <Navbar class="animate__animated animate__fadeInDown"></Navbar>
    <NavLine v-if="page !== 0"></NavLine>
    <MainSwiper></MainSwiper>

    <VideoWrapper></VideoWrapper>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  computed: {
    ...mapState(["page"]),
  },
  asyncData({ $axios }) {},
};
</script>

<style lang="scss">
</style>
