import { Component, OnInit } from '@angular/core';
import { Culture } from '../culture';
import { CultureService } from '../culture.service';


@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.css']
})
export class CulturesComponent implements OnInit {
  title = 'Cultures';
  cultures: Culture[] = [];

constructor(private cultureService: CultureService) { }

  ngOnInit(): void {
    this.getCultures();
  }

  getCultures(): void {
    this.cultureService.getCultures()
      .subscribe(cultures => this.cultures = cultures);
  }
}
