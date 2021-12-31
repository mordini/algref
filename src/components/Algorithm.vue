<template>
  <section class="case">
    <p class="name">
      {{ name }}
    </p>
    <img :src="require(`@/assets/cases/${image}`)" />
    <!-- get each algorithm in array of algorithms per case from cases object -->
    <div v-for="(alg, index) in algorithm" :key="alg">
      <p>
        <b>{{ index + 1 }}: </b>
        <span class="alg"> {{ alg }} </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Algorithm',
  props: { name: String, image: String, algorithm: Array, type: String },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style>
.name {
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
