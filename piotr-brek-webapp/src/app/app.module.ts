import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JbNavbar } from './jb/jb-navbar';
import { JbContent } from './jb/jb-content';
import { JbFooter } from './jb/jb-footer';

@NgModule({
    declarations: [
        AppComponent,
        JbNavbar,
        JbContent,
        JbFooter

    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
