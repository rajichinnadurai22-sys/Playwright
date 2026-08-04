import {test, expect} from '@playwright/test';

test('google', async({page})=>{

    await page.goto('https://www.google.com/');

    await page.locator('//textarea[@aria-label="Search"]').fill('raji');

    const options= page.locator('//div[@class="wM6W7d"]')

    await options.first().waitFor({state:'visible'});

    const optcount=await options.count();

    console.log(optcount);

    for(const op of await options.all()){

        const lists=await op.textContent();

        console.log(lists);

    }
 



})