import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;
  totalCount = 0;
  folksForm!: FormGroup;
  folks: Array<string> = [];
  activities = [
    'Indicador Fora',
    'Indicador Dentro',
    'Suporte',
    'Volante',
    'Leitor',
    'Presidente',
  ];
  videoAndSound = ['Audio', 'Vídeo'];
  constructor() {
    this.form = new FormBuilder().group({
      weeks: [''],
      folks: [''],
    });

    this.folksForm = new FormBuilder().group({});
  }

  ngOnInit(): void {
    this.form.get('folks')?.valueChanges.subscribe((changes) => {
      if (changes) this.totalCount = Number(changes);

      for (let i = 1; i <= this.totalCount; i++) {
        this.folksForm.addControl('folk' + i, new FormControl(''));
      }
    });
  }

  test() {
    console.log('form geral', this.form.value);
    console.log('form pessoas', this.folksForm.value);
    this.folks = [];

    for (let i = 1; i <= this.totalCount; i++) {
      this.folks.push(this.folksForm.get('folk' + i)?.value);
    }
    console.log('this.folks', this.folks);
  }
}
