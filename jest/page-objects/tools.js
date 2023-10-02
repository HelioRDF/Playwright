class tools{

    async aguardar(tempo){
        await page.waitForTimeout(tempo);
       // await page.waitForNavigation();
    }
}

module.exports = tools