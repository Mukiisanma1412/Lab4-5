<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <p>Trips : {{ passenger.trips }}</p>
   <p>Airline : {{ passenger.airline.name }} </p>

  </div>
</template>

<script>
// @ is an alias to /src

import EventService from "@/services/EventService.js";

export default {
  name: "PassengerDetail",
  props: ["id"],

  data() {
    return {
      passenger: null,
    };
  },
  created() {
    EventService.getPassengerDetail(this.id)
      .then((response) => {
        this.passenger = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
