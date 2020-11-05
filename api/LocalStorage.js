import AsyncStorage from "@react-native-async-storage/async-storage";

const userKey = "user";

const removeUser = async () => {
  await AsyncStorage.removeItem(userKey);
};

const storeUser = async (username) => {
  try {
    let storedUser = await getUser();

    console.log(storedUser);
    let userId = guid();

    if (storedUser != null) {
      userId = storedUser.userId;
    }
    const valueToStore = {
      userId: userId,
      username: username,
    };
    await AsyncStorage.setItem(userKey, JSON.stringify(valueToStore));
    console.log("stored");
  } catch (error) {
    console.log("error while storing username: ", error);
  }
};

const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(userKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error while getting username: ", error);
    throw error;
  }
};

let guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export default { storeUser, getUser, removeUser };
