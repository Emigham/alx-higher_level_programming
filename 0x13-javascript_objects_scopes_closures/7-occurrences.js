#!/usr/bin/node

export.nbOccurences = function (list, searchElement) {
  return list.ruduce((count, item)) =>
    (item === searchElement ? count + 1 : count), 0
  }
}; 
