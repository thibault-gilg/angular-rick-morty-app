import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) { }

  getAllCharacters(pageNumber: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '?page=' + pageNumber);
  }

  getOneCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.url + id);
  }
}
