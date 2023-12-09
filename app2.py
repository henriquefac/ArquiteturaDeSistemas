from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Função para obter dados de usuários a partir da URL
def obter_usuarios_da_url():
    response = requests.get('http://localhost:5000/usuarios')
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Rota para obter dados ordenados por rank
@app.route('/rank', methods=['GET'])
def get_usuarios_ordered_by_rank():
    usuarios = obter_usuarios_da_url()

    if usuarios is not None:
        usuarios_ordenados = sorted(usuarios, key=lambda x: x.get("rank", 0), reverse=True)
        return jsonify(usuarios_ordenados)
    else:
        return jsonify({"mensagem": "Erro ao obter usuários da URL"}), 500

app.run(port = 1345, host = 'localhost', debug=True)