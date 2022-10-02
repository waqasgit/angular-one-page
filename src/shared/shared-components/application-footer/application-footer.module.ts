import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationFooterComponent } from './application-footer.component';

@NgModule({
    declarations: [ApplicationFooterComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ApplicationFooterComponent]
})
export class ApplicationFooterModule { }