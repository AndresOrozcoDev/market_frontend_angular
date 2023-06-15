import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  isLoading: Subject<boolean> = this.services.isLoading;

  constructor( private services: LoadingService ) { }

}
