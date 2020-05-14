const {Given, When, Then} =require('cucumber')
const chai = require('chai')
const expact = chai.expect;
const sinon = require('sinon')
const axios = require('axios')

Given('the book json data', function (dataTable) {
    this.data = dataTable.hashes();
    return 'pending';
  });


  When('I send POST request to {}', async (url) =>{
  let URL = url;
    return 'pending';
  });


  Then('{int} book will be created', function (int) {
  // Then('{float} book will be created', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });