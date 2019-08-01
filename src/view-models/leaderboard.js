import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Leaderboard {

	hackers = [
		{
			name: "Anonymous",
			github: "htd.rmg.bounty42",
			bugsReported: 4,
			totalReward: {
				amount: 21333,
				currency: "bitUSD"
			}
		},
		{
			name: "Valera Cogut",
			github: "valera-hacked-dex",
			bugsReported: 1,
			totalReward: {
				amount: 15000,
				currency: "bitUSD"
			}
		},
		{
			name: "Anonymous",
			github: "ngoplani88",
			bugsReported: 1,
			totalReward: {
				amount: 4000,
				currency: "bitUSD"
			}
		},
		{
			name: "Anonymous",
			github: "to be paid",
			bugsReported: 1,
			totalReward: {
				amount: 3750,
				currency: "bitUSD"
			}
		},
		{
			name: "Anonymous",
			github: "to be paid",
			bugsReported: 1,
			totalReward: {
				amount: 3667,
				currency: "bitUSD"
			}
		},
		{
			name: "Anonymous",
			github: "pro-abiral",
			bugsReported: 1,
			totalReward: {
				amount: 400,
				currency: "bitUSD"
			}
		},
		{
			name: "Anonymous",
			github: "mkzreport13",
			bugsReported: 1,
			totalReward: {
				amount: 333,
				currency: "bitUSD"
			}
		},
	];

	constructor(router) {
		this.router = router;
		this.processing = false;
	}

	attached() { }
}
