import fs from 'fs';
async function run() {
  const res = await fetch('https://raw.githubusercontent.com/djaiss/mapsicon/master/all/kr/vector.svg');
  const text = await res.text();
  fs.writeFileSync('korea.svg', text);
}
run();
