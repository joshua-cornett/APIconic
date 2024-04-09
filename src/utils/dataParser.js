import { parseString } from 'xml2js';

// Helper function to parse data
export const parseData = async (data, format) => {
  if (format === 'xml') {
    return new Promise((resolve, reject) => {
      parseString(data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  } else if (format === 'json') {
    if (typeof data === 'string') {
      return JSON.parse(data);
    } else {
      return data; // If data is already an object, return it directly
    }
  }
};