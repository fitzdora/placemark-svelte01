<script>
    import { user } from "../stores";
    export let title = '';
    export let subTitle='';
</script>

<div class="box has-text-centered columns m-2">
    <div>
     <a href="/" class="column">
     <img src="/ireland.png" width="60" alt="img" />
     </a>
    </div>
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">
        <i class="fas fa-tree-city fa-3x" style="color: #004D44;" />
        {#if $user.email}
        <div class="is-size-7">{$user.email}</div>
        {:else}
        <div class="is-size-7">PlaceMark Svelte 0.2</div>
        {/if}
    </div>
</div>
