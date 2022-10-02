import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { ApplicationHeaderComponent } from './application-header.component';

@NgModule({
    declarations: [ApplicationHeaderComponent],
    imports: [
        CommonModule,
        MdbCollapseModule
    ],
    exports: [ApplicationHeaderComponent]
})
export class ApplicationHeaderModule { }