import requests



response = requests.get('http://localhost:5000/usuarios')
print(response.json())