import { z } from 'zod'

export const testSchema = z.object({
	email: z.string().trim().email(),
})
