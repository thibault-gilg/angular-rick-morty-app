import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  public characters: Character[] = [];
  public gender = '';
  public status = '';
  public next: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    if (!this.next) {
      this.getCharacters();
    }
  }

  /**
   * Extract the objects from the JSON response and add them to the list of characters
   * @param data 
   */
  addCharacters(data): void {
    data['results'].forEach((elem: Character) => this.characters.push(elem));
    this.next = data['info'].next;
  }

  /**
   * Display characters whether there are filters or not
   * @param gender
   * @param status
   */
  getCharacters(gender?: string, status?: string): void {
    if (gender) {
      this.gender = gender;
    }
    if (status) {
      this.status = status;
    }
    this.characters = [];
    this.characterService.getCharacters(this.gender, this.status).subscribe(data => {
      this.addCharacters(data);
    });
  }

  /**
   * GET request to get the rest of the characters
   */
  onMoreCharacters(): void {
    this.characterService.getNextCharacters(this.next).subscribe(data => {
      this.addCharacters(data);
    });
  }

  /**
   * Reload page to remove the filters
   */
  onClearFilters(): void {
    window.location.reload();
  }
}
