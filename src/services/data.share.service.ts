import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    public isLoginChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isProfileChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isPermissionChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
}

