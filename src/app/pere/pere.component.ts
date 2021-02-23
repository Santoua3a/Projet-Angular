import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  /*tab : Array<string> = ['premier', 'deuxième', 'troisième'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale = 'Paris';*/

  moyenne=0;
  somme=0;
  nbr=0;
  enfants=['Mohssen','Salah','Tijeni'];

  constructor() { }

  ngOnInit(): void {
  }

  computeAvg(note:number){
    this.somme+=note;
    this.nbr++;
    this.moyenne=this.somme/this.nbr;
  }

}
