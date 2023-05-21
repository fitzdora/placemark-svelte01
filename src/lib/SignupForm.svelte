<script>
    import { goto } from '$app/navigation';
    import { placemarkService } from '../routes/services/placemark-service';

    let firstname = '';
    let lastname = '';
    let email = '';
    let password = '';
    let errorMessage = '';

    async function signup() {
        console.log(`attempting to sign up email: ${email}`);
        let success = await placemarkService.signup(firstname, lastname, email, password);
        if (success) {
        goto('/');
        } else {
            errorMessage = "Error trying to sign up";
        }
    }
</script>


<form on:submit|preventDefault={signup}>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <label for="firstname" class="label">First Name</label>
                <input bind:value={firstname} id="firstname" class="input" type="text" placeholder="Enter first name" name="firstname" />
            </div>
            <div class="field">
                <label for="lastname" class="label">Last Name </label>
                <input bind:value={lastname} id="lastname" class="input" type="text" placeholder="Enter last name" name="lastname" />
            </div>
        </div>
    </div>
    <div class="field">
        <label for="email" class="label">Email</label>
        <input bind:value={email} id="email" class="input" type="text" placeholder="Enter email" name="email" />
    </div>
    <div class="field">
        <label for="password" class="label">Password</label>
        <input bind:value={password} id="password" class="input" type="password" placeholder="Enter Password" name="password" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Sign Up</button>
    </div>
</form>
{#if errorMessage}
<div class="section">
    {errorMessage}
</div>
{/if}
