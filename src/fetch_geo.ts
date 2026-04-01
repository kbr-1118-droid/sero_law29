import fs from 'fs';
async function run() {
  const res = await fetch('https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2013/json/skorea_provinces_geo_simple.json');
  const text = await res.text();
  fs.writeFileSync('korea.json', text);
}
run();
