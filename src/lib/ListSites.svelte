<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../routes/services/placemark-service";
	

    let siteList = [];
    let users = [];

    onMount(async () => {
        siteList = await placemarkService.getSites();
        users = await placemarkService.getUsers();
    });
</script>

<table class="table is-fullwidth">
    <thead>
        <th>Heritage Officer</th>
        <th>Site</th>
    </thead>
    <tbody>
        {#each siteList as site, i}
        {#if users[i]}
        <tr>
            <td>
                {users[i].firstname}, {users[i].lastname}
            </td>
            <td>
                {site.title}
            </td>
        </tr>
        {/if}
        {/each}
    </tbody>
</table>