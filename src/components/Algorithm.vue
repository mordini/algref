<template>
  <section
    @click="selectCase"
    class="case"
    :class="{
      selected: isSelected,
      centered: isCentered,
    }"
  >
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
    return {
      isSelected: false,
      isCentered: false,
      firstLoad: true,
    };
  },
  methods: {
    selectCase() {
      this.isSelected = !this.isSelected;
      // this.isCentered = !this.isCentered;
      console.log(`this.isSelected is: ${this.isSelected}`);
      console.dir(event.target);
      // console.log(`${event.target}`);
      this.blurCases();
    },
    // PAUL NEED TO MAKE THIS BLUR WHOLE PAGE BUT NOT SELECTED
    // PAUL NOW BLURS WHOLE GRID BUT ALSO SELECTED
    // TELL IT TO NOT BLUR?
    // TELL IT TO NOT BE in GRID? <--- I LIKE THIS ONE
    // ADD A SLOT FOR SELECTED ITEMS
    blurCases() {
      console.log(`blur cases`);
      this.$emit('blur-grid');
      // this.isBlurred = !this.isBlurred;
    },
  },
  computed: {},
  watch: {},
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
.selected {
  transition: all 0.2s linear 0s;
  transform-origin: center;
  transform: scale(3);
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
.centered {
  position: sticky;
  top: 50%;
  left: 50%;
}
#section {
  transition: all 0.2s linear 0s;
  transform-origin: center;
  transform: scale(3);
}
#section:selected {
  transition: all 0.2s linear 0s;
  transform-origin: center;
  transform: scale(3);
}
</style>
