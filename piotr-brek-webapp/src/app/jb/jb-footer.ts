import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'jb-footer',
    template: `
        <div class="jb-footer-separation"></div>
        <div class="jb-footer-wrapper">
            <div class="jb-footer-text">
                <div class="jb-footer-element jb-accent">Drogi projektowanie i nadzór mgr inż. Piotr Bręk</div>
                <hr>
                <div class="jb-footer-element">ul. Parkowa 7/3</div>
                <div class="jb-footer-element">78-600 Wałcz</div>
                <div class="jb-footer-element">tel: +48 661 550 777</div>
                <div class="jb-footer-element">email: piotrbrek61@gmail.com</div>
            </div>
        </div>
        <jb-google-map></jb-google-map>
    `,
    styleUrls: ['../../scss/jb-footer.scss']
})
export class JbFooter implements AfterViewInit {

    ngAfterViewInit(): void {
        // var uluru = {lat: -25.363, lng: 131.044};
        // var map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 4,
        //     center: uluru
        // });
    }
}
