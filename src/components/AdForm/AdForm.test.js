import { render, screen, fireEvent, getByRoll } from "@testing-library/react";
import AdForm from "./AdForm";

test("renders all inputs", () => {
  render(<AdForm />);
  const typeInput = screen.getByLabelText(/search/i);
  const nameInput = screen.getByLabelText(/name/i);
  const backgroundInput = screen.getByLabelText(/select/i);
  const fontInput = screen.getByLabelText(/font/i);
  const contentInput = screen.getByLabelText(/message/i);
  const contactInput = screen.getByLabelText(/contact/i);
  const urlInput = screen.getByLabelText(/url/i);
  const priceInput = screen.getByLabelText(/price/i);
  const colorInput = screen.getByLabelText(/color/i);

  expect(typeInput).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(backgroundInput).toBeInTheDocument();
  expect(fontInput).toBeInTheDocument();
  expect(contentInput).toBeInTheDocument();
  expect(contactInput).toBeInTheDocument();
  expect(urlInput).toBeInTheDocument();
  expect(priceInput).toBeInTheDocument();
  expect(colorInput).toBeInTheDocument();
});

test("enter type search", () => {
  render(<AdForm />);
  const selector = document.querySelector("#type");
  fireEvent.change(selector, {
    target: { value: "cat" },
  });
  expect(selector.value).toBe("cat");
});

test("enter name", () => {
  render(<AdForm />);
  const selector = document.querySelector("#name");

  fireEvent.change(selector, {
    target: { value: "Happy" },
  });

  expect(selector.value).toBe("Happy");
});

// having problems getting this test to work!
test("selecting background works", () => {
  render(<AdForm />);
  const change = document.querySelector("#type");
  fireEvent.change(change, {
    target: { value: "hill" },
  });
  expect(change.value).toBe("hill");

  const backgoundSelector = document.querySelector("#background");
  fireEvent.click(backgoundSelector);
  // fireEvent.click(getByAltText(backgoundSelector, 'image'));
  // fireEvent.click(backgoundSelector.firstChild);
  // const backChange = document.querySelector('.img');

  expect(backgoundSelector.value).toBe(true);
});

test("selecting font works", () => {
  render(<AdForm />);
  const selector = document.querySelector("#font");
  fireEvent.mouseDown(selector);
  const choice = document.querySelector("#fancy");

  fireEvent.click(choice);
  const fontChange = screen.getAllByText(/fancy/i);
  expect(fontChange.length).toBeGreaterThan(0);
});

test("enter content", () => {
  render(<AdForm />);
  const selector = document.querySelector("#content");

  fireEvent.change(selector, {
    target: { value: "This is my ad!" },
  });

  expect(selector.value).toBe("This is my ad!");
});

test("enter contact", () => {
  render(<AdForm />);
  const selector = document.querySelector("#contact-info");

  fireEvent.change(selector, {
    target: { value: "buystuff@email.com" },
  });

  expect(selector.value).toBe("buystuff@email.com");
});

test("enter url", () => {
  render(<AdForm />);
  const selector = document.querySelector("#url");

  fireEvent.change(selector, {
    target: { value: "www.buystuff.com" },
  });

  expect(selector.value).toBe("www.buystuff.com");
});
