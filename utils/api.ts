import Axios from "axios";
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}`;
export function getUserProfile(token: string) {
  return Axios.get(`${baseUrl}/auth/profile`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function publishUserStory(token: string, data: any) {
  return Axios.post(
    `${baseUrl}/story/publish`,
    { data },
    {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "content-Type": "application/json",
      },
    }
  );
}

export function logoutUser(token: string) {
  return Axios.get(`${baseUrl}/auth/logout`, {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getStoryLike(token: string, storyId: string) {
  console.log(storyId);
  return await Axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/story/${storyId}/isliked`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
