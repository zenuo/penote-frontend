import { Injectable } from '@angular/core';
import { User } from './resources';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  sessionId: string = null;
  
  user: User = null;

  constructor() { }
}
