import { ImageProps } from "../../types/components/Image";

export default function Image({
  width,
  height,
  fetchPriority,
  loading,
  alt,
  src,
  className,
}: ImageProps) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      loading={loading}
      alt={alt}
      className={className}
    />
  );
}
