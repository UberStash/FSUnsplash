import { render, screen } from "@testing-library/react";
import App from "../../App";
import Header from "./Header";

test("renders the header", () => {
  render(<App />, <Header />);

  const message = screen.getByText(/welcome to ad pro/i);

  expect(message).toBeInTheDocument();
});
