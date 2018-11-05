<template>
  <section>
    <p>{{ this.date }}</p>
    <p>{{ this.time }}</p>
  </section>
</template>

<script>
export default {
  name: 'datetime',
  data() {
    return {
      date: '',
      time: '',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    };
  },
  methods: {
    setDate() {
      const today = new Date();
      this.date = `${this.days[today.getDay()]}, ${this.months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    },
    setTime() {
      const today = new Date();
      let hours = today.getHours();

      let meridiem = 'AM';
      if(hours >= 12) meridiem = 'PM';
      
      if(hours === 0) hours = 12;
      else if(hours > 12) hours = hours - 12;
      
      let minutes = today.getMinutes();
      if(minutes < 10) minutes = `0${minutes}`;
      
      this.time = `${hours <= 12 ? hours : hours - 12}:${minutes} ${meridiem}`;
    },
  },
  mounted() {
    this.setDate();
    this.setTime();

    window.setInterval(this.setDate, 1000);
    window.setInterval(this.setTime, 1000);
  },
};
</script>
