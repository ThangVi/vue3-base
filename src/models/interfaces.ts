export interface UserState {
  userInfo: UserInfo;
  currentRole: string;
  point: number;
  currentShop: Position;
}

export interface UserInfo {
  Agents: Agent[];
  Profile: Profile;
  Roles: Role[];
  PositionOrganization: PositionOrganization[];
}

export interface Agent {
  Address: string;
  BusinessOfficeCode: string;
  Code: string;
  Id: number;
  Name: string;
  ShortName: string;
}

export interface Role {
  Code: string;
  EncodedCode: string;
  Id: number;
  Name: string;
}

export interface PositionOrganization {
  Organization: Organization;
  Position: Position;
  Roles: Role[];
}

export interface Organization {
  Address: string;
  BusinessOfficeCode: string;
  Code: string;
  CodeV2: string;
  Id: number;
  Name: string;
  NameV2: string;
  Priority: number;
  ReferenceName: string;
  ShortName: string;
  ShortNameV2: string;
  Type: string;
}

export interface Position {
  Address: string;
  BusinessOfficeCode: string;
  Code: string;
  CodeV2: string;
  Id: number;
  Name: string;
  NameV2: string;
  ReferenceName: string;
  ShortName: string;
  ShortNameV2: string;
  Type: string;
}

export interface Profile {
  Address: string;
  Avatar: string;
  DateOfBirth: number;
  Description: string;
  Email: string;
  EmployeeCode: string;
  FirstName: string;
  FullName: string;
  Gender: string;
  Id: number;
  IdentityBack: string;
  IdentityDate: string;
  IdentityFront: string;
  IdentityNumber: string;
  IdentityPlace: string;
  IdentityType: string;
  LastName: string;
  Level: number;
  ManagerCode: string;
  Phone: string;
  ReferCode: string;
  Type: number;
  UserName: string;
}
