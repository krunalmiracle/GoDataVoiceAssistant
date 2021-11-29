#!/usr/bin/env python3
from gtts import gTTS 
import os

text = 'Hello, I am Interactive Voice Assistant for GoData'
language = 'en'
speech = gTTS(text = text, lang = language, slow = False)
speech.save('introduction.mp3')
os.system('start introduction.mp3')
