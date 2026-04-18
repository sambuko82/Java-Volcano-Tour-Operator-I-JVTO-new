import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import { vi } from "vitest";

// Simple mock for next/image to render an img element in tests
vi.mock("next/image", () => ({
  default: (props: any) => {
    const { alt, src, ...rest } = props;
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img alt={alt} src={typeof src === "string" ? src : ""} {...rest} />;
  },
}));

describe("Hero", () => {
  it("renders title and CTAs", () => {
    render(<Hero title="Explore Kawah Ijen" tagline="Private tours backed by proof" />);

    expect(screen.getByRole("heading", { name: /explore kawah ijen/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /book a private tour/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /browse tours/i })).toBeInTheDocument();
  });
});
