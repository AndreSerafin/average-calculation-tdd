import { describe, expect, it } from 'vitest';
import {calculateAverage} from './average-calculation';

describe('calculateAverage', () => {
  it('calculates the average of three integer scores', () => {
    expect(calculateAverage(5, 7, 9)).toBe(7);
  });

  it('returns zero if all scores are zero', () => {
    expect(calculateAverage(0, 0, 0)).toBe(0);
  });

  it('correctly calculates the average with maximum possible scores', () => {
    expect(calculateAverage(10, 10, 10)).toBe(10);
  });

  it('correctly calculates the average with decimal values', () => {
    expect(calculateAverage(7.5, 8.2, 9.1)).toBeCloseTo(8.27, 2);
  });
});