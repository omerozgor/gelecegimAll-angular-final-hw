import { Injectable, QueryList } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
// Ekleme ve güncelleme işlemlerinde doldurulan alanların düzgün doldurulup doldurulmadığını kontrol eden servis
  constructor() { }

  validateInputs(inputs? :QueryList<MatInput>): boolean {
    let isValid = true;
    if (inputs) {
      const matInputs: MatInput[] = inputs['_results'];

      for (const matInput of matInputs) {
        if (matInput.required && matInput.ngControl.invalid) {
          
          isValid = false;
          break;
        }
      }
    }
    return isValid;
  }

  validateSelects(selects? : QueryList<MatSelect>):boolean{
    let isValid = true;
    if (selects) {
      const matInputs: MatInput[] = selects['_results'];

      for (const matInput of matInputs) {
        if (matInput.required && matInput.empty) {
          
          isValid = false;
          break;
        }
      }
    }
    return isValid;
  }
}
