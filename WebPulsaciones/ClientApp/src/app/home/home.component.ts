import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAdminService } from '../services/user-admin.service';
import { UserAdmin } from '../pulsacion/models/user-admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  useradmin :UserAdmin[];
  constructor(private router: Router,
  private authenticationService: AuthenticationService,
  private userService: UserAdminService){
    this.userService.get().subscribe(result => {
      this.useradmin = result;
      console.log(this.useradmin);
    });

  }
  
}
