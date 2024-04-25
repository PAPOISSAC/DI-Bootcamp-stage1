import random

class DeckOfCards:
    def __init__(self):
        self.cards = []
        self.reset()

    def reset(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [{'suit': suit, 'value': value} for suit in suits for value in values]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            print("The deck is empty.")
            return None
        return self.cards.pop()

# Testing the DeckOfCards class
deck = DeckOfCards()
print("Initial deck:")
print(deck.cards)

deck.shuffle()
print("\nShuffled deck:")
print(deck.cards)

print("\nDealing a card:")
dealt_card = deck.deal()
print("Dealt card:", dealt_card)
print("Remaining cards:")
print(deck.cards)
