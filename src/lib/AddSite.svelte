<script>
  import { onMount } from "svelte";
  import { placemarkService } from "../routes/services/placemark-service";
	
  let title = '';
  let guideList =[];
  let selectedGuide = '';
  let user = '';
  let message = "Please choose a site and a guide";

  onMount(async () => {
    guideList = await placemarkService.getGuides();

  });

  async function addSite() {
    if(title && selectedGuide){
      const guideNames = selectedGuide.split(",");
      const guide = guideList.find((guide) => guide.lastname == guideNames[0] && guide.firstname == guideNames[1]);
      const addSite = {
        title: title,
        guide: guide._id
      };
      const success = await placemarkService.addSite(site);

    if (!success) {
      message = "An error occured while adding a new site.";
    } else {
      message = "Site added succesfully";
    } 
  } else {
      message = "Please enter a title and select a guide.";
    }
}

  function clearForm() {
    title = '';
    selectedGuide = '';
  }  
</script>

<form on:submit|preventDefault={addSite}>
  <div class="field is-vertical">
     <div class="field">
        <label for="title" class="label">Add A Site</label>
        <input bind:value={title} id="title" class="input" type="text" placeholder="Enter a site" name="title" />
      </div>
      <div class="field">
        <div class="select">
          <select bind:value={selectedGuide}>
            {#each guideList as guide}
            <option>{guide.lastname}, {guide.firstname}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="field">
      <div class="control">
          <button class="button is-link" on:click={addSite}>Add Site</button>
          </div>
      </div>
      <div class="box">
      <p>{message}</p>
    </div>
    </div>
  </form>


      
  
