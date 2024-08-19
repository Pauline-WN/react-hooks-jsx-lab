import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import image from '../images/demo.png'; // Import the image to verify the src

test("renders a div with the correct ID", () => {
  const { container } = render(<About />);
  expect(container.querySelector("#about")).toBeInTheDocument();
});

test("renders an h2 with the text 'About Me'", () => {
  render(<About />);
  const h2 = screen.getByText("About Me");
  expect(h2).toBeInTheDocument();
});

test("renders a p element with content", () => {
  render(<About />);
  const p = screen.getByText(/Here is some information about me/i);
  expect(p).toBeInTheDocument();
});

test("renders an img element with the correct src and alt attributes", () => {
  render(<About />);
  const img = screen.getByAltText("I made this");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", image); // Check if src is correctly set
});
