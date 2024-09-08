import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'ftd-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {

  data: any[] = []

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.fill()
  }

  fill(){
    this.apiService.getData().subscribe(data =>{
      this.data = data
      console.log(this.data)
    })
  }
}
