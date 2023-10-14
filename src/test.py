import requests
from pprint import pprint

headers = {
    'ngrok-skip-browser-warning': 'bla-bla',
}

response = requests.get('https://44cc-94-241-173-114.ngrok-free.app/api/v1/users/423420323', headers=headers, verify=False)

print(response.text + '\n')
print(response.text)