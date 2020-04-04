import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormStartComponent } from './form/form-start/form-start.component';
import { FormDetailComponent } from './form/form-detail/form-detail.component';
import { FormEditComponent } from './form/form-edit/form-edit.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { FormItemComponent } from './form/form-list/form-item/form-item.component';
import { FormService } from './form/form.service';
import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'app-form', component: FormComponent,
  children: [
    {path: '', component: FormStartComponent},
    {path: 'new', component: FormEditComponent},
    {path: ':id', component: FormDetailComponent},
    {path: ':id/edit', component: FormEditComponent}
  ]}
]

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
     ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FormComponent,
    FormStartComponent,
    FormDetailComponent,
    FormEditComponent,
    FormItemComponent,
    FormListComponent,
    HomeComponent,
    DropdownDirective
     ],
  providers: [FormService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
