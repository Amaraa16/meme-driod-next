export default async function mondoDataApiReq(action, options) {
  const result = await fetch(`https://ap-south-1.aws.data.mongodb-api.com/app/data-afqyl/endpoint/data/v1/action/${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": "EDGVJpV4KHtmYdUXHnhu9g0uQek9udI2wHSKqvuSSUZMlx7c0sV8nSpqfVfjmElv",
    },
    body: JSON.stringify({
      dataSource: "Cluster0",
      database: "memes",
      collection: "memes",
      ...options,
    }),
  }).then((res) => res.json());

  return result;
}
