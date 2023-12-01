class usuario():
    nome = ""
    email = ""
    id = ""
    plano = None

    def __init__(self) -> None:
        pass

    def setUsuer(self, nome, email, id, plano):
        self.nome = nome
        self.email = email
        self.id = id
        self.plano = plano
    pass