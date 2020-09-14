import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragdropboxComponent } from './dragdropbox/dragdropbox.component';
import { TomoComponent } from './tomo/tomo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    RegisterComponent,
    LoginComponent,
    DragdropComponent,
    DragdropboxComponent,
    TomoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
