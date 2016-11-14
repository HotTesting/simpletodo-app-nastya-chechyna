let URL = 'http://maxcabrera.com/code/todo-list/'
describe('suite', function () {

    it('test', function () {
        browser.get(URL)
        expect(browser.getTitle()).toBe('Angular2 Seed')
    })

    it('should create new note', function () {
        browser.get(URL)
        let webelement = $('input.enter-todo')
   
        webelement.sendKeys('T')
        browser.sleep(2000)
        webelement.submit()

        let notes = $$('todo-list .small-12')
        expect(notes.getText()).toContain('T')
        //expect(notes.getText()).not.toContain('New Shiny note')
       
    })

    it('Should delete one note', function() {
        browser.get(URL)
        let countBefore = element.all(by.css('todo-list .small-12'))

        element($("input[type='checkbox']").click())
        let countAfter = element.all(by.css('todo-list .small-12'))
        browser.sleep(2000)
        //expect(countBefore.count().not.toEqual(countAfter.count()))
        expect(countAfter.count() === countBefore.count()).toBe(false)
    }
    )

    it ('should delete all notes', function () {
	browser.get(URL)
    element.all(by.css(".todo-container input[type='checkbox']")).then(function(defNotes) {
   
        for (let i = 0; i < defNotes.length; i++) {
           defNotes[i].click();
        }
    
    });
    let countAfter = element.all(by.css('todo-list .small-12'))
        //expect(countBefore.count().not.toEqual(countAfter.count()))
     expect(countAfter.count()).toBe(0);
    

})
})

// baseUrl?: string;