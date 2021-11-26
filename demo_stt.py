#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import pyaudio
import speech_recognition as sr

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
    print("Sphinx thinks you said " + r.recognize_sphinx(audio))
except sr.UnknownValueError:
    print("Sphinx could not understand audio")
except sr.RequestError as e:
    print("Sphinx error; {0}".format(e))