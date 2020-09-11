import { Component, ChangeDetectionStrategy, OnChanges, Input, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, from, defer, of } from 'rxjs';
import { switchMap, delay, debounceTime, tap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'fsdk-robo-text',
  templateUrl: './robo-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoboTextComponent implements OnChanges {
  private readonly roboTextSubject$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  @Input() text: string = '';
  @Input() speed: number = 50; // symbols per second

  roboText$: Observable<string> = this.roboTextSubject$.pipe(
    switchMap((chunks: string[]) => from(chunks)),
    concatMap((chunk: string) => of(chunk).pipe(delay(this.speed)))
  );

  ngOnChanges({ text }: SimpleChanges): void {
    this.emitTextChanges(text.previousValue, text.currentValue);
  }

  private emitTextChanges(previous: string, current: string): void {
    const deletionChunks: string[] = this.getDeletionChunks(previous);
    const printingChunks: string[] = this.getPrintingChunks(current);

    this.roboTextSubject$.next([...deletionChunks, ...printingChunks]);
  }

  private getDeletionChunks(str: string = ''): string[] {
    return this.getArray(str.length + 1).map((i: number) => str.slice(0, -i));
  }

  private getPrintingChunks(str: string = ''): string[] {
    return this.getArray(str.length + 1).map((i: number) => str.slice(0, i));
  }

  private getArray(length: number): number[] {
    return Array.from({ length }, (v, i) => i);
  }
}
