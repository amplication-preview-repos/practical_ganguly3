import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertCreateInput = {
  message?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
