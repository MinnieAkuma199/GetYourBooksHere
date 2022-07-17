const { AuthenticationError } = require("apollo-server-express"); //dont think i want this here

//requring in model User
const { User } = require("../models");
const { signToken } = require("../utils/auth");

//maybe take out line 10-12 if you're having isues
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Please log in!");
    },
  },
  //{ username, email, password } = args typically
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { savedBooks: args.input } },
          { new: true }
        );
      }
      throw new AuthenticationError("Log in please!");
    },

    removeBook: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { bookId: args.bookId } },
          { new: true }
        );
      }
      throw new AuthenticationError("Log in please!");
    },
  },
};

module.exports = resolvers;
