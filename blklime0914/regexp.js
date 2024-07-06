export function telfmt(tel) {
  const reg = /(^0\d[03]?[7]?)?(\d{2,4})(\d{4})/;
  return (tel.length > 8) ? tel.replace(reg, '$1-$2-$3') : tel.replace(reg, '$2-$3');
}

const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

const 힣 = '힣'.charCodeAt(0);

export function searchByKoreanInitialSound(data, first = '') {
  let ret = [];
  let regexp = new RegExp(first.split('').reduce((acc, a) => {
    let s = ㄱㄴㄷ.search(a);
    let e = (!가나다[s + 1]) ? 힣  : 가나다[s + 1].charCodeAt(0) - 1;
    return (/[0-9A-z]/.test(a)) ? `${acc}[${a}]` : `${acc}[${가나다[s]}-${String.fromCharCode(e)}]`;
  }, ''));
  return data.filter((val) => regexp.test(val));
}
