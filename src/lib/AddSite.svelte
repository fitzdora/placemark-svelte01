<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../routes/services/placemark-service";

    let title = '';
    let siteList = [];
    let loggedInUser  = '';
    let message = "Please add a site";
    
   onMount(async () => {
        siteList = await placemarkService.getSites();
    }); 

    async function addSite() {

        if (title) {
        const success = await placemarkService.addSite(title);
        if (!success) {
            message = "You have not added a new site - error occoured";
            return;
        } else {
            message = "You have successfully added a site";
        } 
        }   else {
            message = "Please enter a site title";
        }
    }

</script>


<form>
    <div class="field-body">
    <div class="field">
      <label for="title" class="label ">Add A Site</label> 
      <input bind:value={title} id="title" class="input" type="text" placeholder="Enter a site" name="title">
    </div>
    <div class="field">
      <div class="control">
    <button class="button is-link">Add Site</button>
    </div>
    </div>
    </div>
    <div class="box">
        {message}
    </div>
  </form>