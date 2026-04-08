# Prática

O notebook `classificadores.ipynb` é a atividade principal da aula 2.
O handout concentra a teoria; o notebook coloca o classificador em execução.

[Link do Clasroom](https://classroom.github.com/a/RUNehEEq)

---
## O que você vai fazer

1. Carregar o Breast Cancer Wisconsin Dataset.
2. Fazer uma inspeção curta da base e do target.
3. Separar treino e teste.
4. Treinar um baseline com `LogisticRegression`.
5. Inspecionar previsões, coeficientes e a lógica da decisão.
6. Gerar previsões no conjunto de teste.
7. Calcular e interpretar matriz de confusão, acurácia, precisão, recall e F1-score.

??? question "No contexto do câncer de mama, qual métrica (precisão ou recall) você considera mais crítica? Justifique."
    **Recall** tende a ser a métrica mais crítica nesse contexto. O motivo é direto: um **falso negativo** significa classificar um caso maligno como benigno, o que pode atrasar diagnóstico e tratamento. Em problemas médicos como esse, deixar um caso real passar costuma ser mais grave do que investigar um caso suspeito que depois se mostra benigno.

    Isso não torna a **precisão** irrelevante. Se ela for muito baixa, o modelo gera muitos alarmes falsos, aumenta ansiedade, custo e número de exames desnecessários. Mesmo assim, em uma etapa de triagem, normalmente faz mais sentido errar por excesso de cautela do que falhar em detectar um tumor maligno.
    
---
## Ponte para a próxima aula

Nesta aula você usa a regressão logística como modelo de classificação e entende sua estrutura.
Na próxima, a pergunta muda:

**o que o modelo está fazendo por dentro quando chamamos `.fit()`?**

É isso que o notebook `otimizacao.ipynb` vai abrir.
