document.addEventListener("DOMContentLoaded", () => {
    // Seleção de elementos do DOM
    const cards = document.querySelectorAll(".card");
    const btnSimular = document.getElementById("btn-simular");
    const selectPratica = document.getElementById("pratica-select");
    const resultadoBox = document.getElementById("resultado-simulacao");
    const resultadoTexto = document.getElementById("resultado-texto");

    // Evento de clique para os Cards de Pilares
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const pilar = card.getAttribute("data-pilar");
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
        });
    });

    // Evento do botão do Simulador de Impacto
    if (btnSimular) {
        btnSimular.addEventListener("click", () => {
            const escolha = selectPratica.value;

            if (escolha === "") {
                alert("Por favor, selecione uma prática antes de simular.");
                resultadoBox.classList.add("hidden");
                return;
            }

            let textoResultado = "";

            if (escolha === "solar") {
                textoResultado = "☀️ <strong>Energia Solar:</strong> Redução estimada de até <strong>85% nos custos com energia elétrica</strong> da fazenda e diminuição imediata na pegada de CO₂.";
            } else if (escolha === "direto") {
                textoResultado = "🌱 <strong>Plantio Direto:</strong> Aumento de até <strong>15% na retenção de água no solo</strong>, prevenção completa contra erosões severas e regeneração ativa da matéria orgânica.";
            } else if (escolha === "precisao") {
                textoResultado = "🛸 <strong>Agricultura de Precisão:</strong> Economia média de <strong>18% no uso de fertilizantes</strong>, mapeamento em tempo real da saúde da lavoura e otimização da colheita.";
            }

            resultadoTexto.innerHTML = textoResultado;
