import { Component } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userService: UserService) {}
  title = 'angular-federation';
  testeApp() {
    this.userService
      .get(
        'https://3000-phraulino-angularfedera-95h79z8uvwx.ws-us86.gitpod.io/user_info'
      )
      .subscribe({
        next: (res: any) => {
          console.log(res);
        },
      });
  }
}
