from flask import Flask, jsonify, request

app = Flask(__name__)

usuarios = [
    {
        "nome": "Henrique",
        "email": "email",
        "id": "123456789",
        "plano": "gold"
    }
]


#consultar todos
@app.route('/usuarios', methods=['GET'])
def obter_usuarios():
    return jsonify(usuarios)

#consultar
@app.route("/usuarios/<string:id>", methods = ['GET'])
def obter_usuario_por_id(id):
    for user in usuarios:
        if user.get('id') == id:
            print(user)
            return jsonify(user)
        
#Editar
@app.route('/usuarios/<string:id>', methods = ["PUT"])
def editar_livro_por_id(id):
    usuario_alterado = request.get_json()
    for indice, usuario in enumerate(usuarios):
        if usuario.get('id') == id:
            usuarios[indice].update(usuario_alterado)
            return jsonify(usuarios[indice])
        
#criar
@app.route('/usuarios', methods=['post'])
def criar_usuarios():
    novo_usuario = request.get_json()
    usuarios.append(novo_usuario)

    return jsonify(usuarios)


app.run(port = 5000, host = 'localhost', debug=True)