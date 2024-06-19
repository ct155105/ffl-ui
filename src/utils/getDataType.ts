import { RbData, WrData } from '@/types/data';

type DataType = 'RbData' | 'WrData'; 

const getDataType = (data: RbData[] | WrData[]): DataType => {
  return (data as RbData[])[0].zone_attempts !== undefined ? 'RbData' : 'WrData';
};

export { getDataType };