<script>
    import { onMount } from "svelte";
   import { placemarkService } from "../routes/services/placemark-service.js";

    let siteList = [];
    onMount(async () => {

        siteList = await placemarkService.getSites();
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
            {site.guide}
            </td>
        </tr>
        {/each}
    </tbody>

</table>