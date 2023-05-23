<script>
   import { onMount } from "svelte";
   import { placemarkService } from "../routes/services/placemark-service.js";

    let siteList = [];
    let guideList = [];

    onMount(async () => {

        siteList = await placemarkService.getSites();
        guideList = await placemarkService.getGuides();
    });
</script>
<table class="table is-fullwidth">
    <thead>
        <tr>
        <th>User</th>
        <th>Site</th>
        <th>Guide</th>
        </tr>
    </thead>
    <tbody>
        {#each siteList as site}
        <tr>
            <td>
            {site.user.lastname}, {site.user.firstname}
            </td>
            <td>
            {site.site}
            </td>
            <td>
                {#each guideList as guide }
                {#if guide.siteId == site._id}
                {guide.lastname}, {guide.firstname}
                {/if}
                {/each}
            </td>
        </tr>
        {/each}
    </tbody>

</table>