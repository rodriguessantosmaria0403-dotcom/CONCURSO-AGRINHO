// Função para exibir alertas interativos ao clicar nos pilares
function mostrarDetalhes(pilar) {
    let mensagem = "";
    
    switch(pilar) {
        case 'produtividade':
            mensagem = "🚜 Produtividade Eficiente:\n\nAo utilizar sensores de solo e drones, produtores conseguem reduzir em até 20% o uso de defensivos agrícolas e economizar água através da irrigação inteligente.";
            break;
        case 'preservacao':
            mensagem = "🌳 Preservação Ambiental:\n\nO sistema de Plantio Direto evita a erosão do solo e mantém a umidade natural da terra, fixando mais carbono e reduzindo a emissão de gases estufa.";
            break;
        case 'energia':
            mensagem = "☀️ Energia Limpa:\n\nA instalação de painéis fotovoltaicos em fazendas torna a produção autossuficiente e diminui a pegada de carbono de toda a cadeia logística.";
            break;
        default:
            mensagem = "Prática sustentável do Agronegócio Moderno!";
    }
    
    alert(mensagem);
}

// Função para rodar o Simulador de Impacto Sustentável
function calcularImpacto() {
    const select = document.getElementById("pratica-select");
    const resultadoBox = document.getElementById("resultado-simulacao");
    const resultadoTexto = document.getElementById("resultado-texto");
    
    const escolha = select.value;
    
    if (escolha === "") {
        alert("Por favor, selecione uma prática antes de simular.");
        resultadoBox.classList.add("hidden");
        return;
    }
    
    let textoResultado = "";
    
    if (escolha === "solar") {
        textoResultado = "☀️ **Energia Solar:** Redução estimada de até **85% nos custos com energia elétrica** da fazenda e diminuição imediata na pegada de CO₂ proveniente de geradores a diesel.";
    } else if (escolha === "direto") {
        textoResultado = "🌱 **Plantio Direto:** Aumento de até **15% na retenção de água no solo**, prevenção completa contra erosões severas em períodos de chuvas fortes e regeneração da matéria orgânica.";
    } else if (escolha === "precisao") {
        textoResultado = "🛸 **Agricultura de Precisão:** Economia média de **18% no uso de fertilizantes** e defensivos, mapeamento em tempo real da saúde da lavoura e otimização do tempo de colheita.";
    }
    
    // Substituir marcação de negrito simples por HTML forte para exibição estilizada
    resultadoTexto.innerHTML = textoResultado.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Exibe a caixa de resultado removendo a classe 'hidden'
    resultadoBox.classList.remove("hidden");
}
