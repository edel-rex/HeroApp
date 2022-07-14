import { Component, OnInit } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HeroApp';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}
  ngOnInit(): void {
    this.superHeroService
      .getSuperHeroes()
      .subscribe((XPathResult: SuperHero[]) => (this.heroes = XPathResult));
  }

  updatedHeroes(_heroes: SuperHero[]) {
    this.heroes = _heroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
}
