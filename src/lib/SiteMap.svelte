<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../routes/services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../routes/services/placemark-service";

    const mapConfig = {
        location: { lat: 52.160858, lng: -7.15242 },
        zoom: 8,
        minZoom: 1
    };

    let map; 

    onMount(async () => {
        map = new LeafletMap("site-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        const sites = await placemarkService.getSites();
        sites.forEach((site) => {
            map.addMarker({ lat: site.lat, lng: site.lng });
        });
    });
</script>

<div class="box" id="site-map" style="height:75vh" />
