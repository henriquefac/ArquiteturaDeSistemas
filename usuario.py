import json as js

class user():
    nome = ""
    email = ""
    id = ""
    plano = ""
    rank = None
    def __init__(self) -> None:
        pass

    def setUsuer(self, nome, email, id, plano, rank):
        self.nome = nome
        self.email = email
        self.id = id
        self.plano = plano  
        self.rank = rank
    
    def getRank(self):
        return self.rank

    def getUser(self):
        return f"""Nome: {self.nome}
\nEmail: {self.email}
\nID: {self.id}
\nPlano: {self.plano}
\nRank: {self.rank}"""
    
    def load_from_json(self, json_convert):
        data = js.loads(js.dumps(json_convert))
        self.nome = data['nome']
        self.email = data['email']
        self.id = data['id']
        self.plano = data['plano']
        self.rank = data['rank']

    def getJson(self):
        print(self.__dict__)
        return js.loads(js.dumps(self.__dict__))