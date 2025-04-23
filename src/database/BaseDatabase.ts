import knex from "knex";
import config from "./knexfile";

export abstract class BaseDatabase {
  protected static connection = knex(config.development);
}
