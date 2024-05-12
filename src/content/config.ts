import { defineCollection, z, type SchemaContext } from "astro:content"

const gallerySchema = ({ image }: SchemaContext) =>
	z.object({
		image: image(),
		role: z.string(),
		play: z.string(),
		author: z.string(),
		sortOrder: z.number()
	})

const galleryCollection = defineCollection({
	type: "data",
	schema: gallerySchema
})

export const collections = {
	gallery: galleryCollection
}
