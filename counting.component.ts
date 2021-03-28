import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class CountingComponent {
    @Input()
    titlename: string;
    countclick = 0;

    constructor() {}

    countCk(){
        this.countclick = this.countclick + 1;
    }
}