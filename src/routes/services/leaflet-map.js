/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as L from "leaflet";

export class LeafletMap {
    imap = {};
    control = {};
    overlays = {};

    // https://leaflet-extras.github.io/leaflet-providers/preview/

    baseLayers = {
        Terrain: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 17,
            attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }),
        Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        })
    };

    constructor(id, descriptor, activeLayer = "") {
        let defaultLayer = this.baseLayers.Terrain;
        if (activeLayer) {
            defaultLayer = this.baseLayers[activeLayer];
        }
        this.imap = L.map(id, {
            center: [descriptor.location.lat, descriptor.location.lng],
            zoom: descriptor.zoom,
            minZoom: descriptor.minZoom,
            zoomControl: false,
            layers: [defaultLayer]
        });
    }

    addLayer(title, layer) {
        this.overlays[title] = layer;
        this.imap.addLayer(layer);
    }

    addLayerGroup(title) {
        this.overlays[title] = L.layerGroup([]);
        this.imap.addLayer(this.overlays[title]);
    }

    showLayerControl() {
        this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
    }

    showZoomControl(position = "topleft") {
        L.control
            .zoom({
                position: position
            })
            .addTo(this.imap);
    }

    moveTo(zoom, location) {
        this.imap.setZoom(zoom);
        this.imap.panTo(new L.LatLng(location.lat, location.lng));
    }

    zoomTo(location) {
        this.imap.setView(new L.LatLng(location.lat, location.lng), 8);
    }

    addMarker(location, popupText = "", layerTitle = "default") {
        let group = {};
        let marker = L.marker([location.lat, location.lng]);
        if (popupText) {
            var popup = L.popup({ autoClose: false, closeOnClick: false });
            popup.setContent(popupText);
            marker.bindPopup(popup);
        }
        if (!this.overlays[layerTitle]) {
            group = L.layerGroup([]);
            this.overlays[layerTitle] = group;
            this.imap.addLayer(group);
        } else {
            group = this.overlays[layerTitle];
        }
        marker.addTo(group);
    }

    invalidateSize() {
        this.imap.invalidateSize();
        let hiddenMethodMap = this.imap;
        hiddenMethodMap._onResize();
    }
}
