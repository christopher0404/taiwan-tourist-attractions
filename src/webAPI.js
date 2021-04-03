import getAuthorizationHeader from './AuthorizationHeader';

const BASE_URL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot';
const top = 30;

export const getScenicSpots = async (city, skip) => {
  try {
    const url = city ? `${BASE_URL}/${city}` : `${BASE_URL}`;
    const res = await fetch(`${url}?$format=JSON&$top=${top}&$skip=${skip}`, {
      headers: {
        authorization: getAuthorizationHeader()
      }
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  };
}
