export const getLastsTickets = async () => {
  const response = await fetch("http://localhost:8080/lasttickets");
  const data = await response.json();
  console.log(data);

  return data.lastTickets;
};
