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
            // convertir cadena a entero 10 sistema decimal
            // snapshot contiene una instantánea de la ruta actua
            // paramMap contiene un map de param de la URL
            // ! no será nulo (null) ni indefinido (undefined).
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.cultureService.getCulture(id)
    // promesa suscribirse al observable para recibir los datos
      .subscribe(culture => this.culture = culture);
  }

   // Función para formatear la preparación
  formatPreparation(preparation: string): string {
                                              //al inicio / un espacio / almenos un número / un punto / un espacio /(gm)global multiline
return preparation.replace(/\n/g, '<br>').replace(/^\s*\d+\.\s*/gm, '<p>');
}
// Reemplaza todas las ocurrencias de salto de línea '\n' con la etiqueta '<br>'.

// Reemplaza todas las secuencias que comienzan con un número seguido de un punto y espacio "1. " con '<p>'.

}
