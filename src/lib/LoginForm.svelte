<script>
    import { goto } from '$app/navigation'; //this will need to be checked against hapi
    import { placemarkService } from '../routes/services/placemark-service';

    let email = '';
    let password = '';
    let errorMessage = '';

    async function login() {
        console.log(`attemting to log in email: ${email} with password: ${password}`);
        let success = await placemarkService.login(email, password);
        if (success){
        goto('/addsite'); // this route may need to be changed
        } else {
            email = '';
            password = '';
            errorMessage = 'Invalid Credentials';
        }
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
{#if errorMessage}
<div class="section">
    {errorMessage}
</div>
{/if}