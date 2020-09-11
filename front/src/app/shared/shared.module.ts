import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './components/terminal/terminal.component';
import { RoboTextComponent } from './components/robo-text/robo-text.component';

@NgModule({
  declarations: [TerminalComponent, RoboTextComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RoboTextComponent,
    TerminalComponent,
  ]
})
export class SharedModule { }
