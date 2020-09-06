<script>
  export const alt = ''
  export let image
  export let title
  export let location
  export let price
  export let card_lg = false
  export let card_md = false
  export let card_sm = false
</script>

<div
  class="custom-card"
  class:card_lg
  class:card_md
  class:card_sm
  on:click
  style=" background-image: linear-gradient( 180deg, rgba(0, 0, 0, 0) 50%,
  rgba(0, 0, 0, 0.5) 100% ), url({image}); ">
  <div class="custom-card__badge">
    <span>{price}</span>
  </div>

  <div class="custom-card__desc">
    <h3>{title}</h3>
    <p>{location}</p>
  </div>
</div>
