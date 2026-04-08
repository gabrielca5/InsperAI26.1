# Função de Custo e Gradiente

Depois que a Regressão Logística foi apresentada, o próximo passo é entender o treino.

Treinar significa ajustar `w` e `b` para reduzir o erro do modelo.
Para isso, precisamos de duas coisas:

- uma função de custo
- uma forma de medir como ela muda quando alteramos os parâmetros

---
## Por que não usar MSE

Na regressão linear, usamos MSE porque o alvo é contínuo.
Na regressão logística, isso não é a melhor escolha.

Aqui, o objetivo não é prever um número contínuo com erro pequeno.
É atribuir **probabilidades coerentes** às classes.

Por isso usamos a **log loss**, também chamada de **binary cross-entropy**.

---
## Log Loss

$$
J(\mathbf{w}, b) =
- \frac{1}{m} \sum_{i=1}^{m}
\left[
y_i \log(\hat{y}_i) + (1 - y_i)\log(1 - \hat{y}_i)
\right]
$$

Onde:

- `m` é o número de exemplos
- `y_i` é o rótulo real
- `\hat{y}_i` é a probabilidade prevista

### Intuição

A log loss pune fortemente previsões confiantes e erradas.

Exemplos:

- prever `0.99` quando a classe real é `1` é bom
- prever `0.51` quando a classe real é `1` é aceitável, mas fraco
- prever `0.01` quando a classe real é `1` é um erro grave

Isso faz sentido em classificação probabilística.

---
## O objetivo do treino

Treinar significa encontrar os valores de `w` e `b` que minimizam `J(w, b)`.

Isso é um problema de otimização.

---
## Gradiente

O gradiente diz como a função de custo varia quando mexemos nos parâmetros.

Para regressão logística:

$$
\frac{\partial J}{\partial w_j}
=
\frac{1}{m}
\sum_{i=1}^{m}
(\hat{y}_i - y_i) x_{ij}
$$

$$
\frac{\partial J}{\partial b}
=
\frac{1}{m}
\sum_{i=1}^{m}
(\hat{y}_i - y_i)
$$

Você não precisa decorar as fórmulas para sempre.
Mas precisa entender a lógica:

- o erro `(\hat{y} - y)` indica a direção do ajuste
- cada feature pesa esse erro de forma diferente
- o gradiente resume como atualizar todos os parâmetros

---
## Leitura prática do gradiente

Se um parâmetro tem gradiente positivo, aumentar esse parâmetro aumenta o custo.
Se o gradiente é negativo, aumentar esse parâmetro tende a reduzir o custo.

É por isso que o algoritmo caminha na direção oposta ao gradiente.

Essa é a peça conceitual que faltava para entender treino de verdade.
