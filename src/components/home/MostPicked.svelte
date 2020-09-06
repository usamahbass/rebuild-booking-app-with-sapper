<script>
  import Card from '../shared/Card.svelte'

  let card_lg = true
  let card_md = true
</script>

<div class="row picked mt-5 ">
  <h1 class="tour-title">Most Picked</h1>
    <div class="col-lg-4 col-sm-12 mt-2">
      <Card
        {card_md}
        
      />
    </div>
</div>
