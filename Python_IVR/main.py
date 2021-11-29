#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import pyaudio
import speech_recognition as sr
import pyttsx3
import os
# Preparation Text to Speech
language="en-US"
engine = pyttsx3.init()
""" RATE"""
rate = engine.getProperty('rate')   # getting details of current speaking rate
print (rate)                        #printing current voice rate
engine.setProperty('rate', 165)     # setting up new voice rate


"""VOLUME"""
volume = engine.getProperty('volume')   #getting to know current volume level (min=0 and max=1)
print (volume)                          #printing current volume level
engine.setProperty('volume',1.0)    # setting up volume level  between 0 and 1

"""VOICE"""
voices = engine.getProperty('voices')       #getting details of current voice
#engine.setProperty('voice', voices[0].id)  #changing index, changes voices. o for male
engine.setProperty('voice', voices[1].id)   #changing index, changes voices. 1 for

# obtain audio from the microphone
r = sr.Recognizer()
p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print ("Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name'))
with sr.Microphone(device_index=2) as source:
    print("Say something!")
    audio = r.listen(source,timeout=3)
    
# recognize speech using Sphinx
try:
    text_heard = r.recognize_sphinx(audio,language=language)
    print("Sphinx thinks you said: " + text_heard)
    engine.say(text_heard)
    engine.runAndWait()

    """Saving Voice to a file"""
    # On linux make sure that 'espeak' and 'ffmpeg' are installed
    engine.save_to_file(text_heard, 'introduction_offline.mp3')
    engine.runAndWait()
except sr.UnknownValueError:
    print("Sphinx could not understand audio")
except sr.RequestError as e:
    print("Sphinx error; {0}".format(e))