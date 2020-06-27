export class Auction {
    id: string;
    name: string;
    bids: [
        {
            userId: string;
            amount: number;
        }
    ]
}

export class Bid {
    auctionId: string;
    userId: string;
    amount: number;
}