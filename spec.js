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
        webelement.submit()
        let notes = $$('todo-list .small-12')
        expect(notes.getText()).toContain('T')
        //expect(notes.getText()).not.toContain('New Shiny note')
       
    })

    it('Should delete one note', function() {
        browser.get(URL)
        let countBefore = element.all(by.css('todo-list .small-12')).count();
        element($("input[type='checkbox']").click());
        browser.sleep(2000);
        let countAfter = element.all(by.css('todo-list .small-12')).count();
        expect(countAfter).not.toBe(countBefore); 
    })

    it ('should delete all notes', function () {
	    browser.get(URL)
        element.all(by.css(".todo-container input[type='checkbox']")).then(function(defNotes) {
           for (let i = 0; i < defNotes.length; i++) {
           defNotes[i].click();
           }
        });
        let countAfter = element.all(by.css('todo-list .small-12'))
        expect(countAfter.count()).toBe(0);
    })

    it('Should search for a task', function() {
        browser.get(URL);
        let searchField = $('.search-bar input').sendKeys('master Angular 2');
        element.all(by.css('.todo-container')).then(function(searchResult) {
        expect(searchResult.length).toEqual(1);
        });
    })

    it('Should be open Completed tasks', function() {
        browser.get(URL);
        element(by.xpath('//option[2]')).click();
        browser.sleep(2000);
        let completedTasks = $$('.Completed').count();
        expect(completedTasks).toBe(7);
    })
})

// baseUrl?: string;