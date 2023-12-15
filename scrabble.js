"use strict";

var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;
var TEXT_COLOR_ACTIVE = "#339933";
var TEXT_COLOR_NORMAL = "";
var TEXT_COLOR_INVALID = "red";

var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "scrabble/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "scrabble/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "scrabble/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "scrabble/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "scrabble/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "scrabble/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "scrabble/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "scrabble/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "scrabble/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "scrabble/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "scrabble/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "scrabble/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "scrabble/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "scrabble/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "scrabble/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "scrabble/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "scrabble/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "scrabble/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};

scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
scrabbleBoard.slots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
scrabbleBoard.slots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
scrabbleBoard.slots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "scrabble/Scrabble_BlankSquare_81x87.jpg"};

scrabbleBoard.rowCount = Object.keys(scrabbleBoard.slots).length;
scrabbleBoard.columnCount = Object.keys(scrabbleBoard.slots[0]).length;

var scrabbleScore = { "totalScore": 0};

scrabbleScore.calculateBoardScore = function() {
  var iRow, iCol, letter, letterValue, wordMultiplier = 1, boardScore = 0;

  if (!validateWord()) {
    return 0;
  }

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      letter = scrabbleBoard.slots[iRow][iCol].letter;
      if (letter) {
        letterValue = scrabbleTiles[letter].value;
        boardScore += letterValue * scrabbleBoard.slots[iRow][iCol].letterMultiplier;

        wordMultiplier *= scrabbleBoard.slots[iRow][iCol].wordMultiplier;
      }
    }
  }

  boardScore *= wordMultiplier;

  return boardScore;
}

scrabbleScore.refresh = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  $("#score").css("color", TEXT_COLOR_NORMAL);
  $("#score").html(scrabbleScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");
  if (boardScore > 0) {
    $("#boardScore").css("color", TEXT_COLOR_ACTIVE);
  } else {
    $("#boardScore").css("color", TEXT_COLOR_INVALID);
  }

  $("#highestScore").html(scrabbleScore.highestScore);
}

scrabbleScore.commit = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  scrabbleScore.totalScore += boardScore;
  $("#score").html(scrabbleScore.totalScore);
  if (scrabbleScore.totalScore > 0) {
    $("#score").css("color", TEXT_COLOR_ACTIVE);
  }
}

scrabbleScore.restart = function() {
  scrabbleScore.totalScore = 0;
  $("#score").html(0);
  $("#highestScore").css("color", TEXT_COLOR_NORMAL);
}

scrabbleBoard.createBoardHtml = function() {
  var row, col, bgImagePath, newSlot;
  var BG_IMAGE_WIDTH = 81, BG_IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

  $("#board").css("height", (BG_IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.rowCount);
  $("#board").css("width", (BG_IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.columnCount);

  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (col = 0; col < scrabbleBoard.columnCount; ++col) {
      bgImagePath = scrabbleBoard.slots[row][col].image;
      newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#board").append(newSlot);
      newSlot.css({"width": BG_IMAGE_WIDTH, "height": BG_IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH});
    }
  }
}

scrabbleBoard.clearBoard = function() {
  var iRow, iCol;

  $("#board img").remove();

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      delete scrabbleBoard.slots[iRow][iCol].tileId;
      delete scrabbleBoard.slots[iRow][iCol].letter;
    }
  }
}

scrabbleBoard.getTileIdFromSlot = function(row, col) {
  return scrabbleBoard.slots[row][col].tileId;
}

scrabbleBoard.getLetterFromSlot = function(row, col) {
  return scrabbleBoard.slots[row][col].letter;
}

scrabbleBoard.isSlotEmpty = function(row, col) {
  return typeof(scrabbleBoard.slots[row][col].tileId) === "undefined";
}

scrabbleBoard.addToSlot = function(tileId, letter, row, col) {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      if (scrabbleBoard.slots[iRow][iCol].tileId === tileId) {
        delete scrabbleBoard.slots[iRow][iCol].tileId;
        delete scrabbleBoard.slots[iRow][iCol].letter;
      }
    }
  }

  scrabbleBoard.slots[row][col].letter = letter;
  scrabbleBoard.slots[row][col].tileId = tileId;
}

scrabbleBoard.deleteFromSlot = function(row, col) {
  delete scrabbleBoard.slots[row][col].tileId;
  delete scrabbleBoard.slots[row][col].letter;
}

