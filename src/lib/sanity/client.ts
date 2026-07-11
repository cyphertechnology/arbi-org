import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "75s0pn4i",
    dataset: "production",
    apiVersion: "2024-03-15",
    useCdn: false, // Set to false to ensure we always get the fresh data on changes, or true for production caching
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
