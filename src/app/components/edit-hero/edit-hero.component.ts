import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private service: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(_hero: SuperHero) {
    this.service
      .updateSuperHeroes(_hero)
      .subscribe((heroes?: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  createHero(_hero: SuperHero) {
    this.service
      .createSuperHeroes(_hero)
      .subscribe((heroes?: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  deleteHero(_hero: SuperHero) {
    this.service
      .deleteSuperHeroes(_hero)
      .subscribe((heroes?: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
