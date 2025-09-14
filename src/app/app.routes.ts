import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './product/product';
import { Profile } from './profile/profile';
import { AddProduct } from './add-product/add-product';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [

   {path:"dashboard",component:Dashboard,title:"dashboard|project"},
   {path:"products",component:Product,title:"products |project",children:[

    {path:"add-product",component:AddProduct},
    {path:"product-detail/1",component:ProductDetail}

   ]},
   {path:"profile",component:Profile,title:"profile | project"}
];
