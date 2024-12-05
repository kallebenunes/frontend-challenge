import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Image from "./index";

describe("Image Component", () => {
  it("renders an image with correct attributes", () => {
    const width = 500;
    const height = 300;
    const fetchPriority = "high";
    const loading = "lazy";
    const src = "src.test.image";
    const alt = "Alt text";

    render(
      <Image
        width={width}
        height={height}
        fetchPriority={fetchPriority}
        loading={loading}
        src={src}
        alt={alt}
      />
    );

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", src);
    expect(imgElement).toHaveAttribute("alt", alt);
    expect(imgElement).toHaveAttribute("width", width.toString()); // Check width
    expect(imgElement).toHaveAttribute("height", height.toString()); // Check height
    expect(imgElement).toHaveAttribute("fetchpriority", fetchPriority); // Check fetchPriority
    expect(imgElement).toHaveAttribute("loading", loading); // Check loading
  });
});
