/**
 * @prettier
 */

import { atom } from 'recoil';

import { Models } from '../../utils/graphql/generated';

// Pick<T, K>は既に存在するT型からKで選択した一部のプロパティのみを含んだ新たな型を構築するUtility Types。
export type SearchWordsType = Pick<Models, 'title'> | undefined;

export const SearchWords = atom<SearchWordsType>({
  key: 'SearchWords',
  default: undefined,
});
