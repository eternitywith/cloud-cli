import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'

/**
 * @description 将google.timestamp转成Date
 * @param {object} timeStamp google.timestamp
 * @return {string} date
 */
export const timeStampToDate = (timeStamp: any): Date => {
  // try {
  //   return new Date(+timeStamp?.seconds * 1000);
  // } catch (error) {
  //   return null;
  // }
  const timestamp = new Timestamp()
  timestamp.setSeconds(timeStamp?.seconds)
  timestamp.setNanos(timeStamp?.nanos)
  return timestamp.toDate()
}
