from flask import Flask, jsonify, request
from usuario import user

app = Flask(__name__)
#primeiro usuario
henrique = user()
ana = user()
henrique.setUsuer("Henrique", "emai@gemail.com", "123456789", "gold", 10)

ana.setUsuer("ana", "emai@gemail.com", "1234", "gold", 10)
#lista usuarios
usuarios = [henrique, ana]


#consultar todos
@app.route('/usuarios', methods=['GET'])
def obter_usuarios():
    jlist = []
    for i in usuarios:
        jlist.append(i.getJson())
    return jsonify(jlist)

#consultar
@app.route("/usuarios/<string:id>", methods = ['GET'])
def obter_usuario_por_id(id):

    jlist = []
    for i in usuarios:
        jlist.append(i.getJson())


    for user in jlist:
        if user.get('id') == id:
        
            return jsonify(user)
        
#Editar
@app.route('/usuarios/<string:id>', methods = ["PUT"])
def editar_livro_por_id(id):
    usuario_alterado = request.get_json()
    for i in usuarios:
        if i.id == id:
            i.load_from_json(usuario_alterado)
            return jsonify(i.getJson())

        
#criar
@app.route('/usuarios', methods=['post'])
def criar_usuarios():
    res = request.get_json()
    novo_usuario = user()
    novo_usuario.load_from_json(res)
    usuarios.append(novo_usuario)

    return res



if __name__ == "__app__":
    app.run(debug=True)

app.run(port = 5000, host = 'localhost', debug=True)
#heroku
#railwat