import { defineCollection, z, type SchemaContext } from "astro:content"

const baseGallerySchema = ({ image }: SchemaContext) =>
    z.object({
        image: image(),
        role: z.string(),
        play: z.string(),
        author: z.string().optional(),
        credit: z.string().optional(),
        attribution: z.string().optional(),
        sortOrder: z.number(),
    })

const gallerySchema = ({ image }: SchemaContext) =>
    z.discriminatedUnion("type", [
        baseGallerySchema({ image }).extend({
            type: z.literal("image").optional().default("image"),
        }),
        baseGallerySchema({ image }).extend({
            type: z.literal("video"),
            video: z.object({
                id: z.string(),
                title: z.string().optional(),
                startTime: z.number().optional(),
                autoplay: z.boolean().default(false),
            }),
        }),
    ])

const galleryCollection = defineCollection({
    type: "data",
    schema: gallerySchema
})

export const collections = {
    gallery: galleryCollection
}
