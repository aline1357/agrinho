// Função para gerar dados aleatórios simulando os sensores do campo
function gerarDadosSensor(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função principal que atualiza o painel e toma decisões sustentáveis
function atualizarDashboard() {
    // 1. Simula a leitura dos sensores
    const umidade = gerarDadosSensor(20, 80); // Umidade em %
    const temperatura = gerarDadosSensor(15, 40); // Temperatura em °C

    // 2. Captura os elementos da tela (DOM)
    const txtUmidade = document.getElementById('txt-umidade');
    const txtTemp = document.getElementById('txt-temp');
    const txtIrrigacao = document.getElementById('txt-irrigacao');
    
    const statusUmidade = document.getElementById('status-umidade');
    const statusTemp = document.getElementById('status-temp');

    // 3. Atualiza os números na tela
    txtUmidade.innerText = umidade;
    txtTemp.innerText = temperatura;

    // 4. Lógica de Negócio Sustentável (Tomada de decisão)
    let precisaIrrigar = false;

    // Validação da Umidade
    if (umidade < 40) {
        statusUmidade.innerText = "Solo Seco! Risco para a planta.";
        statusUmidade.className = "status alerta";
        precisaIrrigar = true; // Ativa a irrigação para salvar a plantação
    } else if (umidade > 70) {
        statusUmidade.innerText = "Solo Muito Úmido. Risco de desperdício.";
        statusUmidade.className = "status alerta";
        precisaIrrigar = false; // Solo já encharcado, desliga para economizar água
    } else {
        statusUmidade.innerText = "Umidade Ideal.";
        statusUmidade.className = "status ideal";
    }

    // Validação da Temperatura
    if (temperatura > 33) {
        statusTemp.innerText = "Calor Excessivo!";
        statusTemp.className = "status alerta";
        // Se estiver muito quente e a umidade baixando, reforça a irrigação
