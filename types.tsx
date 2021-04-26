export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Programs: undefined;
  Activities: undefined;
  Map: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type ProgramParamList = {
  ProgramListScreen: undefined;
  ProgramDetailsScreen: undefined;
  ProgramFilterScreen: undefined;
  FilterRootCards: undefined;
  FilterAccessOptions: undefined;
  FilterAgesGrades: undefined;
  FilterCostsAndTravel: undefined;
  FilterIndividualSports: undefined;
  FilterIndoorPrograms: undefined;
  FilterLanguageOptions: undefined;
  FilterOutdoorPrograms: undefined;
  FilterTeamSports: undefined;
  FilterFormB: undefined;
};

export type FilterParamList = {
  ProgramFilterScreen: undefined;
  FilterRootCards: undefined;
  FilterAccessOptions: undefined;
  FilterAgesGrades: undefined;
  FilterCostsAndTravel: undefined;
  FilterIndividualSports: undefined;
  FilterIndoorPrograms: undefined;
  FilterLanguageOptions: undefined;
  FilterOutdoorPrograms: undefined;
  FilterTeamSports: undefined;
  FilterFormB: undefined;
};

export type ActivityParamList = {
  ActivityListScreen: undefined;
  ActivityDetailsScreen: undefined;
  ActivityProgramDetailsScreen: undefined;
};

export type MapParamList = {
  MapScreen: undefined;
  MapProgramDetailsScreen: undefined;
};

export type test = {
  Hello: String;
  World: String;
};

export type FilterCriteria = {
  Criteria: [];
  Details: [];
};

export type IncomingFilter = {
  IncomingFilterActivties: [];
  IncomingFilterTaxonomy: [];
};

export type IncomingActivities = {
  Activities: [];
};

export type ProgramInformation = {
  Programs: [[]];
};

export type Database = {
  LocalDatabase: Database;
};

export type SearchTerm = {
  CurrentSearch: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type ProgramLocation = {
  title: string;
  key: number;
  coordinates: Coordinates;
  description: string;
  program_id: number;
};

export type ActivityProgramCount = {
  activity: string;
  pic_url: string;
  numberOfPrograms: number;
  programKeys: number[];
};