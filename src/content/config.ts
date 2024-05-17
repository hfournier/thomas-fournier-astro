import { defineCollection, z, type SchemaContext } from "astro:content"

const gallerySchema = ({ image }: SchemaContext) =>
	z.object({
		image: image(),
		role: z.string(),
		play: z.string(),
		author: z.string().optional(),
		credit: z.string().optional(),
		attribution: z.string().optional(),
		sortOrder: z.number(),
		type: z.string().default("image").optional(),
		video: z
			.object({
				id: z.string(),
				title: z.string().optional(),
				startTime: z.string().optional(),
				autoplay: z.boolean().default(false).optional()
			})
			.optional()
	})

const galleryCollection = defineCollection({
	type: "data",
	schema: gallerySchema
})

export const collections = {
	gallery: galleryCollection
}
