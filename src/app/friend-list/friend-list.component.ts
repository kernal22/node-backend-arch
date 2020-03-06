import {Component, OnInit} from '@angular/core';
import {HttpMethodsService} from '../service/http-method.service';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-friend-list',
    templateUrl: 'friend-list.component.html'
})
export class FriendListComponent implements OnInit{
    private url = environment.api_url;
    public friendList: Array<any> = [];

    constructor(private _http: HttpMethodsService) {

    }

    ngOnInit() {
        this._http._getCall(`${this.url}/getUserList/1`).subscribe(data => {
            if(data.status) {
                this.friendList = data.data;
            }
        }, err => {
            console.log(err);
        });
    }
}