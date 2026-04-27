import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  getMissingInteger(nums: number[]): number {
    const numSet = new Set(nums);
    let i = 1;
    while (numSet.has(i)) {
      i++;
    }
    return i;
  }

  getMissingIntegerAlt(nums: number[]): number {
    const maxNum = Math.max(...nums);
    if (!isFinite(maxNum) || maxNum < 1) {
      return 1;
    }
    for (let i = 1; i <= maxNum; i++) {
      if (!nums.includes(i)) {
        return i;
      }
    }
    return maxNum + 1;
  }
}
