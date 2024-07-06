import { User } from "../user/User";

export type Alert = {
  createdAt: Date;
  id: string;
  message: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
