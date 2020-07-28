import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

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
      this.characterService.getAllCharacters(i).subscribe(data => {
        data['results'].forEach((elem: Character) => this.characters.push(elem));
      });
    }
  }

}
