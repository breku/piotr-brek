import { Component } from '@angular/core';

@Component({
    selector: 'jb-google-map',
    template: `
        <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
            <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
        </agm-map>
    `,
    styleUrls: ['../../scss/jb-google-map.scss']
})
export class JbGoogleMap {

    lat: number = 53.273559;
    lng: number = 16.483105;
    zoom: number = 16;
}
