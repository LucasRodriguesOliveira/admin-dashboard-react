import { Api } from './Api';

export const getTopSellers = async () => {
  return Api.get('top-sellers');
};
