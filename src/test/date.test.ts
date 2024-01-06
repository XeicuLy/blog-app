import { formatDate } from '@/lib/date';
import { expect, test } from 'vitest';

test('formatDateはUTCの日付文字列を正しくJSTにフォーマットする', () => {
  const date = '2022-01-01T00:00:00Z'; // これはJSTで '2022-01-01T09:00:00+09:00' に相当します
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe('2022-01-01');
});

test('formatDateは無効な日付文字列に対してエラーをスローする', () => {
  const date = 'invalid-date-string';
  expect(() => formatDate(date)).toThrow('Invalid date format');
});
