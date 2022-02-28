import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { environment } from 'src/environments/environment.prod';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css']
})
export class ProductsdataComponent implements OnInit {
  searchForm: FormGroup;
  productsData: any =[];
  constructor(private fb: FormBuilder,private service:ServiceService,private activateroute:ActivatedRoute,private router:Router) { 
    this.searchForm = this.fb.group({
      search:['']
    });
  }

  ngOnInit(): void {
  }
  // get Products Data
  getProductsData(){
    alert("apicall")
    console.log(this.searchForm)
    this.service.GetRequest().subscribe((res:any)=>{
      console.log(res);
      this.productsData =res;
    },error=>{
      console.log(error);
    });
  }
 
}