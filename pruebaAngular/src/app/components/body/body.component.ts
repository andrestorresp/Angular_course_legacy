import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
 export class BodyComponent{
    mostrar = true;

    frase: any ={
        mensaje: 'Soy Batman',
        autor: 'batman'
    }
    personajes: string[]= ['batman', 'superman', 'spiderman', 'drStrange']
}