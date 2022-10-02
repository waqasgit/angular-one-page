import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegularExpressionConstants } from '@shared/constants/RegularExpressionConstants';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { WhoWeWorkWithComponent } from './who-we-work-with/who-we-work-with.component';
import { CustomsAgentCountComponent } from './customs-agent-count/customs-agent-count.component';
import { TileWidgetComponent } from './customs-agent-count/tile-widget/tile-widget.component';
import { AviationDetailsComponent } from './aviation-details/aviation-details.component';
import { CustomerServicesComponent } from './customer-services/customer-services.component';
import { ServiceTileWidgetComponent } from './customer-services/service-tile-widget/service-tile-widget.component';
import { ShipImageComponent } from './ship-image/ship-image.component';
import { CustomsSupportComponent } from './customs-support/customs-support.component';
import { CustomsSupportWidgetComponent } from './customs-support/customs-support-widget/customs-support-widget.component';
import { CustomsClearanceAfterBrexitComponent } from './customs-clearance-after-brexit/customs-clearance-after-brexit.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { ApplicationHeaderModule } from '@shared/shared-components/application-header/application-header.module';
import { ApplicationFooterModule } from '@shared/shared-components/application-footer/application-footer.module';

@NgModule({
  declarations: [									
    AppComponent,
      IntroSectionComponent,
      WhoWeWorkWithComponent,
      CustomsAgentCountComponent,
      TileWidgetComponent,
      AviationDetailsComponent,
      CustomerServicesComponent,
      ServiceTileWidgetComponent,
      ShipImageComponent,
      CustomsSupportComponent,
      CustomsSupportWidgetComponent,
      CustomsClearanceAfterBrexitComponent,
      ContactFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationHeaderModule,
    ApplicationFooterModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    RegularExpressionConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
