<template>
  <div>
    <h1 :class="{ red: isBind }">Class Bind</h1>
    <button @click="setBind">바인딩</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBind: false,
    };
  },
  methods: {
    setBind() {
      this.isBind = !this.isBind;
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>