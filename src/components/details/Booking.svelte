<script>
  import DatePicker from 'svelte-calendar'
  import { Booking, MostPickedStore } from '../../store/store.js'

  let booking
  let price
  Booking.subscribe((value) => (booking = value))
  MostPickedStore.subscribe((value) => (price = value.price))

  const increment = () => {
    booking.counter++
  }

  const decrement = () => {
    booking.counter--
  }

  const handleSubmit = () => {
    console.log(booking)
  }
</script>

<div class="col-lg order-lg-2 order-sm-1 order-xs-1 mt-5">
  <div class="custom_booking">
    <div class="custom_booking__in">
      <h1 class="booking-title">Start Booking</h1>
      <h2 class="booking-pricing">
        ${price}
        <span class="muted">per night</span>
      </h2>

      <!-- Counter -->

      <div id="counter" class="mb-3">
        <small>How long you will Stay?</small>
        <div class="input-group mt-3">
          <button class="btn btn-custom btn-danger btn-sm" on:click={decrement}>
            -
          </button>
          <input
            type="number"
            class="form-control text-center"
            value={booking.counter} />
          <button
            class="btn btn-custom btn-success btn-sm"
            on:click={increment}>
            +
          </button>
        </div>
      </div>

      <div id="pickdate">
        <small>Pick a Date</small>
        <DatePicker
          highlightColor="#3252df"
          bind:formattedSelected={booking.date} />
        <div class="desc-book text-muted mt-3">
          You will pay
          <span class="text-primary-2">${price} USD</span>
          per
          <span class="text-primary-2">{booking.counter} nights</span>
        </div>
      </div>

      <button
        class="btn btn-custom btn-booking btn-primary btn-block mt-3 mx-auto"
        on:click={handleSubmit}>
        Continue to Book
      </button>

    </div>
  </div>
</div>
