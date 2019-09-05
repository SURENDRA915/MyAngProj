import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurenComponent } from './suren.component';
import { HeaderComponent } from './header/header.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {FormsModule} from '@angular/forms';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { ColorDirective } from './color.directive';
import { TextpredifindpipeComponent } from './textpredifindpipe/textpredifindpipe.component';
import { BoldPipe } from './bold.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee-list/employee.service';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,SurenComponent, HeaderComponent, InterpolationComponent,
     PropertybindingComponent, EventbindingComponent, TwowaybindingComponent, 
     StructuraldirectiveComponent, ColorDirective, TextpredifindpipeComponent, BoldPipe, EmployeeListComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
