import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";

export const createMessage = async (text, username) => {
  let message = {
    id: 1,
    text: text,
    username: username,
  };

  return await API.graphql(
    graphqlOperation(mutations.createMessage, { input: message })
  );
};

export const getMessages = async () => {
  return await API.graphql(graphqlOperation(queries.listMessages));
};

export default { createMessage };
