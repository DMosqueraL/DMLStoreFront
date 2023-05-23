import { ENV } from "@/utils";

export class Game {
  async getLastPublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;

      const respose = await fetch(url);
      const result = await respose.json();

      if (!Response.status === 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLastestPublished({ limit = 9, platformId = null }) {
    try {
      const filterPlatform =
        platformId && `filters[platform][id][$eq]=${platformId}`;
      const pagination = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${pagination}&${filterPlatform}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const respose = await fetch(url);
      const result = await respose.json();

      if (!Response.status === 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
