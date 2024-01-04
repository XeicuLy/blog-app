import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatDate = (date: string) => {
  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date format');
  }
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'yyyy-MM-dd');
};
