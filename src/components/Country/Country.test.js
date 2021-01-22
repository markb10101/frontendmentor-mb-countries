import React from "react";
import { render } from "@testing-library/react";
import Country from "./Country";

describe("Country tests", () => {
  it("should render", () => {
    expect(render(<Country />)).toBeTruthy();
  });
});
