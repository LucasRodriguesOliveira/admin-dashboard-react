import { Api } from "./Api";

export const getOverviewItems = async () => {
  return Api.get('overview');
};
