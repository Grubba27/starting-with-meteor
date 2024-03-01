import { Meteor } from "meteor/meteor";
import { ContactsCollection } from "./ContactsCollection";
import { check } from "meteor/check";

Meteor.methods({
  async "contacts.insert"({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    const result = await ContactsCollection.insertAsync({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
    console.log(result);
    return result;
  },
  async "contacts.remove"(_id) {
    check(_id, String);
    return await ContactsCollection.removeAsync({ _id });
  },
});
