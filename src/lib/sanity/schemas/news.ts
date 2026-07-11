import { defineField, defineType } from "sanity";

export default defineType({
    name: "news",
    title: "News",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The news article title. A URL slug will be automatically generated from this.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "A summary or body description of the news article.",
            rows: 5,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date Published",
            type: "date",
            options: {
                dateFormat: "YYYY-MM-DD",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            initialValue: "News",
            options: {
                list: [
                    { title: "News", value: "News" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
