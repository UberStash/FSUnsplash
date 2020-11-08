import { render, screen } from "@testing-library/react";
import AdForm from "../AdForm/AdForm";
import AdPreview from "./AdPreview";

test("renders text before previewed", () => {
  render(<AdForm />, <AdPreview />);

  const message = screen.getByText(/message/i);

  expect(message).toBeInTheDocument();
});

test("renders preview correctly", () => {
  render(
    <AdPreview
      state={{
        name: "happy",
        content: "message",
        contact: "test@test.com",
        price: "$1",
        url: "www.google.com",
      }}
    />
  );

  const name = screen.getByText(/happy/i);
  const message = screen.getByText(/message/i);
  const contact = screen.getByText(/test@test.com/i);
  const price = screen.getByText(/1/i);
  expect(name).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
  expect(price).toBeInTheDocument();
});
