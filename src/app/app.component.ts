import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentBase implements OnInit {
  title = 'angular-one-page-static';

  constructor(
    injector: Injector,
  ) {
    super(injector);
   }

   ngOnInit() {
    this.spinnerService.show();
    this.hideSpinner();
  }

  hideSpinner(){
    setTimeout(()=> this.spinnerService.hide(), 2000);
  }
}
