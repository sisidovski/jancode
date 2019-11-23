import {create, extractMagazineCode} from '../src/index';

describe('JAN code', () => {
  it ('expects', () => {
    expect(create(18029, 2019, 8)).toBe(4910180290893)
  })
})
