import { API, graphqlOperation } from "aws-amplify";

import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";

const createMessage = async (message) => {
  return await API.graphql(
    graphqlOperation(mutations.createMessage, { input: message })
  );
};

const getMessages = async () => {
  return await API.graphql(graphqlOperation(queries.listMessages));
};

export default { createMessage, getMessages };
