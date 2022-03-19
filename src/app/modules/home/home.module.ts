import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RecipeDetailsComponent } from 'src/app/components/recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

const routes: Routes = [
  {
    path: 'recipes',
    component: HomeComponent,
    children: [
    ]
  },
  { path: 'recipes/:id', component: RecipeDetailsComponent }

];

@NgModule({
  declarations: [
    HomeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
