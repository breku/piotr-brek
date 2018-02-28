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
                <div class="jb-footer-element">NIP: 765-000-00-20</div>
                <div class="jb-footer-element">email: piotrbrek61@gmail.com</div>
            </div>
        </div>
        <jb-google-map></jb-google-map>
    `,
    styleUrls: ['../../scss/jb-footer.scss']
})
export class JbFooter {

}
