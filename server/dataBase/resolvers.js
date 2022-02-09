import { NewsModel } from "./model";

const newsResolver = {
  Query: {
    allNews: async (_, args) => {
      const cond = {};

      // if (args.name) {
      //   console.log(args.name);
      //   cond.title = new RegExp(args.name);
      //   console.log(cond);
      // }
      if (args.name) {
        console.log(args.name);
        cond.type = { $in: [args.name] };
      }

      cond.status = { $in: [0, 1] };
      return await NewsModel.find(cond);
    },
    news: async (_, args) => {
      return await NewsModel.findById(args.newsId);
    },
    findNews: async (_, args) => {
      return await NewsModel.find({
        title: new RegExp(args.name),
      });
    },
  },
  Mutation: {
    addNews: async (_, args) => {
      return await NewsModel.create({ ...args.input, status: 1 });
    },
    updateNews: async (_, args) => {
      return await NewsModel.findByIdAndUpdate(
        args.id,
        { ...args.input, status: 1 },
        {
          new: true,
        }
      );
    },
    deleteNews: async (_, args) => {
      try {
        await NewsModel.findByIdAndUpdate(
          args.id,
          { status: -1 },
          {
            new: true,
          }
        );

        return true;
      } catch (error) {
        throw new Error("خطا");
      }
    },
  },
};

export default newsResolver;
