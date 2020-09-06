<script>
  export let myDetails = ''
  export let name = ''
  export let location = ''
</script>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#/" class="text-decoration-none">Home</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">{name}</li>
  </ol>

</nav>

<div class="text-center">
  <h3>{name}</h3>
  <p class="text-muted">{location}</p>
</div>
