import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Auction, Bid } from "../models/auction";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  currentAuction = this.socket.fromEvent<Auction>('auction')
  auctions = this.socket.fromEvent<string[]>('auctions')

  constructor(private socket: Socket) { }

  getAuction(id: string) {
    this.socket.emit('getAuction', id)
  }

  addBid(bid: Bid) {
    this.socket.emit('addBid', bid)
  }
}
