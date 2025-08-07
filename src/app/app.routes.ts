import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'dashboard',
    loadComponent: () => import('./Library/pages/dashboar-page/dashboar-page.component'),
    //rutas hijas del papa
    children:[
        {
            path: 'trending',
            loadComponent: () => import('./Library/pages/trending-page/trending-page.component'),
        },
        {
            path: 'search',
            loadComponent: () => import('./Library/pages/search-page/search-page.component'),
        },
        {
            path: '**',
            redirectTo: 'dashboard',        
        }
    ],
},


{
    path: '**',
    redirectTo: 'dashboard',
}
];