scrabbleBoard.findSlotFromTileId = function(tileId) {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      if (scrabbleBoard.slots[iRow][iCol].tileId === tileId) {
        return [iRow, iCol];
      }
    }
  }

  return false;
}

scrabbleBoard.printBoard = function() {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      console.log("scrabbleBoard.slots[" + iRow + "][" + iCol + "] letter: " + scrabbleBoard.slots[iRow][iCol].letter + ", tileId: " + scrabbleBoard.slots[iRow][iCol].tileId);
    }
  }
}

var printBoard = scrabbleBoard.printBoard;

function getFromDeck(n) {
  var hand = [];
  var allTiles = [];

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allTiles.push(key);
      }
    }
  }

  for (var i = 0; i < n; ++i) {
    if (allTiles.length) {
      var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
      var randomLetter = allTiles[randomIndex];
      hand.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);
    }
  }
  $("#remainingTiles").html(allTiles.length);

  return hand;
}
function numTilesInDeck() {
  var numTotalTiles = 0;

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      numTotalTiles += scrabbleTiles[key]["number-remaining"];
    }
  }

  return numTotalTiles;
}
function numTilesOnRack() {
  return $("#letterRack img").length;
}
function toggleFinishButton(toFinishButton) {
  var nextWordButton = document.getElementById("nextWordButton");
  if (toFinishButton) {
    nextWordButton.innerHTML = "Finish";
    nextWordButton.onclick = function(event) {
      finish();
    }
  } else {
    nextWordButton.innerHTML = "Next Word";
    nextWordButton.onclick = function(event) {
      nextWord();
    }
  }
}
function restart() {
  $("#letterRack img").remove();
  scrabbleBoard.clearBoard();

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }

  toggleFinishButton(false);

  scrabbleScore.restart();

  nextWord();
}

function nextWord() {
  var i, key, tileImageId, newTile, hand;

  scrabbleScore.commit();

  scrabbleBoard.clearBoard();

  hand = getFromDeck(7 - numTilesOnRack());
  for (i = 0; i < hand.length; ++i) {
    key = hand[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
    if (key == "_") {
      newTile.addClass("blankTile");
    }
    $("#letterRack").append(newTile);

    newTile.addClass("letterTileOnRack");

    newTile.draggable({
      revertDuration: 200,
      start: function(event, ui) {
        $(this).css("z-index", Z_INDEX_TILE_ON_DRAG);

        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        $(this).css("z-index", "");
      }
    });
  }

  $("#word").html("");

  checkSingleWord(false);
  checkTwoLettersAndMore(false);
  checkDictionary(false);

  if (numTilesInDeck() == 0) {
    toggleFinishButton(true);
    document.getElementById("nextWordButton").disabled = false;
  } else {
    document.getElementById("nextWordButton").disabled = true;
  }
}

function finish() {
  scrabbleScore.commit();

  document.getElementById("nextWordButton").disabled = true;

  $(".letterTile").draggable("disable");
}

function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

  return id;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isDictionaryWord(possibleWord) {
  if (possibleWord.length > 0 && isDictionaryWord.dict[possibleWord]) {
    return true;
  }

  return false;
}
isDictionaryWord.dict = {};
$.ajax({
  url: "assignment9/dictionary.txt",
  success: function(result) {
    var words = result.split("\n");

    for (var i = 0; i < words.length; ++i) {
      isDictionaryWord.dict[words[i].toUpperCase()] = true;
    }
  }
});

function validateWord() {
  var iCol, letter, errorCount, word = "", ROW = 0;

  for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
    letter = scrabbleBoard.getLetterFromSlot(ROW, iCol);
    if (typeof(letter) === "undefined") {
      word += "\xB7";
    } else {
      word += letter;
    }
  }

  word = word.replace(/^\xB7+/, "");
  word = word.replace(/\xB7+$/, "");

  $("#word").html(word);

  errorCount = 0;

  if (word == "") {
    checkSingleWord(false);
    ++errorCount;
  } else {
    var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");
    if (rgxDisconnectedWord.test(word)) {
      checkSingleWord(false);
      ++errorCount;
    } else {
      checkSingleWord(true);
    }
  }

  if (word.length >= 2) {
    checkTwoLettersAndMore(true);
  } else {
    checkTwoLettersAndMore(false);
    ++errorCount;
  }

  if (errorCount) {
    document.getElementById("nextWordButton").disabled = true;
    $("#word").css("color", TEXT_COLOR_INVALID);
    return false;
  }

  $("#word").css("color", TEXT_COLOR_ACTIVE);
  document.getElementById("nextWordButton").disabled = false;
  return word;
}

