import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [TaskCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, TaskCardComponent],
})
export class SharedModule {}
