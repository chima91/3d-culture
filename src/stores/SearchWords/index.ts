import { atom } from "recoil";

import { Models } from "../../utils/graphql/generated";

export type SearchWordsType =
  Pick<
    Models,
    | "title"
  >
  | undefined;

export const SearchWords = atom<SearchWordsType>({
  key: "SearchWords",
  default: undefined,
});