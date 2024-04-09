import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateContextOptions } from "trpc-uwebsockets";

export const createContext = ({ req, res }: CreateContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization === 'meow') {
      return {
        name: 'KATT',
      };
    }
    return null;
  };
  return {
    req,
    res,
    user: getUser(),
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
