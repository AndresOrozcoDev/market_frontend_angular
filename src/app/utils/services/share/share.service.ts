import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private key = new Subject<boolean>();

  constructor() { }

  setValue(value: boolean) {
    this.key.next(value);
  }

  getValue() {
    return this.key.asObservable();
  }

}
