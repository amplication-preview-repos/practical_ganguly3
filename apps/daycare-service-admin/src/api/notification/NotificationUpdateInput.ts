import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string | null;
  read?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
