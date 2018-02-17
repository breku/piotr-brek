import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JbNavbar } from './jb/jb-navbar';
import { JbContent } from './jb/jb-content';
import { JbFooter } from './jb/jb-footer';
import { AgmCoreModule } from '@agm/core';
import { JbGoogleMap } from './jb/jb-google-map';

@NgModule({
    declarations: [
        AppComponent,
        JbNavbar,
        JbContent,
        JbFooter,
        JbGoogleMap
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB9eLfRF8NKRELOCQW_dTgbaPYP_aQbP74'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
