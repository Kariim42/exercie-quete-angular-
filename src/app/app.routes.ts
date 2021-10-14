import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';


const ROUTES: Routes = [
  {path: 'signup', component :  SignUpComponent },
  {path: 'user', component :  UserProfileComponent },
  {path: '', component :  UserProfileComponent },
];

export { ROUTES };