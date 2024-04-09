import { publicProcedure, router } from "./trpc";

let count = 0;

export const appRouter = router({
	count: publicProcedure
		.query(() => count),
	increment: publicProcedure
		.mutation(() => ++count),
});

export type AppRouter = typeof appRouter;
