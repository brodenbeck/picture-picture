<template>
  <p v-show="fact.length > 0">🐱 {{ fact }} 🐱</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CatFact',
  data() {
    return {
      fact: '',
    };
  },
  created() {
    axios.get('https://catfact.ninja/fact')
      .then(response => this.fact = response.data.fact)
      .catch(error => console.log(error));
  },
};
</script>
