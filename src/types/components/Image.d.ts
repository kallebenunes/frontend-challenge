export type FETCH_PRIORITY_OPTIONS = "high" | "low" | "auto";
export type LOADING_OPTIONS = "eager" | "lazy";

export type ImageProps = {
  width: number | string;
  height: number | string;
  fetchPriority: FETCH_PRIORITY_OPTIONS;
  loading: LOADING_OPTIONS;
  src: string;
  alt: string;
};
