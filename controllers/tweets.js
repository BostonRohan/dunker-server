import needle from "needle";

//Getting tweets
const getTweets = async (req, res) => {
  const token = process.env.BEARER_TOKEN;
  const id = await getID(token);
  const tweetURL = `https://api.twitter.com/2/users/${id}/tweets`;
  const response = await needle("get", tweetURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  res.send(response.body);
};

//Getting id for woj
const getID = async () => {
  const token = process.env.BEARER_TOKEN;
  const authorURL = "https://api.twitter.com/2/users/by?usernames=wojespn";
  const response = await needle("get", authorURL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const id = response.body.data.map((data) => data.id);
  return id.join(" ");
};

export default getTweets;
