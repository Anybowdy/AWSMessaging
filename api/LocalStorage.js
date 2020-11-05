import AsyncStorage from "@react-native-async-storage/async-storage";

var uuid = require("react-native-uuid");

const userKey = "user";

const storeUser = async (username) => {
  try {
    let storedUser = getUser();
    const userId = storedUser.userId;
    if (storedUser == null) {
      userId = uuid.v1();
    }
    const valueToStore = {
      userId: newUserId,
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

export default { storeUsername, getUsername };
