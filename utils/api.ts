import Axios from "axios";

export function publishUserStory(token: string, data: any) {
  return Axios.post(
    `http://localhost:5000/story/publish`,
    { data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-Type": "application/json",
      },
    }
  );
}

export function logoutUser(token: string) {
  return Axios.get("http://localhost:5000/auth/logout", {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
