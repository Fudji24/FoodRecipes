import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  id!: number;
  current: any;
  constructor(private httpService: HttpService, private actRouter: ActivatedRoute, private router: Router) {
    actRouter.params.subscribe(param =>{
      this.id = + param["id"]
      console.log(param["id"])
    })
   }

  ngOnInit(): void {
    this.current = this.httpService.getRecipeDetails(this.id).subscribe(data => {
      this.current = data;
    });
  }
  backToList(){
    this.router.navigate([`recipes`]);
  }
}
