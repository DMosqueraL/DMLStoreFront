import { ENV } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER.GET}`;

      const params = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjg0NjkzMzc1LCJleHAiOjE2ODcyODUzNzV9.OqXpuUAlE5AWP823uAvdMfzAlu3JmvHA-ep5Z-H9oLY",
        },
      };

      const response = await fetch(url, params);
      const result = response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
