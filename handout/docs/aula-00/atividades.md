---
quiz:
  auto_submit: false
  disable_after_submit: false
---

# Atividades — Aula 0

Exercícios para fixar os conceitos da introdução. Não há código aqui — o objetivo é garantir que os fundamentos conceituais estejam sólidos antes de avançar.

Agora as questões são interativas: responda, clique em `Enviar` e use `Mudar resposta` sempre que quiser tentar de novo.

---

## 1. ML vs. Programação Tradicional

Um desenvolvedor precisa construir um sistema que identifica se uma transação bancária é fraudulenta ou não. Ele tem acesso a 2 milhões de transações históricas, cada uma já classificada como fraude ou legítima.

<quiz>
Qual é a melhor justificativa para usar Machine Learning nesse caso?

- [ ] Programação tradicional é melhor porque fraudes sempre seguem regras fixas e estáveis.
> Incorreto. Fraudes mudam com o tempo e costumam escapar de regras rígidas escritas manualmente.
- [x] Há muitos exemplos rotulados, o padrão é complexo demais para regras manuais e o modelo pode ser retreinado quando o comportamento mudar.
> Correto! Esse é o cenário clássico de aprendizado supervisionado: muitos exemplos rotulados, padrões difíceis de codificar manualmente e necessidade de adaptação com dados novos.
- [ ] O melhor seria usar aprendizado por reforço, já que o sistema precisa tomar decisões em produção.
> Incorreto. Aqui já existem rótulos históricos, então o problema é supervisionado, não de reforço.
- [ ] O ideal é usar clustering, porque detectar fraude sempre significa agrupar transações parecidas.
> Incorreto. Como já temos a resposta correta para cada transação, o objetivo não é descobrir grupos, mas aprender a classificar.
</quiz>

---

## 2. Classificando tipos de aprendizado

Considere as situações abaixo:

- a) Um e-commerce quer agrupar clientes em perfis de compra sem definir os grupos antes.
- b) Um hospital quer prever diabetes com prontuários já rotulados.
- c) Uma empresa quer treinar um robô para navegar desviando de obstáculos.
- d) Uma plataforma de streaming quer encontrar músicas parecidas para montar playlists.

<quiz>
Qual alternativa classifica corretamente os quatro casos?

- [ ] a) supervisionado, b) supervisionado, c) não supervisionado, d) reforço
> Incorreto. O robô aprende por tentativa e erro com recompensa, então o item (c) é reforço.
- [x] a) não supervisionado, b) supervisionado, c) reforço, d) não supervisionado
> Correto! Sem rótulos e buscando estrutura: não supervisionado. Com rótulos: supervisionado. Agente aprendendo por recompensa: reforço.
- [ ] a) reforço, b) não supervisionado, c) supervisionado, d) classificação
> Incorreto. O item (b) já tem diagnósticos confirmados, então é supervisionado, e o item (d) não descreve classificação.
- [ ] a) não supervisionado, b) reforço, c) supervisionado, d) regressão
> Incorreto. O hospital não está treinando um agente, e o caso das músicas não é regressão.
</quiz>

---

## 3. Regressão ou Classificação?

Considere os problemas abaixo:

- a) Prever o preço de uma ação amanhã.
- b) Identificar se um tumor é maligno ou benigno.
- c) Estimar quantos dias um paciente ficará internado.
- d) Determinar qual dígito (0–9) está escrito numa imagem.
- e) Decidir se um e-mail vai para a caixa de entrada ou para o spam.

<quiz>
Qual alternativa classifica corretamente todos os problemas?

- [ ] a) regressão, b) regressão, c) classificação, d) regressão, e) classificação
> Incorreto. Tumor maligno/benigno e o dígito da imagem são categorias, não valores contínuos.
- [ ] a) classificação, b) classificação, c) regressão, d) regressão, e) classificação
> Incorreto. Preço de ação é valor contínuo, então (a) é regressão; o dígito continua sendo categoria.
- [x] a) regressão, b) classificação, c) regressão, d) classificação, e) classificação
> Correto! O critério é a natureza da saída: número contínuo pede regressão; categoria discreta pede classificação.
- [ ] a) regressão, b) classificação, c) classificação, d) classificação, e) regressão
> Incorreto. Dias internado é quantidade contínua/discreta ordenada prevista numericamente, e spam/não spam é classificação.
</quiz>

---

## 4. O pipeline na prática

Um cientista de dados recebeu a tarefa de construir um modelo que prevê o valor de aluguel de apartamentos em São Paulo. Considere as etapas abaixo e identifique a sequência correta do pipeline:

- Avaliar o modelo com dados que ele nunca viu
- Definir a métrica de sucesso
- Coletar dados de aluguéis anunciados
- Retreinar com dados mais recentes se a performance cair
- Tratar valores ausentes e criar features relevantes
- Escolher e treinar um modelo de regressão
- Explorar distribuições, correlações e outliers

<quiz>
Qual alternativa coloca essas etapas na ordem correta?

