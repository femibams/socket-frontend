import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";

import { AuctionService } from "../../services/auction.service";

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit, OnDestroy {
  auctions: Observable<string[]>
  currentAuction: string
  private _auctionSub: Subscription

  constructor(private auctionService: AuctionService) { }

  ngOnInit() {
    this.auctions = this.auctionService.auctions
    this._auctionSub = this.auctionService.currentAuction.subscribe((auction) => this.currentAuction = auction.id)
  }

  loadAuction(id: string) {
    this.auctionService.getAuction(id);
  }

  ngOnDestroy() {
    this._auctionSub.unsubscribe()
  }

}
