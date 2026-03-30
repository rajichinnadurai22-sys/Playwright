import {test, expect} from '@playwright/test';

test('login page',async ({page})=>{

    await page.goto("https://www.saucedemo.com")

    await expect(page).toHaveTitle(/Swag Labs/)

    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
    

     const prod=await page.$$("//*[@class='inventory_list']//div[@class='inventory_item_name ']")

     console.log("No of products:", prod.length);

    for(const product of prod){
        
        const ProdText = await product.textContent()

        console.log(ProdText)

        if(ProdText==='Sauce Labs Fleece Jacket'){

            await product.click()

    await page.waitForTimeout(5000)

        }

    }

    
})


