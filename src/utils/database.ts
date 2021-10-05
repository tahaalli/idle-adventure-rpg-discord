import loki from "lokijs";
import { User } from "../interfaces/user";

// Create Loki instance
const db = new loki("dbStore.json", {
  autoload: true,
  autoloadCallback: LoadCallback,
});
// Get users collection
var users = db.getCollection("users");
if (users === null) users = db.addCollection("users");
// Load db callback
function LoadCallback() {
  users = db.getCollection("users");
  if (users === null) users = db.addCollection("users");
}

// Method to get user by id
export const GetUser = async (id: string): Promise<User> => {
  // Get user from store
  return users.findOne({ id: id });
};

// Method to insert user
export const InsertUser = async (user: User): Promise<void> => {
  users.insertOne(user);
  db.saveDatabase();
};
