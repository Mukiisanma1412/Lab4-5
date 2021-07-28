<template>
  <div class="list">  
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from "@/components/PassengerCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "PassengerList",
  components: {
    PassengerCard,
  },
  data() {
    return {
      passengers: null
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.passengers = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>