import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AmscontactService} from '../app/amscontact.service';
import {ManualService} from '../app/ManualService';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { SupportedAppsComponent } from './supported-apps/supported-apps.component';
import { CloudAppsComponent } from './cloud-apps/cloud-apps.component';
import { HomeComponent } from './home/home.component';
import { AmscontactComponent } from './amscontact/amscontact.component';
import { AppdetailsComponent } from './appdetails/appdetails.component';
import { VwManualactivityComponent } from './vwmanualactivity/vw-manualactivity.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule, } from '@angular/material';
import { ModaltemplateComponent } from './modaltemplate/modaltemplate.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  HttpModule,
  DataTablesModule,
  BrowserAnimationsModule,RouterModule.forRoot([
        {
        path: '',
        component:HomeComponent
        },
        {
        path: 'home',
        component:SupportedAppsComponent
        },
        {
        path: 'App3',
        component:SupportedAppsComponent
          },
        {
        path: 'signup',
        component:SignupComponent
        },
        {
        path: 'signin',
        component:SigninComponent
        },
        {
          path: 'App2',
          component:CloudAppsComponent
          },
          {
            path: 'App1',
            component:ModaltemplateComponent
          },
        {
          path: 'appdetails/:appuid',
          component:AppdetailsComponent
          },
        ])
  ],
  declarations: [
      AppComponent,
      AppdetailsComponent,
      SupportedAppsComponent,
      CloudAppsComponent,
      HomeComponent,
      AmscontactComponent,
      VwManualactivityComponent,
      SignupComponent,
      SigninComponent,
      ModaltemplateComponent ],
  providers:[AmscontactService,ManualService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
