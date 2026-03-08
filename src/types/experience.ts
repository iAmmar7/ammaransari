export interface ClientSummary {
  clientId: number;
  client: string;
  clientTag: string;
  clientUrl: string;
  clientTheme: string;
  clientSubsidiary?: string;
  clientSubsidiaryTag?: string;
  clientSubsidiaryUrl?: string;
  clientSubsidiaryTheme?: string;
  clientSummary: string[];
}

export type SummaryItem = string | ClientSummary;

export interface Experience {
  id: number;
  title: string;
  company: string;
  companyTag: string;
  companyUrl?: string;
  companyTheme: string;
  type: string;
  startDate: string;
  endDate?: string;
  location: string;
  summary: SummaryItem[];
}
