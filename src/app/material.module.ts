import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {  MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import {MatInputModule } from "@angular/material/input";
@NgModule({
    exports: [
        MatOptionModule,
        MatRadioModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    
    ]
})

export class MaterialModule{}

