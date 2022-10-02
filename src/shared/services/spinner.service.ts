import { Injectable, Injector } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  spinner: NgxSpinnerService;
  constructor(injector: Injector) {
    this.spinner = injector.get(NgxSpinnerService);
  }

  show() {
    this.spinner.show()
  }
  
  hide() {
    this.spinner.hide();
  }

}