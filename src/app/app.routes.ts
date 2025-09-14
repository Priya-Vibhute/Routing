import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './product/product';
import { Profile } from './profile/profile';
import { AddProduct } from './add-product/add-product';
import { ProductDetail } from './product-detail/product-detail';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
   {path:"",component:Home,title:"home | project"},
   {path:"dashboard",component:Dashboard,title:"dashboard|project"},
   {path:"products",component:Product,title:"products |project",children:[

    {path:"add-product",component:AddProduct},
    {path:"product-detail/:id",component:ProductDetail}

   ]},
   {path:"profile",component:Profile,title:"profile | project"},
   {path:"**",component:NotFound}
];
