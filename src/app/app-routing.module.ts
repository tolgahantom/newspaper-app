import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchedPageComponent } from './components/searched-page/searched-page.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PopularComponent } from './components/popular/popular.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'categories/:categoryName', component: CategoriesComponent },
  { path: 'search', component: SearchedPageComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
