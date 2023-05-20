 <script>
    import TitleBar from './TitleBar.svelte';
    import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'PlaceMark'} 
        subTitle={'Sign up or Log in'} />
    </div>
    <div class="column">
        <WelcomeNavigator />
    </div>
</div>
