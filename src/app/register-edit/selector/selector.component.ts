import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISECTOR} from "../../shared/interfaces/ISECTOR";
import {IUNDERSECTORONE} from "../../shared/interfaces/IUNDERSECTORONE";
import {IUNDERSECTORTWO} from "../../shared/interfaces/IUNDERSECTORTWO";
import {IUNDERSECTORTHREE} from "../../shared/interfaces/IUNDERSECTORTHREE";
import {UserService} from "../../user.service";
import {SharedMethodsService} from "../../shared/shared-methods.service";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  sectors: ISECTOR[] | undefined | null;
  underSectorOne: IUNDERSECTORONE[] | undefined | null;
  underSectorTwo: IUNDERSECTORTWO[] | undefined | null;
  underSectorThree: IUNDERSECTORTHREE[] | undefined | null;

  isSectorWindow: boolean = true;
  isSectorOneWindow: boolean = false;
  isSectorTwoWindow: boolean = false;
  isSectorThreeWindow: boolean = false;

  isPossibleBack: boolean = false;


  selectedSectorId: number = 0;
  selectedUnderSectorOneId: number = 0;
  selectedUnderSectorTwoId: number = 0;

  selectedUnderSectorThree: IUNDERSECTORTHREE | undefined;
 @Output() selectedUnderSectorThreeEv = new EventEmitter<IUNDERSECTORTHREE>();

 @Input() isSectorsIncorrect: boolean | undefined;


  constructor(private userService: UserService, private sharedMethodService: SharedMethodsService) { }

  ngOnInit(): void {
    this.populateSectors();
  }

  populateSectors(): void {
    this.sharedMethodService
      .showLoader();

    this.userService
      .populateSelectorSector()
      .subscribe({
        next: value => {
          this.sectors = value.body;
        },
        complete: () => {
          this.sharedMethodService
            .hideLoader();
        }
      })
    this.hideAll();
    this.showSectorWindow();
  }

  populateUnderSectorOne(id: number): void {

    this.selectedSectorId = id;
    this.sharedMethodService.selectedSectorId = id;

    this.sharedMethodService
      .showLoader();

    this.underSectorOne = [];

    this.userService
      .populateSelectorUnderSectorOne({id})
      .subscribe({
        next: value => {
          if (value.body == null || value.body.length == 0) {
            this.underSectorOne = undefined;
          } else {
            this.underSectorOne = value.body;

          }

        },
        complete: () => {
          this.sharedMethodService
            .hideLoader();
        }
      });
    this.hideAll();
    this.showSectorOneWindow();
  }

  populateUnderSectorTwo(id: number): void {
    this.selectedUnderSectorOneId = id;
    this.sharedMethodService.selectedUnderSectorOneId = id;

    this.sharedMethodService
      .showLoader();

    this.underSectorTwo = [];

    this.userService
      .populateSelectorUnderSectorTwo({id})
      .subscribe({
        next: value => {

          if (value.body == null || value.body.length == 0) {
            this.underSectorTwo = undefined;
          } else {
            this.underSectorTwo = value.body;
          }


        },
        complete: () => {
          this.sharedMethodService
            .hideLoader();
        }
      });
    this.hideAll();
    this.showSectorTwoWindow();

  }

  populateUnderSectorThree(id: number): void {

    this.selectedUnderSectorTwoId = id;
    this.sharedMethodService.selectedUnderSectorTwoId = id;

    this.sharedMethodService
      .showLoader();

    this.underSectorThree = [];

    this.userService
      .populateSelectorUnderSectorThree({id})
      .subscribe({
        next: value => {

          if (value.body == null || value.body.length == 0) {
            this.underSectorThree = undefined;
          } else {
            this.underSectorThree = value.body;
          }

        },
        complete: () => {
          this.sharedMethodService
            .hideLoader();
        }
      });
    this.hideAll();
    this.showSectorThreeWindow();
  }

  selectedSector(sector: IUNDERSECTORTHREE): void {
    this.selectedUnderSectorThree = sector;
    this.selectedUnderSectorThreeEv.emit(sector);
  }


  preventDefault(event: MouseEvent) {
    this.sharedMethodService
      .preventDefault(event);
  }

  hideAll(): void {
    this.isSectorWindow = false;
    this.isSectorOneWindow = false;
    this.isSectorTwoWindow = false;
    this.isSectorThreeWindow = false;
  }

  showSectorWindow(): void {
    this.isSectorWindow = true;
    this.impossibleBack();
  }

  showSectorOneWindow(): void {
    this.isSectorOneWindow = true;
    this.possibleBack();
  }

  showSectorTwoWindow(): void {
    this.isSectorTwoWindow = true;
    this.possibleBack();
  }

  showSectorThreeWindow(): void {
    this.isSectorThreeWindow = true;
    this.possibleBack();
  }

  possibleBack(): void {
    this.isPossibleBack = true;
  }

  impossibleBack(): void {
    this.isPossibleBack = false;
  }

  back(): void {
    let which: string = "";

    if (this.isSectorOneWindow) {
      which = "one";
    } else if (this.isSectorTwoWindow) {
      which = "two";
    } else if (this.isSectorThreeWindow) {
      which = "three";
    }
    this.hideAll();

    switch (which) {
      case 'one':
        this.showSectorWindow();
        return;
      case 'two':
        this.showSectorOneWindow();
        return;
      case 'three':
        this.showSectorTwoWindow();
        return;
    }
  }



}
