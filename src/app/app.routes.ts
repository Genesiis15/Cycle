import { Routes } from '@angular/router';
import { MensClothingComponent } from './men-clothing/men.component';
import { WomanClothingComponent } from './woman-clothing/woman-clothing.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ProductsComponent } from './all/products.component';




export const routes: Routes = [
    { path: 'all', component: ProductsComponent },
    { path: 'woman', component: WomanClothingComponent },
    { path: 'men', component: MensClothingComponent, },
    { path: '', redirectTo: '/all', pathMatch: 'full' },
    { path: 'jewelery', component: JeweleryComponent },
    { path: 'electronics', component: ElectronicsComponent }
    
];
