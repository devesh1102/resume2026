const puppeteer = require('puppeteer');
const path = require('path');

// Usage: node gen_cover_letter.js <html_file_path> <output_pdf_path>
(async () => {
  const htmlArg = process.argv[2];
  const outputArg = process.argv[3];

  if (!htmlArg || !outputArg) {
    console.error('Usage: node gen_cover_letter.js <html_file_path> <output_pdf_path>');
    process.exit(1);
  }

  const htmlPath = path.resolve(htmlArg);
  const outputPath = path.resolve(outputArg);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.goto('file://' + htmlPath, { waitUntil: 'domcontentloaded', timeout: 60000 });

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log('Cover letter PDF generated: ' + outputPath);
})();
