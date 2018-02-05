import { Component } from '@angular/core';

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
            <div class="jb-footer-map">
                <iframe width="600" height="300" frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs1PB5ZNdAUcRycXZxwPaniM&key=AIzaSyBio52dNhb0aU9SWY_rESJm9dedw8Vklpc"
                        allowfullscreen></iframe>
            </div>
        </div>
    `,
    styleUrls: ['../../scss/jb-footer.scss']
})
export class JbFooter {
}
