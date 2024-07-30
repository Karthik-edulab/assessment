import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private buttonClickSubject = new Subject<void>();
  private booleanSource = new Subject<boolean>();

  buttonClick$ = this.buttonClickSubject.asObservable();
  currentBoolean = this.booleanSource.asObservable();

  triggerButtonClick() {
    this.buttonClickSubject.next();
  }
  changeBoolean(value: boolean) {
    this.booleanSource.next(value);
  }
}
