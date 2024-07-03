
require('dotenv').config()

import type { Knex } from "knex";


// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
 

  development: {
    client: "better-sqlite3",
    connection: {
      filename: "./databases/devdb.sqlite3"
    },
    useNullAsDefault : true
  },

};

export default config