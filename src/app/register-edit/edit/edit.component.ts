import {Component, Input, OnInit, Output} from '@angular/core';
import {IUSER} from "../../shared/interfaces/IUSER";
import {SharedMethodsService} from "../../shared/shared-methods.service";
import {IUNDERSECTORTHREE} from "../../shared/interfaces/IUNDERSECTORTHREE";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: IUSER | undefined;

  isNameIncorrect: boolean = false;

  @Output() isSectorsIncorrect: boolean = false;

  @Input() selectedUnderSectorThree: IUNDERSECTORTHREE | undefined;

  constructor(private sharedService: SharedMethodsService, private userService:UserService) {
  }

  ngOnInit(): void {
    this.populateUser();
  }

  populateUser(): void {
    this.user = this.sharedService.getUser()
  }

  selectedNewSector(sector: IUNDERSECTORTHREE) {
    this.user!.underSectorThree = sector.name!;
    this.selectedUnderSectorThree = sector;

  }

  editCurrentUser(form: any) {
    console.log(this.selectedUnderSectorThree?.id);
    console.log(this.selectedUnderSectorThree?.name);

    let formControl = form.form.controls;

    if (form.invalid) {

      switch (formControl.name.status) {
        case "INVALID":
          this.isNameIncorrect = true;
          break;
        case "VALID":
          this.isNameIncorrect = false;
          break;
      }

      this.isSectorsIncorrect = formControl.sector.value.length == 0;

      return
    }

    this.isSectorsIncorrect = false;
    this.isNameIncorrect = false;


    this.userService
      .editCurrentUser({sectorId:this.sharedService.selectedSectorId, underSectorOneId:this.sharedService.selectedUnderSectorOneId, underSectorTwoId:this.sharedService.selectedUnderSectorTwoId, underSectorThreeId:this.selectedUnderSectorThree?.id!, isAgree:formControl.agree.value === true, username:formControl.name.value})
      .subscribe({
        next:value => {
          console.log(value.body)
        },
        complete:() => {}
      })

  }

}
