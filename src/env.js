import { z } from "zod";

export const env = z.object({
    VITE_DEVELOPMENT: z.coerce.boolean().default(false),
    VITE_API_BASE_URL: z.string()
}).parse(import.meta.env);