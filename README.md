# library-books
The Boston Public Library system keeps a list of its most-lost titles. Here are the titles that have disappeared the most from 2013 to 2018.

## How to get the data ready
The data can come from a spreadsheet of any kind, whether it’s Excel or Google (or any other kind, though those are the only I know of). The three columns should be named Question, Name and Value. Note: As of now, it only charts POSITIVE numbers. Notice there are no dollar signs or percentages. Just raw numbers. There should be no commas in the numbers. 

Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

The data has four columns: Titles, Author, Items Lost, and Image. This refers to the title of the book, the author of the book, the number of copies of that book lost between 2013 and 2018, and the name of the JPG in the assets folder.

## How the code works

The JavaScript cycles through the data in a for loop, creating div elements. The JavaScript places one image of the book for each instance of a copy of that book that has been lost. So, for example, "The Catcher In The Rye" has been lost 49 times, so the code places that book cover 49 times.