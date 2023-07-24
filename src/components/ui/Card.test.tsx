import { render, screen } from "@testing-library/react";
import { Card, CardTitle } from "./card";
import "@testing-library/jest-dom/extend-expect";

describe("Card", () => {
  it("renders CardTitle", () => {
    render(
      <Card>
        <CardTitle>Test Card Title</CardTitle>
      </Card>
    );
    const cardTitle = screen.getByRole("heading", { name: /Test Card Title/i });
    expect(cardTitle).toBeInTheDocument();
  });
});
