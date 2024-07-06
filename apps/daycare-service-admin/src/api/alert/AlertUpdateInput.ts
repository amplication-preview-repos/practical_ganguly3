import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AlertUpdateInput = {
  message?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
