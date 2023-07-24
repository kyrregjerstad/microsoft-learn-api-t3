// interface generated from api response and then https://quicktype.io/typescript
// should probably be further refined

export interface FetchResponse {
  modules: Module[];
}

export interface Module {
  summary: string;
  levels: string[];
  roles: string[];
  products: string[];
  subjects: string[];
  uid: string;
  type: string;
  title: string;
  duration_in_minutes: number;
  rating: Rating;
  popularity: number;
  icon_url: string;
  social_image_url: string;
  locale: string;
  last_modified: string;
  url: string;
  firstUnitUrl: string;
  units: string[];
  number_of_children: number;
}

export interface Rating {
  count: number;
  average: number;
}
