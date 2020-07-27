import { Injectable } from '@angular/core';
import { Character } from './character';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api/character/?page=';
  constructor(private http: HttpClient) { }

  getAllCharacters(pageNumber: number): Observable<Character[]> {
    return this.http.get<Character[]>(this.url + pageNumber);
  }
}
