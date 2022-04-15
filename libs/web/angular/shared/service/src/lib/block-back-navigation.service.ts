import { Injectable, OnDestroy } from '@angular/core'
import { fromEvent, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class BlockBackNavigationService implements OnDestroy {
  private _unsubscribe: Subject<void> = new Subject<void>()

  // https://dev.to/aakashgoplani/disabling-browser-back-navigation-in-angular-2hd6
  blockBackNavigation() {
    history.pushState(null, '')

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((_) => {
        history.pushState(null, '')
        console.log(`back btn clicked`)
        // @TOOD action you need to do handle here
      })
  }

  ngOnDestroy(): void {
    this._unsubscribe.next()
    this._unsubscribe.complete()
  }
}
