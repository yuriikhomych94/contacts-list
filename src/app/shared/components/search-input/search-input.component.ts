import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';

@Component({
  selector: 'ct-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnInit {

  @Input() label: string = 'Search';

  @Output() onSearch: Observable<string>;

  private readonly searchChanged = new EventEmitter<string>();

  constructor() {
    this.onSearch = this.searchChanged.pipe(
      debounceTime(300),
      distinctUntilChanged()
    )
  }

  ngOnInit(): void {
  }

  onInput(text: string) {
    this.searchChanged.emit(text);
  }

}
