import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards:Card[] = []; // create blank array of Card from card.ts file
  get sortd():Card[]{
    console.log('access');
    return this.cards.sort((a, b)=>b.votes-a.votes);

  }


  onclick(firstname,lastname:HTMLInputElement){
    //alert("Hello Angular");
    console.log(firstname.value,lastname.value);
    const card = new Card(firstname.value,lastname.value,0);
    this.cards.push(card); //insert at last of array
    console.log(this.cards);

    firstname.value ='';
    lastname.value = '';

  }
}
