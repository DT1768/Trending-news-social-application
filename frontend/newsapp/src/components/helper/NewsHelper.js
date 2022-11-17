import { API } from "../../backend";

export const getAllNews = (user) => {
  const data = {
    location: user.location,
  };

  return fetch(`${API}/trending`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
