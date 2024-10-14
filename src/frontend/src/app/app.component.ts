import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {map, Observable} from 'rxjs';
import {SystemService} from '../services/system.service';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  public version$!: Observable<string>;
  constructor(private systemService: SystemService) { }
  ngOnInit(): void {
    this.version$ = this.systemService.getVersion().pipe(map(value => value.version));
  }
}
