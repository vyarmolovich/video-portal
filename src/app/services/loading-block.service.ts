import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {

  private isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isLoaded(): Observable<boolean> {
    return this.isLoaded$.asObservable();
  }

  startLoading() {
    this.isLoaded$.next(true);
  }

  stopLoading() {
    this.isLoaded$.next(false);
  }
}
