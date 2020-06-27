import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Socket } from 'ngx-socket-io';

import { AuctionService } from "src/app/services/auction.service";
import { Subscription } from 'rxjs';
import { Auction, Bid } from "src/app/models/auction";
import { startWith, tap } from "rxjs/operators";

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionComponent implements OnInit, OnDestroy {
  auction: Auction
  amount = new FormControl(0);
  bid: Bid = {
    auctionId: '0',
    userId: '',
    amount: 0
  }
  private _auctionSub: Subscription

  constructor(private auctionService: AuctionService, private socket: Socket) { }

  ngOnInit() {
    this._auctionSub = this.auctionService.currentAuction.pipe(
      tap(data => console.log('tap data', data)),
      startWith({ id: '', name: 'Click on an auction to view', bids:[] })
    ).subscribe((auction: Auction)=>{ this.auction = auction }, ()=> {console.log('function 1')}, ()=>{console.log('function2')} )
    this.socket.emit('addBid', this.bid)
  }

  ngOnDestroy() {
    this._auctionSub.unsubscribe();
  }

  addBid() {
    console.log('clicked bid button!!!!!!')
    this.bid = {
      auctionId: this.auction.id,
      userId: 'femi',
      amount: this.amount.value
    }
    this.auctionService.addBid(this.bid)
  }

}
