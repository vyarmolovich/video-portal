import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadingBlockService } from 'src/app/services/loading-block.service';

@Component({
  selector: 'vp-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingBlockService: LoadingBlockService) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingBlockService.isLoaded()
        .pipe(debounceTime(200))
        .subscribe((value) => {
          this.loading = value;
        });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}