import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeComponent} from "./about-me/about-me.component";
import {FooterComponent} from "./footer/footer.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {ExperienceSummaryComponent} from "./experience-summary/experience-summary.component";


@NgModule({
  declarations: [
    AboutMeComponent,
    FooterComponent,
    NavigationComponent,
    ExperienceSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutMeComponent,
    FooterComponent,
    NavigationComponent,
    ExperienceSummaryComponent
  ]
})
export class SharedModule {
}
