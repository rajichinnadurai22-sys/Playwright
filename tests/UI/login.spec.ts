import {test, expect} from '@playwright/test';

test('login page',async ({page})=>{

    await page.goto("https://www.glassdoor.com")

    await expect(page).toHaveTitle("Glassdoor | Job Search and Career Community")

    await page.locator("//button[@class='HomePageSeoFooterLinks_cta__zp5kr ']//*[name()='svg']").click()

    const jobs=await page.$$("//h4[text()='Popular Jobs']/following-sibling::ul//a")

    console.log("No of jobs under IT:", jobs.length);

    for(const jobl of jobs){
        
        const jobText = await jobl.textContent()

        console.log(jobText)

        if(jobText==='Quality Assurance Engineer'){

            await jobl.click()

    await page.waitForTimeout(5000)

        }

    }

    
})


