import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character: Character;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacter();
  }

  /**
   * Return to the main page
   */
  onGoBack(): void {
    this.location.back();
  }
  /**
   * Get one character details
   */
  getCharacter(): void {
    //retrieve user id in url
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.getOneCharacter(id)
      .subscribe(character => this.character = character);
  }

}
