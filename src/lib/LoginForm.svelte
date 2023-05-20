<script>
    import { goto } from '$app/navigation'; //this will need to be checked against hapi

    let email = '';
    let password = '';

    async function login() {
        console.log(`attemting to log in email: ${email} with password: ${password}`);
        goto('/addplace'); // this route may need to be changed
    }
</script>

<form on:submit|preventDefault={login}>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text" />
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Log In</button>
    </div>
</form>
