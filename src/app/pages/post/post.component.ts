import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'ftd-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  dataForm: FormGroup;

  constructor(private fb: FormBuilder, private postservice: PostService) {
    this.dataForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      cantidad: [''],
      fecha: ['']
    });
  }

  onSubmit() {

    this.postservice.sendData(this.dataForm.value).subscribe(response => {
      console.log('Data sent successfully', response);
    }, error => {
      console.error('Error sending data', error);
    });
  }

}
