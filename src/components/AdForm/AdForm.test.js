import {
  render,
  screen,
  fireEvent,
  getByText,
  getByTestId,
} from "@testing-library/react";
import AdForm from "./AdForm";

test("renders all inputs", () => {
  render(<AdForm />);
  const typeInput = screen.getByLabelText(/type/i);
  const nameInput = screen.getByLabelText(/name/i);
  const backgroundInput = screen.getByLabelText(/background/i);
  const fontInput = screen.getByLabelText(/font/i);
  const contentInput = screen.getByLabelText(/written/i);
  const contactInput = screen.getByLabelText(/contact/i);
  const urlInput = screen.getByLabelText(/url/i);
  expect(typeInput).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(backgroundInput).toBeInTheDocument();
  expect(fontInput).toBeInTheDocument();
  expect(contentInput).toBeInTheDocument();
  expect(contactInput).toBeInTheDocument();
  expect(urlInput).toBeInTheDocument();
});

test("enter type search", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#type");

  fireEvent.change(selector, {
    target: { value: "cat" },
  });
  // const fontChange = screen.getByText(/cat/i);
  expect(selector.value).toBe('cat');
});

test("enter name", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#name");

  fireEvent.change(selector, {
    target: { value: "Happy" },
  });
  // const fontChange = screen.getByText(/cat/i);
  expect(selector.value).toBe('Happy');;
});

test("selecting background works", () => {
  const { container } = render(<AdForm />);
  const change = document.querySelector("#type");
  const backgoundSelector = document.querySelector("#background");

  fireEvent.change(change, {
    target: { value: "cat" },
  });
  fireEvent.mouseDown(backgoundSelector);
  const fontChange = document.querySelectorAll("li");
  // expect(fontChange).toBeInTheDocument();
});

test("selecting font works", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#font");
  fireEvent.mouseDown(selector);
  const choice = document.querySelector("#fancy");

  fireEvent.click(choice);
  const fontChange = screen.getAllByText(/fancy/i);
  expect(fontChange.length).toBeGreaterThan(0);;
});

test("enter content", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#content");

  fireEvent.change(selector, {
    target: { value: "This is my ad!" },
  });
  
  expect(selector.value).toBe('This is my ad!');
});

test("enter contact", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#contact");

  fireEvent.change(selector, {
    target: { value: "buystuff@email.com" },
  });
  
  expect(selector.value).toBe('buystuff@email.com');
});

test("enter url", () => {
  const { container } = render(<AdForm />);
  const selector = document.querySelector("#url");

  fireEvent.change(selector, {
    target: { value: "www.buystuff.com" },
  });
  
  expect(selector.value).toBe('www.buystuff.com');
});

