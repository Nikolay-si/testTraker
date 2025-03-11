import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { SuccessfulResponse } from "../types";

export const fetchMatches = async (): Promise<SuccessfulResponse> => {
  try {
    const response = await axios.get<SuccessfulResponse>(
      `${BASE_URL}/fronttemp`
    );
    return response.data;
  } catch (error) {
    console.error("API недоступно");
    return {
      ok: false,
      data: {
        matches: [],
      },
    };
  }
};
