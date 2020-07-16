import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
enum COLORS {
	GREY = '#E0E0E0',
	GREEN = '#76FF03',
	YELLOW = '#F5CC00',
	RED = '#DD2C00'
}

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

	@Input() rating: number;
	@Input() isDisabled: boolean;
	@Output() ratingChange: EventEmitter<number> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	rate(index: number) {
		console.log(index);
		this.rating = index;
		this.ratingChange.emit(this.rating);
	}

	getColor(index: number) {
		if (this.isAboveRating(index)) {
			return COLORS.GREY;
		}

		switch (this.rating) {
			case 1:
			case 2:
				return COLORS.RED;
			case 3:
				return COLORS.GREEN;
			case 4:
			case 5:
				return COLORS.YELLOW;
			default:
				return COLORS.GREY;
		}
	}

	isAboveRating(index: number): boolean {
		return index > this.rating;
	}

}
