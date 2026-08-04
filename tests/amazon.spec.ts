import { test, expect } from '@playwright/test';

test('launch amazon', async ({ page }) => {
  await page.goto('https://demotest.io/');


  const countlinks=page.locator('a')

  const amaonz=await countlinks.count()

  console.log(amaonz)

  const alltext=page.locator('//*[@class="tool-card"]/following::div[@class="tool-title"]')

  await alltext.first().waitFor({state:'visible'})

  for(const sub of await alltext.all()){

     const it= await   sub.textContent();

     console.log(it);

  }

  await page.locator("//*[text()='Cron Expression Generator']").click();

  const minuteSelect = page.locator('#minute');
  await minuteSelect.waitFor({ state: 'visible', timeout: 10000 });
  await minuteSelect.selectOption({ label: '*/5 (every 5)' });

  await page.screenshot({path:'window.png', fullPage: true })


});
