const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.formula1.com/en/results/2025/drivers';

async function resltadosF1() {
  try {
    const { data: html } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const $ = cheerio.load(html);

    const rows = $('table tbody tr');
    const standings = [];

    rows.each((idx, row) => {
      const cells = $(row).find('td');
      standings.push({
        position: $(cells[0]).text().trim(),
        driver: $(cells[1]).text().trim(),
        nationality: $(cells[2]).text().trim(),
        team: $(cells[3]).text().trim(),
        points: $(cells[4]).text().trim()
      });
    });

    console.log(standings);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

setInterval(resltadosF1, 3600000);
resltadosF1();
