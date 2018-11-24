<template>
  <div>
    <date-time></date-time>
    <cat-fact></cat-fact>
  </div>
</template>

<script>
import CatFact from './components/CatFact';
import DateTime from './components/DateTime';

export default {
  name: 'App',
  components: {
    'cat-fact': CatFact,
    'date-time': DateTime,
  },
};
</script>

<style lang="scss"></style>
