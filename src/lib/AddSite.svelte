<script>
  let title = '';
  function addSite() {
// todo add function
    
    title = '';
  }
</script>

<form>
<div class="field is-horizontal">
  <div class="field-body">
     <div class="field">
        <label for="title" class="label">Add A Site</label>
        <input bind:value={title} id="title" class="input" type="text" placeholder="Enter a site" name="title" />
      </div>
      <div class="field">
      <div class="control">
          <button class="button is-link" on:click={addSite}>Add Site</button>
          </div>
      </div>
    </div>
  </div>
</form>
      
  
