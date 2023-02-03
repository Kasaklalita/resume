export interface ILanguage {
  title: string;
  level: string;
}

export interface IWorkExperience {
  companyName: string;
  position: string;
  dateStarted: string;
  dateEnded: string;
  responsibilities: string[];
}

export interface IEducation {
  graduatedYear: string;
  organizationName: string;
  educationType: string;
  direction: string;
}

export interface ICourse {
  graduatedYear: string;
  courseName: string;
  organization: string;
}
