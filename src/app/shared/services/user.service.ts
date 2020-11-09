import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.API_BASE_PATH}/users/all`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.API_BASE_PATH}/users/${id}`);
    }



// Hata servisi{
//   isOk: false,
//   message: "Failed to change password"
// }
}
