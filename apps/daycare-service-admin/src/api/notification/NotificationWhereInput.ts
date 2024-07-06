import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  read?: BooleanNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
