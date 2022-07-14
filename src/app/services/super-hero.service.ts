import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbConstants } from 'src/Constants/DbConstants';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  constructor(private http: HttpClient) {}

  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(
      `${environment.apiUrl}/${DbConstants.route_getHeroes}`
    );
  }

  public createSuperHeroes(superHero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${DbConstants.route_postHeroes}`,
      superHero
    );
  }

  public updateSuperHeroes(superHero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${DbConstants.route_putHeroes}`,
      superHero
    );
  }

  public deleteSuperHeroes(superHero: SuperHero): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiUrl}/${DbConstants.route_deleteHeroes}/${superHero.id}`
    );
  }
}
