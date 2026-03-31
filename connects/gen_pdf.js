const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'devesh_resume.html');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });

  const base = process.argv[2] || 'devesh_resume.pdf';
  const now = new Date();
  const ts = now.getFullYear().toString()
    + String(now.getMonth() + 1).padStart(2, '0')
    + String(now.getDate()).padStart(2, '0')
    + String(now.getHours()).padStart(2, '0')
    + String(now.getMinutes()).padStart(2, '0')
    + String(now.getSeconds()).padStart(2, '0');
  const outputName = base.replace(/\.pdf$/i, '') + ts + '.pdf';
  await page.pdf({
    path: path.resolve(__dirname, outputName),
    format: 'Letter',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log('PDF generated successfully.');
})();
