import axios from "axios";

const BASE_URL = "https://api.github.com/repos/facebook/react/issues";

const headers = {
  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
};

// Issue List API 호출 함수
export const getIssueList = async (page: number = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers,
      params: {
        state: "open",
        sort: "comments",
        direction: "desc",
        per_page: 30, // 페이지 당 이슈 수
        page,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Issue Detail API 호출 함수
export const getIssueDetail = async (issueNumber: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${issueNumber}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
