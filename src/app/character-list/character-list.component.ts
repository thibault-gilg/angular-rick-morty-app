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
  private next: string;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  /**
   * Display characters whether there are filters or not
   * @param gender
   * @param status
   */
  getCharacters(gender?: string, status?: string): void {
    if (gender && gender !== 'Gender') {
      console.log(gender);
      this.gender = gender;
    }
    if (status && status !== 'Status') {
      this.status = status;
    }
    this.characters = [];
    this.characterService.getCharacters(this.gender, this.status).subscribe(data => {
      data['results'].forEach((elem: Character) => this.characters.push(elem));
      this.next = data['info'].next;
    });

    /*while (this.next) {
      this.characterService.getNextCharacters(this.next).subscribe(data => {
        data['results'].forEach((elem: Character) => this.characters.push(elem));
        this.next = data['info'].next;
      });
    }*/
  }
}
