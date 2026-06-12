function calcular() {
    const input = document.getElementById('gasto');
    const resultado = document.getElementById('resultado');
    const raw = input.value.trim();
    if (!raw) {
        resultado.textContent = 'Informe um valor mensal válido.';
        return;
    }
    const gasto = parseFloat(raw.replace(',', '.'));
    if (isNaN(gasto) || gasto <= 0) {
        resultado.textContent = 'Informe um valor numérico maior que zero.';
        return;
    }

    const reducao = 0.9; // exemplo: redução de até 90%
    const economiaAnual = gasto * 12 * reducao;

    resultado.textContent = 'Economia anual estimada: ' + economiaAnual.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

// Permite pressionar Enter no campo para calcular
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('gasto');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') calcular();
        });
    }
});
