import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>comentarios de lo que sea </h3>
    <img src="https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" alt=""> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda esse, molestias commodi beatae iste placeat fugit harum asperiores id nulla suscipit dicta doloribus quo sint magni! Ipsa, perferendis magnam.</p>
  `,
  styles: `
  img{
    width:100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {

}
