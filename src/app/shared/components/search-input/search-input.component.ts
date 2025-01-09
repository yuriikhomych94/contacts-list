import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'ct-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  private readonly searchChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input() label: string = 'Search';

  @Output() onSearch: Observable<string> = this.searchChanged.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  constructor() {
  }

  onInput(text: string): void {
    this.searchChanged.emit(text);
  }

}
