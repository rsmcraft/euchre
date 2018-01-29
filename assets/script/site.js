'use strict'

$(() => {
  function sameColor (a, b) {
    return Math.max(a, b) - Math.min(a, b) === 1
  }

  const suits = {
    clubs: 100,
    spades: 101,
    hearts: 200,
    diamonds: 201
  }

  const cards = {
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13,
    ace: 14
  }

  function Card (suit, value) {
    this.suit = suit
    this.value = value
    this.isLeft = function (trumpSuit) {
      return this.value === cards.jack &&
                   this.suit !== trumpSuit &&
                   sameColor(this.suit, trumpSuit)
    }

    this.isRight = function (trumpSuit) {
      return this.value === cards.jack &&
                   this.suit === trumpSuit
    }
  }

  function Deck () {
    const arr = []
    for (let s in suits) {
      for (let c in cards) { arr.push(new Card(suits[s], cards[c])) }
    }
    console.log(arr)
  }

  Deck()
})
