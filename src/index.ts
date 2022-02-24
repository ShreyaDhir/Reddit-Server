import { MikroORM } from "@mikro-orm/core";

const main = async () => {
  const orm = await MikroORM.init()({
    dbName: 'lireddit',
    type: 'postgresql',
    debug: process.env.NODE_DEV === 'production' // true in dev
  });
};

// 1. creating mikro-orm instance
// 2. asynchronise the GET request

console.log("hello world")