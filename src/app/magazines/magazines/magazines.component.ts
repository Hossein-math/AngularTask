import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/request-all.service";
import {Magazine} from "../../interfaces/magazine.interface";

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css']
})
export class MagazinesComponent implements OnInit {
  magazines: Magazine[] = []

  constructor(private getMagazinesService: DataService) {}

  ngOnInit() {
    this.getMagazines()
  }

  private getMagazines() {
    this.getMagazinesService.getAll('/magazine').subscribe({
      next: (magazines) => {
        this.magazines = magazines as Magazine[]
        console.log(this.magazines)
      }
    })
  }
}
