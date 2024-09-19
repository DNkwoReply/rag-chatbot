import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'test_url for api :D, will do backend soon';

interface ChatResponse {
  response: string;
}

export const sendMessage = async (message: string): Promise<ChatResponse> => {
//   const response = await axios.post<ChatResponse>(`${API_BASE_URL}/chat`, { query: message });

await new Promise(resolve => setTimeout(resolve, 1000));

  return {response: `(Test) I am copying you, you said ${message}.`};
//   return response.data;
};
