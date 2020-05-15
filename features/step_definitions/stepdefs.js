const {When, Then} =require('cucumber')
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const bookDb = require('../../db/book')
let book = {
    save: function(){}
}
//let book
let books
When('call save method', ()=> {
     books = {
        title:"unix",
        author:"def",
        publisher:"mno",
        pages:200
    }
  });

  Then('get response as created', async()=> {
      console.log(books)
    const saveStub = sinon.stub(book,"save").returns(books)
    //const Book = await bookDb.saveBook(books)
    //data = await bookDb.saveBook(books)
    expect(Book.title).to.equal(books.title)
    expect(Book.author).to.equal(books.author)
    expect(Book.publisher).to.equal(books.publisher)
    expect(Book.pages).to.equal(books.pages)
    //expect(saveStub.calledOnce).to.be.true
   // console.log(data)
    //expect(data).to.equal(books)
    //assert(data, books)
    //expect(saveStub).to.have.been.c;
  });