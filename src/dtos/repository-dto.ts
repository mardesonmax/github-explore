export interface RepositoryDTO {
  id: string;
  full_name: string;
  description?: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
  forks: number;
  watchers: number;
  open_issues: number;
}
