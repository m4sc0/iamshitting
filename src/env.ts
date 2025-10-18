import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

export const env = z.object({
    DEVELOPMENT: z.coerce.boolean().default(false),
}).parse(process.env);