import { writable } from "svelte/store";

export let Booking = writable({
  counter: 0,
  date: undefined,
});
