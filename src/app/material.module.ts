import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [MatIconModule,MatToolbarModule,MatCardModule,MatButtonModule]
})

export class MaterialModule{}

