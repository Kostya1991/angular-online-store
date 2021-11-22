import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public setLoading(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }

  public getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
