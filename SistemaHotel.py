class SistemaHotel():
    def _init_(self) -> None:
        self.rank = None
        self.beneficios_comuns = ["Wi-fi gratuito", "Estacionamento gratuito"]
        self.beneficios_prata = ["Check-in antecipado"]
        self.beneficios_ouro = ["Upgrade de quarto gratuito", "Servico de quarto 24 horas"]
        self.beneficios_platina = ["Acesso exclusivo ao lounge", "Spa gratuito"]
    
    def obter_beneficios(self):
        if self.rank == "prata":
            self.beneficios_comuns.extend(self.beneficios_prata)
        if self.rank == "ouro":
            self.beneficios_comuns.extend(self.beneficios_prata)
            self.beneficios_comuns.extend(self.beneficios_ouro)
        if self.rank == "platina":
            self.beneficios_comuns.extend(self.beneficios_prata)
            self.beneficios_comuns.extend(self.beneficios_ouro)
            self.beneficios_comuns.extend(self.beneficios_platina)
        
        return self.beneficios_comuns
    
    def mostrar_beneficios(self, usuario):
        self.rank = usuario.plano
        beneficios = self.obter_beneficios()
        for beneficio in beneficios:
            print(f"- {beneficio}")
