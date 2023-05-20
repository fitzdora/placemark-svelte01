<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="300" src="/ireland.png" alt="ireland" />
    </div>
    <div class="column">
        <h1 class="title">Welcome to PlaceMark</h1>
        <p>Vist heritage sites in County Cork</p>
    </div>
</div>
