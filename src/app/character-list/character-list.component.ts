import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { element } from 'protractor';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    for (let i = 1; i <= 30; i++) {
      this.characterService.getAllCharacters(i).subscribe(characters => {
        characters['results'].forEach((element: Character) => this.characters.push(element));
        console.log(this.characters);
      });
    }
  }

}
