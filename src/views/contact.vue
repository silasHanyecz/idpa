<template>
  <div class="container">
    <h1>Kontakt</h1>
    <div class="row">
      <div class="col-sm-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="inputComment" class="form-label">Kommentar</label>
            <textarea class="form-control" id="inputComment" rows="6" cols="50"/>
          </div>
          <button type="submit" class="btn btn-primary">Absenden</button>
        </form>
      </div>
      <div class="col-sm p-4 position-relative ">
        <div class="p-3" style="position: absolute; top: 10px; right: 10px;background-color: #b1bde7; border-radius: 10px;">
          <p>Sebastian Ebner</p>
          <p>sebastian.ebner@bbzsogr.ch</p>
          <p>+41 78 187 33 33</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
</script>