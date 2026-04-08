# Gradient Descent e Convergência

Com a função de custo e o gradiente definidos, falta o mecanismo de ajuste iterativo.

Esse mecanismo é o **gradient descent**.

---
## A ideia do algoritmo

O algoritmo repete sempre o mesmo ciclo:

1. começar com pesos iniciais
2. calcular o gradiente
3. atualizar os parâmetros na direção oposta ao gradiente
4. repetir até convergir ou atingir o limite de iterações

As atualizações são:

$$
\mathbf{w} \leftarrow \mathbf{w} - \alpha \frac{\partial J}{\partial \mathbf{w}}
$$

$$
b \leftarrow b - \alpha \frac{\partial J}{\partial b}
$$

Onde `\alpha` é a taxa de aprendizado.

---
## Taxa de aprendizado

Se `\alpha` for:

- muito pequeno, o treino fica lento
- muito grande, o custo pode oscilar ou divergir

Esse hiperparâmetro não é detalhe.
Ele muda completamente o comportamento do treino.

---
## Convergência

Na prática, queremos ver o custo cair ao longo das iterações.

Sinais esperados de um treino saudável:

- a função de custo diminui
- os parâmetros estabilizam
- o critério de parada é alcançado

Sinais de problema:

- custo oscilando
- custo aumentando
- treino extremamente lento

---
## Escala das features

Gradient descent é sensível à escala dos dados.
Features em escalas muito diferentes dificultam a otimização.

Na prática, isso significa:

- convergência mais lenta
- maior sensibilidade ao valor de `alpha`
- pesos com magnitudes difíceis de comparar

!!! warning "Não trate convergência como mágica"
    Se o algoritmo só funciona depois de muita tentativa aleatória de `alpha`, provavelmente falta discutir escala dos dados com clareza.

---
## Vetorização

No notebook, você pode até implementar partes com loops para entender a lógica.
Mas a forma padrão em ML numérico é **vetorizada**:

- mais rápida
- mais concisa
- mais próxima do que bibliotecas reais fazem

É por isso que `np.dot()` aparece tanto nessa aula.

---
## O que observar no notebook

Quando executar a prática, preste atenção em quatro coisas:

1. o custo realmente cai?
2. o valor de `alpha` parece razoável?
3. o critério de parada faz sentido?
4. o desempenho final fica próximo do baseline com `sklearn`?
