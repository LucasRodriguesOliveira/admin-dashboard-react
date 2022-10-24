import { Api } from './Api';

export const getRecentSales = async () => {
  return Api.get('recent-sales');
};
