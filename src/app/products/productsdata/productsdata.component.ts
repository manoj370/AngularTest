import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
  productsData: any;
  limit=12;
  constructor(private service:ServiceService,) { }

  ngOnInit(): void {
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
    switch (event.target.value) {
      case "Low":
        {
          this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => low.Price - high.Price);
          break;
        }

      case "High":
        {
          this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => high.Price - low.Price);
          break;
        }

   
      default: {
        this.productsData = this.productsData.sort((low: { Price: number; }, high: { Price: number; }) => low.Price - high.Price);
        break;
      }

    }
    return this.productsData;

  }
}