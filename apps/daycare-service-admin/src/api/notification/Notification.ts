import { User } from "../user/User";

export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  read: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
