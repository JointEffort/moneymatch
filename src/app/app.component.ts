import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public readonly name = 'Pap3rW0rkz';

    ngOnInit(): void {
        console.log('component initialized');
    }
}

