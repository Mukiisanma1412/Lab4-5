<template>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <p>Trips : {{ passenger.trips }}</p>

    <div class="list">
      <p v-if="!(Array.isArray(passenger.airline))">
        Airline : {{ airlines.name }}
      </p>
      <AirlineCard
        v-else
        v-for="airline in airlines"
        :key="airline.id"
        :airline="airline"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import EventService from "@/services/EventService.js";
import AirlineCard from "@/components/AirlineCard.vue";

export default {
  name: "PassengerDetail",
  props: ["id"],
  components: {
    AirlineCard,
  },

  data() {
    return {
      passenger: null,
      airlines: null,
    };
  },
  created() {
    EventService.getPassengerDetail(this.id)
      .then((response) => {
        this.passenger = response.data;
        this.airlines = response.data.airline;
      })
      .catch((error) => {
        console.log(error);
        this.$router.push({name : 'NotFound'})
      });
  },
};
</script>
