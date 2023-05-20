<script>
    import Header from '$lib/Header.svelte';
    import SignupForm from '$lib/SignupForm.svelte';
</script>

<Header />

<div class="columns">
    <div class="column">
        <div class="box">
            <h1 class="title">Login</h1>
            <SignupForm />
        </div>
    </div>
    <div class="column has-text-centered">
        <img alt="ireland" src="/ireland.png" width="300" />
    </div>
</div>
