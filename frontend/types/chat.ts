export interface Source {
  filename: string;
  page: number;
  content?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}
