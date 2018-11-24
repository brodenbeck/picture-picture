<template>
  <div>
    <date-time></date-time>
    <cat-fact></cat-fact>
    <weather-widget></weather-widget>
  </div>
</template>

<script>
import CatFact from './components/CatFact';
import DateTime from './components/DateTime';
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
    'cat-fact': CatFact,
    'date-time': DateTime,
    'weather-widget': Weather,
  },
};
</script>

<style lang="scss"></style>
