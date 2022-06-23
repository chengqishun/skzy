<template>
  <div class="faction-list">
    <YGGDRASIL @click.native="$emit('enter','YGGDRASIL')"
               :class="{hover:show,active:name === 'YGGDRASIL'}"
               @enter="mouseenter"
               @leave="mouseleave"></YGGDRASIL>
    <SAKURA @click.native="$emit('enter','SAKURA')"
            :class="{hover:show,active:name === 'SAKURA'}"
            @enter="mouseenter"
            @leave="mouseleave"></SAKURA>
    <NIRO @click.native="$emit('enter','NIRO')"
          :class="{hover:show,active:name === 'NIRO'}"
          @enter="mouseenter"
          @leave="mouseleave"></NIRO>
    <OLYMPIA @click.native="$emit('enter','OLYMPIA')"
             :class="{hover:show,active:name === 'OLYMPIA'}"
             @enter="mouseenter"
             @leave="mouseleave"></OLYMPIA>
    <STARS @click.native="$emit('enter','STARS')"
           :class="{hover:show,active:name === 'STARS'}"
           @enter="mouseenter"
           @leave="mouseleave"></STARS>
  </div>
</template>

<script>
export default {
  data() {
    return { show: false, name: "" };
  },
  methods: {
    mouseenter(name) {
      this.name = name;
      this.show = true;
    },
    mouseleave() {
      this.name = "";
      this.show = false;
    },
    c() {
      console.log("c");
    },
  },
};
</script>

<style>
</style>