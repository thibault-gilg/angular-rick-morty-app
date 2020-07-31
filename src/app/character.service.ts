import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) { }

  /**
   * Get request for a list of characters
   * @param gender
   * @param status
   */
  getCharacters(gender?: string, status?: string): Observable<any[]> {
    const url = this.apiUrl + '?' + '&gender=' + gender + '&status=' + status;
    return this.http.get<any[]>(url);
  }

  /**
   * Get request to the next page
   * @param url 
   */
  getNextCharacters(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  /**
   * Get request for a single character
   * @param id 
   */
  getOneCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.apiUrl + id);
  }
}
