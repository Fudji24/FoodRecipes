import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { APIRes, Recipes } from 'src/app/models/RecipeModel';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged, fromEvent, map, of} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('inputVal', {static: true}) inputVal!: ElementRef;


  public data!: Array<Recipes>;
  recipesSearchFilter!: string;
  recipesFilterList: any = [];
  tag: any;
  isDessertActivated: boolean = false;
  isLunchActivated: boolean = false;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.searchFilter();
    this.tag = localStorage.getItem('tagType')?.toString();
    if(localStorage.getItem('lunchTag')){
      this.isLunchActivated = true;
    }
    if(localStorage.getItem('dessertTag')){
      this.isDessertActivated = true;
    }
    this.refreshList();
  }

  refreshList(){
    if(this.tag === ""){
      this.httpService.getRecipes('').subscribe((data: APIRes<Recipes>) =>{
        this.data = data.results;
        this.recipesFilterList = data;
      })
    }
    else{
      this.httpService.getRecipes(this.tag, this.recipesSearchFilter).subscribe((data: APIRes<Recipes>) =>{
        this.data = data.results;
        this.recipesFilterList = data;
      })
    }
    
  }

  TriggerTag(event: any){
    this.tag = event.target.value;
    localStorage.setItem('tagType', this.tag);
    if(this.tag == "dessert"){
      this.isDessertActivated = true;
      this.isLunchActivated = false;
      localStorage.setItem('dessertTag', 'true');
      localStorage.removeItem('lunchTag')
    }
    if(this.tag == "lunch"){
      this.isDessertActivated = false;
      this.isLunchActivated = true;
      localStorage.setItem('lunchTag', 'true');
      localStorage.removeItem('dessertTag')
    }
    this.refreshList()
   
  }
  searchCall(query: string){
    if (query === '') {
      return of([]);
    }
    this.recipesSearchFilter = query;
    
    return this.refreshList();
  }
  searchFilter(){
    fromEvent(this.inputVal.nativeElement, 'keyup').pipe(

      map((event: any) => {
        return event.target.value;
      }),
      filter(res => res.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.searchCall(text.toString());
      console.log(text)
    });
  }


  getDetails(id: any){
    this.router.navigate([`recipes/${id}`]);
    console.log(id.toString());
  }


 
}
