/* eslint-disable */
//@ts-ignore
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

describe("Hello component", () => {
  it("should render hello component with given text", () => {
    render(<Hello />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
