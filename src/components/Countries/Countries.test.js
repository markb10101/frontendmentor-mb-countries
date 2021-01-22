import React from "react";
import { render } from "@testing-library/react";
import Countries from "./Countries";

describe("Countries tests", () => {
  it("should render", () => {
    expect(render(<Countries />)).toBeTruthy();
  });
});
