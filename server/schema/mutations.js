const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Song = mongoose.model("song");
const Lyric = mongoose.model("lyric");
const User = mongoose.model("user");
const SongType = require("./song_type");
const LyricType = require("./lyric_type");
const UserType = require("./user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { title }) {
        return new Song({ title }).save();
      },
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID },
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      },
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      },
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id });
      },
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        mobile: { type: GraphQLString },
        address: { type: GraphQLString },
        occupation: { type: GraphQLString },
        income: { type: GraphQLString },
        idProofNumber: { type: GraphQLString },
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(
        parentValue,
        {
          name,
          email,
          mobile,
          address,
          occupation,
          income,
          idProofNumber,
          userName,
          password,
        }
      ) {
        return new User({
          name,
          email,
          mobile,
          address,
          occupation,
          income,
          idProofNumber,
          userName,
          password,
        }).save();
      },
    },
  },
});

module.exports = mutation;
