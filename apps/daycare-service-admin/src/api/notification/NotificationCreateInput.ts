import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content?: string | null;
  read?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
