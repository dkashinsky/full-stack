import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalComponent } from './terminal.component';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<fsdk-terminal><pre>test text</pre></fsdk-terminal>`
})
class HostComponent {
  @ViewChild(TerminalComponent) terminalComponent: TerminalComponent;
}

describe('TerminalComponent', () => {
  let hostComponent: HostComponent;
  let terminalComponent: TerminalComponent;
  let fixture: ComponentFixture<HostComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalComponent, HostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
    terminalComponent = hostComponent.terminalComponent;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
    expect(terminalComponent).toBeTruthy();
  });

  it('should project content', () => {
    const terminalEl: DebugElement = el.query(By.css('.terminal'));
    expect(terminalEl.nativeElement.innerHTML).toBe('<pre>test text</pre>');
  })
});
