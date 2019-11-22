// https://www.dsri.jp/jan/check_digit.html
const getCheckDigit = code => {
  // 13 digits
  const reversed = code.toString(10).split('').reverse();
  const [even, odd] = reversed.reduce((prev, current, index) => {
    const num = parseInt(current)
    if (index % 2 === 0) {
      prev[0] += num;
    } else {
      prev[1] += num
    }

    return prev;
  }, [0, 0]);

  const total = even * 3 + odd;

  return 10 - (total.toString(10).slice(-1));
};


// https://www.dsri.jp/code/jan_periodical_publication/
// https://ja.wikipedia.org/wiki/%E9%9B%91%E8%AA%8C%E3%82%B3%E3%83%BC%E3%83%89#%E5%AE%9A%E6%9C%9F%E5%88%8A%E8%A1%8C%E7%89%A9%E3%82%B3%E3%83%BC%E3%83%89
const create = ({magazineCode, year, month}) => {
  const flag = 491
  const reserved = 0
  const yearLastDigit = year.toString(10).slice(-1)
  const _month = ('00' + month).slice(-2)
  const fragment = `${flag}${reserved}${magazineCode}${_month}${yearLastDigit}`;
  const checkDigit = getCheckDigit(fragment);

  console.log(fragment)
  console.log(checkDigit)
  return parseInt(`${fragment}${checkDigit}`);
};

const extractMagazineCode = janCode => {
  const match = janCode.toString().match(/^4910(\d{5})\d+$/);
  return (match && match.length > 1) ? match[1] : null;
};

module.exports = {
  create,
  extractMagazineCode
};
