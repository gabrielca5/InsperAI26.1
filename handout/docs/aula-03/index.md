# Aula 3 — Otimização

Na aula 2, a regressão logística já apareceu como modelo de classificação.
Agora o foco fica mais estreito e mais técnico:

**como os parâmetros desse modelo são ajustados durante o treino?**

O objetivo agora é entender:

- qual função de custo faz sentido em classificação binária
- como calcular o gradiente dessa função
- como o gradiente descendente ajusta os parâmetros
- por que taxa de aprendizado, convergência e escala das features importam

---
## Ideia central

Treinar um modelo não é "rodar um método mágico".
É resolver um problema de otimização:

1. definir uma função de custo
2. medir como ela muda quando os parâmetros mudam
3. atualizar os parâmetros para reduzir esse custo

É exatamente isso que vamos fazer com Regressão Logística.

---
## Material

Sequência recomendada:

1. Leia [Função de Custo e Gradiente](custo-gradiente.md).
2. Leia [Gradient Descent e Convergência](gradient-descent.md).
3. Faça a atividade em [Prática](pratica.md).

---
## Resultado esperado

Ao final da aula, você deve conseguir olhar para `log loss`, gradiente e `gradient descent` e entender o papel de cada peça no treino.

Se isso não ficar claro, o aluno até consegue usar biblioteca, mas ainda não entendeu treino.
