import { ImageProps } from "../../types/components/Image";

export default function Image({
  width,
  height,
  fetchPriority,
  loading,
  alt,
  src,
}: ImageProps) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      loading={loading}
      alt={alt}
    />
  );
}
