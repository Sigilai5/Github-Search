import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import { DirectDirective } from './user-directive/direct.directive';
import { PipePipe } from './user-pipe/pipe.pipe';
import { HighlightDirective } from './app-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    DirectDirective,
    PipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