function grayscaleAndFade(jQueryObject, yes) {
  if (yes) {
    jQueryObject.css({
      "-webkit-filter": "grayscale(100%)",
      "-moz-filter": "grayscale(100%)",
      "-o-filter": "grayscale(100%)",
      "-ms-filter": "grayscale(100%)",
      "filter": "grayscale(100%)",
      "opacity": 0.2
    });
  } else {
    jQueryObject.css({
      "-webkit-filter": "",
      "-moz-filter": "",
      "-o-filter": "",
      "-ms-filter": "",
      "filter": "",
      "opacity": 1.0
    });
  }
}

function checkTwoLettersAndMore(check) {
  if (check) {
    grayscaleAndFade($("#minLengthIcon"), false);
  } else {
    grayscaleAndFade($("#minLengthIcon"), true);
  }
}

function checkSingleWord(check) {
  if (check) {
    grayscaleAndFade($("#oneWordCheckIcon"), false);
  } else {
    grayscaleAndFade($("#oneWordCheckIcon"), true);
  }
}

function checkDictionary(check) {
  if (check) {
    grayscaleAndFade($("#dictionaryCheckIcon"), false);
  } else {
    grayscaleAndFade($("#dictionaryCheckIcon"), true);
  }
}

function openBlankTileDialog(blankTileDraggable, tileId, row, col) {
  var tileSelectorDialog = $("<div id='blankTileDialog'></div>");
  var letterKey, newTile;
  for (letterKey in scrabbleTiles) {
    if (letterKey != "_") {
      newTile = $("<img src='" + scrabbleTiles[letterKey]["image"] + "' class='letterTileInDialog' letter='" + letterKey + "'>");

      newTile.click(function() {
        var newLetter = $(this).attr("letter");

        blankTileDraggable.attr("letter", newLetter);
        blankTileDraggable.attr("src", scrabbleTiles[newLetter]["image"]);

        tileId = blankTileDraggable.attr("id");
        scrabbleBoard.addToSlot(tileId, newLetter, row, col);

        validateWord();

        scrabbleScore.refresh();

        tileSelectorDialog.dialog("close");
      });
      tileSelectorDialog.append(newTile);
    }
  }
  tileSelectorDialog.css("z-index", Z_INDEX_DIALOG);
  tileSelectorDialog.dialog({
    modal: true,
    draggable: false,
    resizable: false
  });
}


$(window).load(function() {
  var row, col;

  scrabbleBoard.createBoardHtml();

  $(".boardSlot").droppable({
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (scrabbleBoard.getTileIdFromSlot(row, col) === draggable.attr("id")) {
        return true;
      } else if (scrabbleBoard.isSlotEmpty(row, col)) {
        return true;
      } else {
        return false;
      }
    },
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var row, col, letter, word, tileId, previousPositionOnBoard;

      ui.draggable.removeClass("letterTileOnRack");
      ui.draggable.addClass("letterTileOnBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tileId = ui.draggable.attr("id");

      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tileId + ") on (" + row + ", " + col + ").");

      previousPositionOnBoard = scrabbleBoard.findSlotFromTileId(tileId);
      if ($(ui.draggable).hasClass("blankTile") && !previousPositionOnBoard) {
        openBlankTileDialog($(ui.draggable), tileId, row, col);
      } else {
        scrabbleBoard.addToSlot(tileId, letter, row, col);
        validateWord();

        scrabbleScore.refresh();
      }
    }
  });

  $("#letterRack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    tolerance: "touch",
    drop: function(event, ui) {
      var tileId, word, pos;

      ui.draggable.removeClass("letterTileOnBoard");
      ui.draggable.addClass("letterTileOnRack");

      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tileId = ui.draggable.attr("id");
      pos = scrabbleBoard.findSlotFromTileId(tileId);
      if (pos) {
        scrabbleBoard.deleteFromSlot(pos[0], pos[1]);

        $("#letterRack").append(ui.draggable);
        ui.draggable.css({"position": "relative", "top": "", "left": ""});

        word = validateWord();

        scrabbleScore.refresh();
      } else {
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });

  restart();
});
