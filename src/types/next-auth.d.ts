import { User } from "@/app/model/user";
import { PagesOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
interface NextAuthOptions {
  app: Partial<PagesOptions> | undefined;
}
