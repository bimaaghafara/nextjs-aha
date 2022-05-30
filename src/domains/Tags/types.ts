export type Tag = {
  id: string;
  name: string;
  count: number;
};

export type Tags = Tag[];

export type ContentProps = {
  error: unknown;
  isLoading: boolean;
  data?: Tags;
};
