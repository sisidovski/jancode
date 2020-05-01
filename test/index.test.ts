import { create, getMagazineCode } from "../src/index";

describe("Create JAN code ", () => {
  it("checks if valid JAN code is outputted", () => {
    const params = {
      code: 18029,
      year: 2019,
      month: 8,
    };
    expect(create(params)).toBe(4910180290893);
  });
  it("checks if periodical publication code is found from JAN code", () => {
    expect(getMagazineCode(4910024711294)).toBe(2471);
  });
});
