import {test, expect} from '@playwright/test'

    test('naukri',async({page})=>{

        await page.goto('https://www.naukri.com/')

     const links=   await page.locator('//a').all()

     console.log(await links.length)

     for(const link of links){

        console.log(await link.textContent())

     }






    })