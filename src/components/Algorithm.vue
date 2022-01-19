<template>
  <section class="case">
    <p class="caseName">
      {{ caseName }}
    </p>
    <img :src="require(`@/assets/cases/${image}`)" />
    <!-- GET EACH ALGORITHM (the literal sequence of moves) IN ARRAY OF ALGORITHMS PER CASE FROM CASES OBJECT -->
    <div v-for="(alg, index) in algorithm" :key="alg">
      <b>{{ index + 1 }}: </b>
      <span class="alg"> {{ alg }} </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Algorithm',
  props: { caseName: String, image: String, algorithm: Array, type: String },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style>
.caseName {
  color: red;
  font-size: 200%;
}
.alg {
  color: purple;
  background-color: white;
}
.case {
  border-style: groove;
  padding: 0 0 0 0;
  margin: 0 0 1% 0;
  background-color: lightblue;
}
.p {
  font-family: 'Calibri';
  font-size: x-small;
}
</style>
