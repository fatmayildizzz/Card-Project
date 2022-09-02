import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  posts=[
    {
      title: 'Dag Bisikleti',
      imageUrl:'assets/biking.jpeg',
      content:'Bugun bisikleti guzel surdum',
      userName:'Fatma'
    },
    {
      title: 'Tirmanis',
      imageUrl:'assets/mountain.jpeg',
      content:'Bugun iyi tirmandim',
      userName:'Sevilay'

    },
    {
      title: 'Doga Yuruyusu',
      imageUrl:'assets/tree.jpeg',
      content:'Hadi biraz macka parkinda yuruyelim',
      userName:'Erdem'
    }
  ]
}
