Feature: Testing Clean Code with Unittesting
  
  Scenario:Create Book
    Given the book json data
      | title  | author | publisher | pages |
      | nodejs | abc    | xyz       | 200   |
    When I send POST request to http://localhost:3000/book
    Then 1 book will be created