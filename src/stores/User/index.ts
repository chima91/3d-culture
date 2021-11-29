import { atom } from "recoil";
import { Subscribers, Users } from "../../utils/graphql/generated";

// Pickはある型から特定のプロパティのみを抜き出し、新しい型を生成するTypescriptの機能
export type GlobalUserType =
  | Pick<
      Users,
      | "id"
      | "name"
      | "email"
      | "profile_photo_url"
      | "created_at"
      | "updated_at"
    >
    & { subscribersByUserid?: Pick<Subscribers, "subscribe_id">[] }
  | undefined;

// keyはユニークとなるように命名する
export const GlobalUser = atom<GlobalUserType>({
  key: "GlobalUser",
  default: undefined,
});