import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {ISECTOR} from "./shared/interfaces/ISECTOR";
import {IUNDERSECTORONE} from "./shared/interfaces/IUNDERSECTORONE";
import {IUNDERSECTORTWO} from "./shared/interfaces/IUNDERSECTORTWO";
import {IUNDERSECTORTHREE} from "./shared/interfaces/IUNDERSECTORTHREE";


const apiUrlWAN = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  registerNewUser(data:{sectorId:number;underSectorOneId:number;underSectorTwoId:number;underSectorThreeId:number;isAgree:boolean;username:string}) {

    return this.http.post(`${apiUrlWAN}/user/register`, data,{
      observe:'response',
      withCredentials: true,
      responseType:'json'
    })
  }

  editCurrentUser(data:{sectorId:number;underSectorOneId:number;underSectorTwoId:number;underSectorThreeId:number;isAgree:boolean;username:string}) {
   console.log(data.underSectorThreeId)

    return this.http.patch(`${apiUrlWAN}/user/edit`,data,{
      observe:"response",
      withCredentials:true,
      responseType:"json"
    })
  }

  populateSelectorSector() {
    return this.http.get<ISECTOR[]>(`${apiUrlWAN}/sector/get`,{
      observe: 'response'
    })
  }

  populateSelectorUnderSectorOne(data:{id:number}) {
  return this.http.get<IUNDERSECTORONE[]>(`${apiUrlWAN}/sector/get/one/${data.id}`,{
    observe:"response"
  })
  }

  populateSelectorUnderSectorTwo(data:{id:number}) {
  return this.http.get<IUNDERSECTORTWO[]>(`${apiUrlWAN}/sector/get/two/${data.id}`,{
    observe:"response"
  })
  }

  populateSelectorUnderSectorThree(data:{id:number}) {
  return this.http.get<IUNDERSECTORTHREE[]>(`${apiUrlWAN}/sector/get/three/${data.id}`,{
    observe:"response"
  })
  }
}
