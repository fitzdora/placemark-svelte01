<script>
    // import { beforeUpdate } from "svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import SiteMap from "$lib/SiteMap.svelte";
    // import { placemarkService } from "../services/placemark-service.js";

   /*  beforeUpdate (() => {
        placemarkService.checkPageRefresh();
    }); */

</script>

<Header>
    <MainNavigator />
</Header>

<div class="box">Map of Heritage Sites here</div>
<SiteMap />