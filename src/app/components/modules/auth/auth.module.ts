import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EnrollComponent } from "./pages/enroll/enroll.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    EnrollComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
  export class AuthModule { }