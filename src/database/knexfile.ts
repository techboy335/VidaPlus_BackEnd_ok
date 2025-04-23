// src/database/knexfile.ts

import { Knex } from "knex";
import { resolve, join } from "path";

const migrationsDir = resolve(__dirname, "migrations");
const dbFile      = resolve(__dirname, "dev.db");

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      // caminho absoluto para o arquivo dev.db dentro de src/database
      filename: dbFile
    },
    useNullAsDefault: true,
    migrations: {
      // caminho absoluto para a pasta migrations dentro de src/database
      directory: migrationsDir
    }
  }
};

export default config;
