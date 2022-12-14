const baseURL = "https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT";

export const getPosts = async (token) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("error getting all posts");
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error registering user");
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error registering user");
  }
};

export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting users details");
  }
};

export const createPost = async (
  token,
  { title, description, price, location, willDeliver }
) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error creating a new post");
  }
};

export const deletePost = async (token, POST_ID) => {
  try {
    const response = await fetch(`${baseURL}/posts/${POST_ID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("post not deleted");
  }
};

export const userMessages = async (
  token,
  { _id, content, post, fromUser, createdAt, updatedAt }
) => {
  try {
    const response = await fetch(`${baseURL}/posts/POST_ID/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          _id,
          content,
          post,
          fromUser,
          createdAt,
          updatedAt,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting messages");
  }
};
