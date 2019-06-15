'use strict';
(function() {
  // global variables

  var books = [{
      "Titles": "Diary of a wimpy kid : Greg Heffley's journal",
      "Author": "Kinney, Jeff",
      "Items Lost": 63,
      "Image": "wimp1"
    },
    {
      "Titles": "The catcher in the rye",
      "Author": "Salinger, J. D.",
      "Items Lost": 49,
      "Image": "RYE"
    },
    {
      "Titles": "The great Gatsby",
      "Author": "Fitzgerald, F. Scott",
      "Items Lost": 47,
      "Image": "Gatsby"
    },
    {
      "Titles": "A child called 'it' : one child's courage to survive",
      "Author": "Pelzer, David J.",
      "Items Lost": 45,
      "Image": "IT"
    },
    {
      "Titles": "The autobiography of Malcolm X",
      "Author": "X, Malcolm,",
      "Items Lost": 45,
      "Image": "AutobiographyOfMalcolmX"
    },
    {
      "Titles": "Diary of a wimpy kid : the third wheel",
      "Author": "Kinney, Jeff",
      "Items Lost": 44,
      "Image": "Wimp2"
    },
    {
      "Titles": "Fifty shades of Grey",
      "Author": "James, E.L.",
      "Items Lost": 44,
      "Image": "shades"
    },
    {
      "Titles": "The alchemist",
      "Author": "Coelho, Paulo",
      "Items Lost": 43,
      "Image": "alchemist"
    },
    {
      "Titles": "Diary of a wimpy kid : dog days",
      "Author": "Kinney, Jeff",
      "Items Lost": 42,
      "Image": "wimp3"
    },
    {
      "Titles": "The coldest winter ever : a novel",
      "Author": "Souljah, Sister",
      "Items Lost": 42,
      "Image": "coldest"
    },
    {
      "Titles": "The fault in our stars",
      "Author": "Green, John",
      "Items Lost": 42,
      "Image": "Fault"
    },
    {
      "Titles": "Diary of a wimpy kid : the last straw",
      "Author": "Kinney, Jeff",
      "Items Lost": 41,
      "Image": "wimp4"
    },
    {
      "Titles": "All souls : a family story from Southie",
      "Author": "MacDonald, Michael Patrick",
      "Items Lost": 39,
      "Image": "allSouls"
    },
    {
      "Titles": "Diary of a wimpy kid : hard luck",
      "Author": "Kinney, Jeff",
      "Items Lost": 39,
      "Image": "wimp5"
    },
    {
      "Titles": "The book thief",
      "Author": "Zusak, Markus",
      "Items Lost": 39,
      "Image": "bookThief"
    },
    {
      "Titles": "The absolutely true diary of a part-time Indian",
      "Author": "Alexie, Sherman",
      "Items Lost": 38,
      "Image": "partTime"
    },
    {
      "Titles": "Diary of a wimpy kid : cabin fever",
      "Author": "Kinney, Jeff",
      "Items Lost": 36,
      "Image": "wimp6"
    },
    {
      "Titles": "Diary of a wimpy kid : the ugly truth",
      "Author": "Kinney, Jeff",
      "Items Lost": 36,
      "Image": "wimp7"
    },
    {
      "Titles": "The hunger games",
      "Author": "Collins, Suzanne",
      "Items Lost": 36,
      "Image": "hungerGames"
    },
    {
      "Titles": "The cat in the hat",
      "Author": "Seuss, Dr.",
      "Items Lost": 35,
      "Image": "cat"
    }
  ];

  var main = document.querySelector('#main');

  for (var i = 0; i < books.length; i++) {
	
	var names, lastName, firstName, newName, holder, title, titleText, author, authorText, titleAuthorHolder, itemCount, itemCountText, imgHolder, randomNum;

    //Flips the order of the name from "Last, First" to "First Last"
    names = books[i].Author;
    names = names.split(", ");
    lastName = names[0];
    firstName = names[1];
    newName = firstName + " " + lastName;
    books[i].Author = newName;

    //Creates the holder for each book, name, author, etc. and appends it #main
    holder = document.createElement('div');
    holder.setAttribute('class', 'holder');
    main.appendChild(holder);

    //Creates div for the title of the book
    title = document.createElement('div');
    title.setAttribute('class', 'title');
    titleText = document.createTextNode(books[i].Titles);
    title.appendChild(titleText);

    //Creates div for the author of the book
    author = document.createElement('div');
    author.setAttribute('class', 'author');
    authorText = document.createTextNode(books[i].Author);
    author.appendChild(authorText);

    //Creates a holder to hold the title div and the author div
    titleAuthorHolder = document.createElement('div');
    titleAuthorHolder.setAttribute('class', 'titleAuthor');
    titleAuthorHolder.appendChild(title);
    titleAuthorHolder.appendChild(author);
    holder.appendChild(titleAuthorHolder);

    //Creates div for number of items lost
    itemCount = document.createElement('div');
    itemCount.setAttribute('class', 'itemCount');
    itemCountText = document.createTextNode(books[i]["Items Lost"]);
    itemCount.appendChild(itemCountText);
    holder.appendChild(itemCount);

    //Creates image holder and appends it to the holder
    imgHolder = document.createElement('div');
    imgHolder.setAttribute('class', 'imgHolder');
    holder.appendChild(imgHolder);

    //Creates suffix to add to ".jpg" to break the cache
    randomNum = Math.round(Math.random() * 1000000);

    //Appends the right number of images to the image holder div
    for (var j = 0; j < books[i]["Items Lost"]; j++) {
      var img = document.createElement('img');
      img.setAttribute('class', 'book');
      img.src = 'assets/' + books[i].Image + ".jpg??" + randomNum + "??";
      imgHolder.appendChild(img);
    }

  }




})();