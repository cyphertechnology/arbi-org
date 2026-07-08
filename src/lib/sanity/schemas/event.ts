import { defineField, defineType } from "sanity";

export default defineType({
    name: "event",
    title: "Event",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "eventStatus",
            title: "Event Status",
            type: "string",
            description: "Is this an upcoming event or a past event?",
            initialValue: "upcoming",
            options: {
                list: [
                    { title: "Upcoming", value: "upcoming" },
                    { title: "Past", value: "past" },
                ],
                layout: "radio",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "A full description of the event.",
            rows: 5,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "string",
            description: "Date of the event. Can be a range (e.g., 'April 20-22, 2024') or a single day (e.g., 'May 5, 2024').",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "time",
            title: "Time",
            type: "string",
            description: "e.g., '9:00 AM - 5:00 PM' or '2:00 PM CAT'.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "e.g., 'Goma, DRC' or 'Online (Zoom)'.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Featured Image",
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
            initialValue: "Events",
            options: {
                list: [
                    { title: "Events", value: "Events" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
