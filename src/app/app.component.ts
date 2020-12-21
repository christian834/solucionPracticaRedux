import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';
import * as fromMensaje from './mensaje.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dato$ : Observable<any>;

  constructor(private store :Store<appState>){
    this.dato$ = store.select('position');
  }

  CambiarPosicion(){
    this.store.dispatch( new fromMensaje.cambiarPosicion())
  }
}
