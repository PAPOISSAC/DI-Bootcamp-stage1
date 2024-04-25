from django.db import models

# Create your models here.
class Card(models.Model):
    suit_choices = [
        ('Hearts', 'Hearts'),
        ('Diamonds', 'Diamonds'),
        ('Clubs', 'Clubs'),
        ('Spades', 'Spades'),
    ]
    value_choices = [
        ('A', 'A'),
        ('2', '2'),
        ('3', '3'),
        ('4', '4'),
        ('5', '5'),
        ('6', '6'),
        ('7', '7'),
        ('8', '8'),
        ('9', '9'),
        ('10', '10'),
        ('J', 'J'),
        ('Q', 'Q'),
        ('K', 'K'),
    ]
    
    suit = models.CharField(max_length=10, choices=suit_choices)
    value = models.CharField(max_length=2, choices=value_choices)

    def __str__(self):
        return f"{self.value} of {self.suit}"