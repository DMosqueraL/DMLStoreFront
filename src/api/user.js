import { ENV, authFetch } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER.GET}`;

      const response = await authFetch(url);
      const result = response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
