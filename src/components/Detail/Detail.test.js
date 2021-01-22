import React from "react";
import { render } from "@testing-library/react";
import Detail from "./Detail";

describe("Detail tests", () => {
  it("should render", () => {
    expect(render(<Detail />)).toBeTruthy();
  });
});
