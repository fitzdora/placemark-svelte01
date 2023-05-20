<script>
    import Header from "$lib/Header.svelte";
    import SiteList from "$lib/SiteList.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column has-text-centered">
        <img alt="tree" src="/tree.png" width="200" />
    </div>
    <div class="column box has-text-centered">
        <h1 class="title is-4">List of Site Locations to date</h1>
        <SiteList />
    </div>
</div>