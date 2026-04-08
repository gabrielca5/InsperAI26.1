# Prática

O notebook `lr-bgd.ipynb` é a atividade principal da aula 3.
Nele, você implementa uma versão manual de regressão logística com **batch gradient descent**.

---
## O que você vai fazer

1. Inicializar pesos e bias.
2. Implementar a previsão probabilística.
3. Implementar a log loss.
4. Implementar o cálculo do gradiente.
5. Implementar o loop de gradient descent.
6. Treinar o modelo e comparar o resultado com o `scikit-learn`.

---
## O que observar

- O custo está caindo ao longo das iterações?
- A taxa de aprendizado faz sentido?
- O algoritmo converge ou oscila?
- O desempenho final fica perto do baseline da aula anterior?
- A escala das features está atrapalhando o treino?

---
## Onde os alunos costumam errar

- esquecer que `predict` aqui devolve probabilidade, não classe
- calcular `log(0)` e explodir a função de custo
- errar shape de vetores e matrizes
- interpretar `alpha` como valor arbitrário sem testar efeito na convergência
- comparar pesos sem pensar na escala das features

---
## Objetivo pedagógico

O notebook não existe para competir com a implementação do `sklearn`.
Ele existe para mostrar, passo a passo, o que a biblioteca está escondendo quando você chama `.fit()`.
