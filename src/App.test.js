import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//I'm getting some error before the tests even begin, so I've given up on them. I've been manually testing instead.

test("renders booking form" ,() =>{
  render(<App />);
  const headingElement = screen.getByText("Book now");
  expect(headingElement).toBeInTheDocument();
});
