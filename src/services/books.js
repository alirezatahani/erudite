import client from '../utils/client';
import { encodeQueryData } from '../utils/queryParams';

export const getBooks = page => {
  const queryParams = encodeQueryData({ page: page });
  return client.get(`books/?${queryParams}`);
};

export const getBookDetail = bookId => {
  return client.get(`books/${bookId}`);
};
