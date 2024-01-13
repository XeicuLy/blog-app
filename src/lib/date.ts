import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  if (isNaN(utcDate.getTime())) {
    throw new Error('Invalid date format');
  }
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'yyyy-MM-dd');
};
