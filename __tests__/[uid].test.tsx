import { render, screen } from "@testing-library/react";
import DetailsRoute from "../src/pages/module/[uid]";
import "@testing-library/jest-dom";

const mockModuleDetails = {
  summary: "This is a test module",
  levels: ["intermediate"],
  roles: ["business-user"],
  products: ["azure", "azure-stack-edge", "azure-stack-hub"],
  subjects: ["subject1", "subject2"],
  uid: "learn.azure.design-secure-environment-government",
  type: "module",
  title: "Test Module",
  duration_in_minutes: 15,
  rating: {
    count: 100,
    average: 4.5,
  },
  popularity: 0.432377012977284,
  icon_url:
    "https://learn.microsoft.com/en-us/training/achievements/design-secure-environment-government.svg",
  social_image_url:
    "https://learn.microsoft.com/en-us/training/achievements/generic-social.png",
  locale: "en-us",
  last_modified: "2023-05-17T17:33:00+00:00",
  url: "https://learn.microsoft.com/",
  firstUnitUrl:
    "https://learn.microsoft.com/en-us/training/modules/design-secure-environment-government/1-introduction/?WT.mc_id=api_CatalogApi",
  units: [
    "learn.azure.design-secure-environment-government.1-introduction",
    "learn.azure.design-secure-environment-government.2-discover-cloud-solutions",
    "learn.azure.design-secure-environment-government.3-safeguard-data-azure",
    "learn.azure.design-secure-environment-government.4-design-data-classifications",
    "learn.azure.design-secure-environment-government.5-knowledge-check",
    "learn.azure.design-secure-environment-government.6-summary",
  ],
  number_of_children: 6,
};

describe("DetailsRoute", () => {
  it("renders without crashing", () => {
    render(<DetailsRoute moduleDetails={mockModuleDetails} />);
    expect(
      screen.getByRole("heading", { level: 1, name: /Test Module/i })
    ).toBeInTheDocument();
  });

  it("renders the correct information for the module", () => {
    render(<DetailsRoute moduleDetails={mockModuleDetails} />);
    expect(screen.getByText(/This is a test module/i)).toBeInTheDocument();
    expect(screen.getByText(/subject1/i)).toBeInTheDocument();
    expect(screen.getByText(/subject2/i)).toBeInTheDocument();
  });

  it("gives the anchor tag the correct href", () => {
    render(<DetailsRoute moduleDetails={mockModuleDetails} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://learn.microsoft.com/"
    );
  });
});
