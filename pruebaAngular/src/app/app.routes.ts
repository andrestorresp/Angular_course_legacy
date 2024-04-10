import { RouterModule, Routes } from "@angular/router";
import { BodyComponent} from './components/body/body.component';
const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'body'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);