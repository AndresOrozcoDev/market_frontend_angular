import { Component, OnDestroy } from '@angular/core';
import { ShareService } from './utils/services/share/share.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private suscripcion: Subscription;
  isLogged: boolean = false;

  constructor(private shareService: ShareService, private router: Router) {
    this.suscripcion = this.shareService
      .getValue()
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.isLogged = value;
      });
  }

  logout() {
    this.isLogged = false;
    this.router.navigate(["/"]);
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

}
