import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatAutocompleteModule, MatTabsModule, MatTableModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule, MatTabsModule, MatTableModule],
exports: [MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule, MatTabsModule, MatTableModule]
})

export class MaterialModule{}