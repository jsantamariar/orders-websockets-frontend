export const getLastsTickets = async () => {
  const response = await fetch(`${process.env.URL}/lasttickets`);
  const data = await response.json();
  console.log(data);

  return data.lastTickets;
};
