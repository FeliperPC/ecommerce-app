/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: { projectId, dataset },
  typegen: {
    path: "./lib/sanity/queries", // glob pattern to your typescript files
    schema: "./schema.json", // path to your schema file, generated with 'sanity schema extract' command
    generates: "./sanity.types.ts", // path to the output file for generated type definitions
  },
});
