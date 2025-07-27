import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  tasks = [
    {
      title: 'Tarea 1',
      description: 'Terminar reporte de bugs',
      dueDate: new Date('2025-07-20'),
    },
    {
      title: 'Tarea 2',
      description: 'Revisar pull requests',
      dueDate: new Date('2025-07-22'),
    },
  ];
}
