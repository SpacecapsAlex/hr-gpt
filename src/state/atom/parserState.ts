import { atom, RecoilState } from 'recoil';

export type ParserStateType = {
  firstName?: string;
  surName?: string;
  age?: number;
  citizenship?: string;
  country?: string;
  city?: string;
  level?: string;
  languages?: {
    name?: string;
    level?: string;
  }[];
  yearOfSkill?: number;
  monthOfSkill?: number;
  institute?: string[];
  skills?: string[];
  userProjects?: {
    name?: string;
    startDate?: string;
    endDate?: string;
    time?: string;
    position?: string;
    description?: string;
    someInformation?: string[];
    technologies?: string[];
  }[];
  errorParser?: string;
};

export const parserState: RecoilState<ParserStateType> = atom({
  key: 'parserState',
  default: {},
});
