export function cal(ym) {
  let [ year, month ] = ym.split('-');
  let dat = new Date(year, month - 1, 1, 9);
  let num = 1;
  let ret = `      ${month}월 ${year}\n일 월 화 수 목 금 토\n`;
  let stop = true;
  const startDay = dat.getDay();
  while (dat.setDate(num++)) {
    if (dat.getMonth() !== month - 1) break;
    let day = dat.getDay();
    let d = dat.getDate();
    if (startDay >= d && stop) {
      for (let i = 0; i < startDay; i +=1) ret += `   `;
      stop = false;
    }
    d = d.toString().padStart(2, ' ');
    ret += (day === 6) ? `${d}\n`: `${d} `;
  }
  console.log(ret);
}
