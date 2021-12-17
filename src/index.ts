type MagazineInfo = {
  code: number;
  year: number;
  month: number;
};

const zeroPadding = (num: number, digit: number): string => {
  let padd = "";
  for (var i = 0; i < digit; i++) {
    padd += "0";
  }
  return (padd + num.toString()).slice(-digit);
};

const getLastDigit = (num: number): number =>
  parseInt(num.toString(10).slice(-1));

/**
 * Calculate check digit from JAN code, which is 13 digit format
 * https://www.dsri.jp/jan/check_digit.html
 * @param code
 */
const getCheckDigit = (code: string): string => {
  const reversed = code.split("").reverse();
  const [even, odd] = reversed.reduce(
    (prev, current, index) => {
      const num = parseInt(current);
      if (index % 2 === 0) {
        prev[0] += num;
      } else {
        prev[1] += num;
      }

      return prev;
    },
    [0, 0]
  );

  const total = even * 3 + odd;

  return ((10 - getLastDigit(total)) % 10).toString(10);
};

/**
 * Create JAN code from any publication date wtih magazine code
 * https://www.dsri.jp/code/jan_periodical_publication/
 * https://ja.wikipedia.org/wiki/%E9%9B%91%E8%AA%8C%E3%82%B3%E3%83%BC%E3%83%89#%E5%AE%9A%E6%9C%9F%E5%88%8A%E8%A1%8C%E7%89%A9%E3%82%B3%E3%83%BC%E3%83%89
 * @param magazine
 */
const create = (magazine: MagazineInfo): number => {
  const flag = 491;
  const reserved = 0;

  const yearLastDigit = getLastDigit(magazine.year);
  const month = zeroPadding(magazine.month, 2);
  const code = zeroPadding(magazine.code, 5);

  const fragment = `${flag}${reserved}${code}${month}${yearLastDigit.toString()}`;
  const checkDigit = getCheckDigit(fragment);

  return parseInt(`${fragment}${checkDigit}`);
};

/**
 * Extract magazine code from JAN code.
 * @param janCode
 */
const getMagazineCode = (janCode: number): number | null => {
  const match = janCode.toString(10).match(/^4910(\d{5})\d+$/);
  return match && match.length > 1 ? parseInt(match[1]) : null;
};

export { create, getMagazineCode };
