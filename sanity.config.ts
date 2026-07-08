import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import newsSchema from "./src/lib/sanity/schemas/news";
import eventSchema from "./src/lib/sanity/schemas/event";

export default defineConfig({
    name: "default",
    title: "ARBI Studio",

    projectId: "75s0pn4i",
    dataset: "production",

    // Studio configuration path (optional, defines base path for the studio UI routing)
    basePath: "/studio",

    plugins: [structureTool()],

    schema: {
        types: [newsSchema, eventSchema],
    },
});
