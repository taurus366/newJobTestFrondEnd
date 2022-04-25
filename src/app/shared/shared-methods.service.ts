import { Injectable } from '@angular/core';
import {IUSER} from "./interfaces/IUSER";

@Injectable({
  providedIn: 'root'
})
export class SharedMethodsService {

  user: IUSER | undefined;
  selectedSectorId: number = 0;
  selectedUnderSectorOneId: number = 0;
  selectedUnderSectorTwoId: number = 0;

  isLoaderActive: boolean = false;

  constructor() { }

  setUser(user: any): void {
    this.user = user;
  }

  getUser() : IUSER | undefined {
    return this.user;
  }

  preventDefault(event: MouseEvent) {
    event.preventDefault();
  }

  showLoader(): void {
    this.isLoaderActive = true;
  }

  hideLoader(): void {
    this.isLoaderActive = false;
  }
}
