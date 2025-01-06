import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



import { MaterialModule } from './material.module';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { MenusService } from './service/menus/menus.service';
import { PostsService } from './service/posts/posts.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    BrowserAnimationsModule
    
  ],
  providers: [AfService, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }