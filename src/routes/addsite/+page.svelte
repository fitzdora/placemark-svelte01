<script>
    import Header from "$lib/Header.svelte";
    import AddSite from "$lib/AddSite.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="building" src="/building.png" width="200" />
    </div>
    <div class="column has-text-centered">
        <h1 class="title is-4">Add a new place here</h1>
        <AddSite />
    </div>
</div>