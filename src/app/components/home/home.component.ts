import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form!: FormGroup;

  constructor() {
    this.form = new FormBuilder().group({
      semanas: [''],
    });
  }
}
