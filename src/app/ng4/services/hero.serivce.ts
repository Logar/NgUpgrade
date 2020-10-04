import { Injectable } from '@angular/core';
 
@Injectable()
export class Heroes {
  get() {
    return [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Spiderman')
    ];
  }
}

export class Hero {
    id: number;
    name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}