import { Injector } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

export abstract class AppComponentBase {

    spinnerService: SpinnerService;

    constructor(injector: Injector ) {
        this.spinnerService = injector.get(SpinnerService);
    }
}