import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
  productsData: any;
  limit=12;
  imgHost = environment.imgHost;
  sorttype: any;
  constructor(private service:ServiceService,private activateroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe((params: Params) => this.sorttype = params['sortType']);
    console.log(this.sorttype);
    this.getProductsData();
  }
  // get Products Data
  getProductsData(){
    this.service.GetRequest().subscribe((res:any)=>{
      console.log(res);
      this.productsData=res;
      this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => high.Price - low.Price);
    },error=>{
      console.log(error);
    });
  }
  scrollHandler(event:any){
    console.log(event);
    console.log('now you are scrolling');
    this.limit=this.limit+12;
    console.log(this.limit);
  }
  sort(event: any) {
    console.log(event.target.value);
    switch (event.target.value) {
      case "lowtohigh":
        {
          this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => low.Price - high.Price);
          debugger
          this.router.navigate(['/list', { sortType: event.target.value}]);
          break;
        }

      case "hightolow":
        {
          this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => high.Price - low.Price);
          this.router.navigate(['/list', { sortType: event.target.value}]);
          break;
        }

   
      default: {
        this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => low.Price - high.Price);
        break;
      }

    }
    return this.productsData;

  }
  feedback(){
    this.router.navigate(['/feedback']);
  }
}