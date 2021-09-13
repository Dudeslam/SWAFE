import { Injectable } from '@angular/core';

export interface node{
  "id": 2,
  "picture": "https://robohash.org/idetet.jpg?size=150x150&set=set1",
  "first_name": "Vance",
  "last_name": "Jime",
  "email": "vjime1@deviantart.com",
  "gender": "Male",
  "wallet": "1KQmmY7gDQxjoaVpyqzU6MtNv67bxhrw8T" 
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
}
