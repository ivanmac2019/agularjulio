import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

import { HttpClient} from  '@angular/common/http'
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";

@Injectable()

export class PersonasService
{
    private API_SERVER = "http://190.60.101.59:6003/"

    constructor(public http:HttpClient){}

    public getPersonas():Observable<any>
    {
        return this.http.get(this.API_SERVER);
    }


}