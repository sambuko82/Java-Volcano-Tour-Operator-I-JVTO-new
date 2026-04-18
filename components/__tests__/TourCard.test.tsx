import { render, screen } from "@testing-library/react";
import TourCard from "../TourCard";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: (props: any) => {
    const { alt, src, ...rest } = props;
    return <img alt={alt} src={typeof src === "string" ? src : ""} {...rest} />;
  },
}));

// motion/react animation mocked to render simple div
vi.mock("motion/react", () => ({ motion: { div: (props: any) => <div {...props} /> } }));

// Mock currency hook used by TourCard (module alias @/hooks/useCurrency will resolve via tsconfig paths in vitest)
vi.mock("@/hooks/useCurrency", () => ({ useCurrency: () => ({ formatPrice: (p: number) => `Rp ${p}` }) }));

const tour = {
  slug: "ijen-blue-fire",
  name: "Ijen Blue Fire",
  image: "/images/ijen.jpg",
  origin: "Bondowoso",
  rating: 4.9,
  bestFor: "Photography",
  duration: "2D/1N",
  priceFrom: 850000,
};

describe("TourCard", () => {
  it("renders tour title, price and action", () => {
    render(<TourCard tour={tour as any} index={0} />);

    expect(screen.getByText(/ijen blue fire/i)).toBeInTheDocument();
    expect(screen.getByText(/Rp 850000/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view package/i })).toBeInTheDocument();
  });
});
