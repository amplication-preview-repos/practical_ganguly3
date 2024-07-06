import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "typeField";

export const AlertTitle = (record: TAlert): string => {
  return record.typeField?.toString() || String(record.id);
};
