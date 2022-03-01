<template>
  <section
    class="case"
    :class="{
      blurred: isBlurred,
      selected: isSelected,
      notSelected: Selected
    }"
    @click="selectCase"
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
      isBlurred: false,
      isSelected: false,
      firstLoad: true
    };
  },
  methods: {
    selectCase() {
      /*
        if(isSelected is true
            and
          isSelected is not the one clicked on) {
              don't do anything
        } else {
          this.isSelected = !this.isSelected;
        }
      */
      // if(!this.isSelected && this.id)

      this.isSelected = !this.isSelected;
      console.log(`this.isSelected is: ${this.isSelected}`);
      console.dir(event.target);
      // console.log(`${event.target}`);
      //this.blurCases();
    },
    // PAUL NEED TO MAKE THIS BLUR WHOLE PAGE BUT NOT SELECTED
    blurCases() {
      console.log(`blur cases`);
      this.isBlurred = !this.isBlurred;
      console.log(`this.isBlurred is: ${this.isBlurred}`);
    }
  },
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
.blurred:not(selected) {
  filter: blur(6px);
  transition: all 0.2s linear 0s;
  /* zoom: 0.4; */
}
.selected_OLD {
  transition: all 0.2s linear 0s;
  transform-origin: center;
  transform: scale(3);
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
