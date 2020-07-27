import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api/character/?page=';
  constructor(private http: HttpClient) { }

  getAllCharacters(pageNumber: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + pageNumber);
  }
}
