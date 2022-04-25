import { Component, OnInit } from '@angular/core';
import {SharedMethodsService} from "../../shared/shared-methods.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(public sharedService: SharedMethodsService) { }

  ngOnInit(): void {
  }


  checkStatus():boolean {
   return  this.sharedService
      .isLoaderActive;
  }

}