- [ ] Coletar dados → escolher o modelo → tratar valores ausentes → explorar distribuições → avaliar → definir a métrica → retreinar
> Incorreto. A métrica de sucesso precisa ser definida antes do treino, e explorar os dados vem antes do tratamento e da modelagem.
- [x] Definir a métrica de sucesso → coletar dados → explorar distribuições, correlações e outliers → tratar valores ausentes e criar features → escolher e treinar o modelo → avaliar em dados não vistos → retreinar se a performance cair
> Correto! Esse fluxo respeita a lógica do pipeline: definir o problema, entender os dados, preparar, treinar, avaliar e iterar com dados mais recentes quando necessário.
- [ ] Definir a métrica de sucesso → tratar valores ausentes → coletar dados → treinar → explorar distribuições → avaliar → retreinar
> Incorreto. Não faz sentido limpar ou treinar antes de ter os dados coletados e explorados.
- [ ] Explorar distribuições → definir a métrica de sucesso → coletar dados → tratar valores ausentes → avaliar → treinar → retreinar
> Incorreto. A avaliação só faz sentido depois do treino, e a métrica de sucesso precisa vir no começo.
</quiz>

---

## 5. Identificando etapas pelo sintoma

Considere os sintomas abaixo e associe cada um à etapa do pipeline em que o problema apareceu:

- a) O modelo vai muito bem no treino, mas falha em produção.
- b) Os dados misturavam reais e dólares sem conversão.
- c) O modelo de spam dizia "não spam" para tudo e mesmo assim tinha 95% de acurácia.
- d) Seis meses após o deploy, a performance caiu muito sem mudança no código.

<quiz>
Qual alternativa identifica corretamente a etapa problemática em cada caso?

- [ ] a) coleta de dados, b) treino, c) feature engineering, d) visualização
> Incorreto. Os sintomas descritos apontam para validação, preparação, escolha de métrica e monitoramento, não para essas etapas.
- [ ] a) preparação, b) coleta, c) deploy, d) definição do problema
> Incorreto. Misturar moedas é falha de preparação, mas os outros itens não batem com os sintomas.
- [x] a) avaliação/generalização, b) preparação dos dados, c) escolha da métrica de avaliação, d) monitoramento e retreino em produção
> Correto! Faltou validar generalização no item (a), padronizar os dados no (b), usar métrica adequada para desbalanceamento no (c) e acompanhar drift com retreino no (d).
- [ ] a) modelagem, b) documentação, c) coleta, d) normalização
> Incorreto. Essas etapas não explicam adequadamente os quatro sintomas apresentados.
</quiz>

---

## 6. Fixando com Quiz

<quiz>
Machine Learning e Inteligência Artificial são a mesma coisa.

- [ ] Verdadeiro
> Incorreto. IA é o campo amplo. ML é uma das abordagens dentro dele — nem toda IA usa ML.
- [x] Falso
> Correto! IA é o campo. ML é uma subárea que usa dados para aprender padrões automaticamente.
</quiz>

<quiz>
Um modelo de regressão prevê uma categoria discreta como saída.

- [ ] Verdadeiro
> Incorreto. Regressão prevê valores contínuos. Prever categorias é o papel da classificação.
- [x] Falso
> Correto! Regressão prevê números contínuos (preço, temperatura). Classificação prevê categorias (spam/não spam, maligno/benigno).
</quiz>

<quiz>
Qual etapa do pipeline consome mais tempo em projetos reais?

- [ ] Treinar o modelo
> O treino em si costuma ser rápido — especialmente com bibliotecas como scikit-learn.
- [ ] Avaliar o modelo
> A avaliação é importante, mas não é onde o tempo vai embora.
- [x] Preparar os dados
> Correto! Limpeza, tratamento de outliers, criação de features e normalização consomem 60–80% do tempo em projetos reais.
- [ ] Definir o problema
> Fundamental, mas geralmente não é onde o tempo é gasto.
</quiz>

<quiz>
No aprendizado supervisionado, o modelo aprende a partir de dados sem rótulos.

- [ ] Verdadeiro
> Incorreto. Sem rótulos é aprendizado não supervisionado. No supervisionado, cada exemplo tem uma resposta correta associada.
- [x] Falso
> Correto! No supervisionado, cada amostra vem com o rótulo correto — é exatamente esse par (entrada, saída esperada) que o modelo usa para aprender.
</quiz>

<quiz>
Retreinar o modelo com dados novos faz parte do pipeline de ML.

- [x] Verdadeiro
> Correto! O pipeline é cíclico. Modelos em produção precisam ser monitorados e retreinados quando o comportamento dos dados muda ao longo do tempo.
- [ ] Falso
> Incorreto. Um modelo treinado uma única vez fica desatualizado conforme o mundo muda — retreinar é parte essencial do processo.
</quiz>

<quiz>
Aprendizado por reforço é o tipo mais usado em problemas de previsão de preços e classificação de e-mails.

- [ ] Verdadeiro
> Incorreto. Esses são problemas de aprendizado supervisionado — os dados têm rótulos e o modelo aprende a partir deles.
- [x] Falso
> Correto! Aprendizado por reforço é usado quando um agente aprende por tentativa e erro em um ambiente — jogos, robótica, otimização de rotas. Previsão e classificação são supervisionados.
</quiz>
