import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "../index/index.component";
import {ContactComponent} from "../contact/contact.component";
import {HistoryComponent} from "../history/history.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'workExperience', component: HistoryComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponents = [IndexComponent, ContactComponent, HistoryComponent];
