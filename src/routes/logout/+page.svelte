<script>
    import { goto } from "$app/navigation";
    import { placemarkService } from "../services/placemark-service";

    placemarkService.logout();
    goto("/");
</script>