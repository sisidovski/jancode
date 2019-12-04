import {create, getPeriodicalPublicationCode} from '../src/index';

describe('Create JAN code ', () => {
  it ('checks if valid JAN code is outputted', () => {
    expect(create('18029', 2019, 8)).toBe('4910180290893')
  })
  it ('checks if periodical publication code is found from JAN code', () => {
    expect(getPeriodicalPublicationCode('4910024711294')).toBe('02471')
  })
})
