import pyaudio
import speech_recognition as sr
import requests

OUTBREAK_ID = "SOME_OUTBREAKID"
GoDataURL = "http://localhost:8000"
# LOGIN Request
creds = {'email':'krunalmiracle@gmail.com', 'password':'kruskechi1234'}
r = requests.post('{GoDataURL}/users/login', data=creds)

# Status & Login Text
print(r.status_code)
print(r.text)
if r.status_code == 200 and 'application/json' in r.headers.get('Content-Type',''):
    print(r.json())
    # Get the token and get the patients
    token = r.json().id
    if not token:
        print('Login failed as token retrieved was empty, program execution failed')
    else :
        rcases = requests.post('{GoDataURL}/outbreaks/{OUTBREAK_ID}/cases?access_token={token}')
        if rcases.status_code == 200 and 'application/json' in rcases.headers.get('Content-Type',''):
            print(rcases.json())
        else :
            print("Case Retrieval failed")
else :
    print('Login failed, program execution failed')
