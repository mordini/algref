<template>
  <algorithm-card id="algorithmCard" name="algorithmCard"> </algorithm-card>
  <div
    class="grid-container"
    :class="{
      blurred: gridIsBlurred,
    }"
  >
    <the-algorithm
      v-for="item in cases"
      class="grid-item"
      :id="item.name"
      :name="item.name"
      :image="item.image"
      :algorithm="item.algorithm"
      :type="item.type"
      :caseName="item.name"
      :key="item.name"
      @blur-grid="blurGrid"
    >
    </the-algorithm>
  </div>
</template>

<script>
import TheAlgorithm from './components/Algorithm.vue';
import Cases from '@/assets/Cases.js';
// import AlgorithmCard from './components/AlgorithmCard.vue';

export default {
  name: 'App',
  components: {
    // do not need to set it specifically as attr, will work fine with just the name
    TheAlgorithm,
    // TheAlgorithm: TheAlgorithm,
    // AlgorithmCard: AlgorithmCard,
  },
  data() {
    return {
      cases: Cases,
      selected: false,
      showCase: false,
      displayCase: '',
      gridIsBlurred: false,
    };
  },
  methods: {
    blurGrid() {
      this.gridIsBlurred = !this.gridIsBlurred;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* grid-template-columns: auto minmax(0, 1fr); */
  background-color: lightblue;
  padding: 10% 10% 10% 10%;
  /* margin: 0% 0% 10% 0%; */
}
.blurred {
  filter: blur(6px);
  transition: all 0.2s linear 0s;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 10% 10% 10% 10%;
  margin: 0 0 0 0;
  text-align: center;
}
.sidebar {
  grid-row-start: 1;
  grid-row-end: 4;
}
.left-sidebar {
  width: 20%;
  height: 100%;
  position: fixed;
  outline: 1px solid;
  background: red;
  overflow: scroll;
  font-size: 75%;
}
footer {
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  outline: 1px solid;
  overflow: scroll;
  font-size: 75%;
  background: orange;
  height: 20%;
  margin: 0% 0% 0% 0%;
  position: fixed;
}
</style>
