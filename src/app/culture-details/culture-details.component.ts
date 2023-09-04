import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Culture } from '../culture';
import { CultureService } from '../culture.service';

@Component({
  selector: 'app-culture-details',
  templateUrl: './culture-details.component.html',
  styleUrls: ['./culture-details.component.css']
})
export class CultureDetailsComponent implements OnInit {

  culture: Culture | undefined;

  constructor(
    private route: ActivatedRoute,
    private cultureService: CultureService,
  ) {}

  ngOnInit(): void {
    this.getCulture();
  }

  getCulture(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.cultureService.getCulture(id)
      .subscribe(culture => this.culture = culture);
  }

  formatPreparation(preparation: string): string {
    return preparation.replace(/\n/g, '<br>').replace(/^\s*\d+\.\s*/gm, '<p>'); // Expresiones regulares
  }

}
