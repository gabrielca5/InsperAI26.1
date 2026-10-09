/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  aula01: [
    { type: 'doc', id: 'aula-01/introducao', label: 'Introdução' },
    { type: 'doc', id: 'aula-01/historia', label: 'História da IA' },
    { type: 'doc', id: 'aula-01/python_numpy', label: '1. Python e NumPy' },
    { type: 'doc', id: 'aula-01/estatistica', label: '2. Estatística e Probabilidade' },
    { type: 'doc', id: 'aula-01/aprofundamento', label: "3. O Que vem por 'AI'" },
    { type: 'doc', id: 'aula-01/atividades', label: '4. Atividades' },
  ],
  aula02: [
    {
      type: 'category',
      label: 'Exposição Teórica',
      collapsed: false,
      items: [
        { type: 'doc', id: 'aula-02/index', label: 'Visão Geral' },
        { type: 'doc', id: 'aula-02/teoria', label: 'Regressão Linear' },
      ],
    },
    {
      type: 'category',
      label: 'Estudo de Caso',
      collapsed: false,
      items: [
        { type: 'doc', id: 'aula-02/exploracao', label: '1. Exploração dos Dados' },
        { type: 'doc', id: 'aula-02/outliers', label: '2. Outliers e Dados Suspeitos' },
        { type: 'doc', id: 'aula-02/treinamento', label: '3. Treinando o Modelo' },
        { type: 'doc', id: 'aula-02/complementar', label: '4. Leitura Complementar' },
        { type: 'doc', id: 'aula-02/atividades', label: '5. Atividades' },
        { type: 'doc', id: 'aula-02/resumo', label: '6. Resumo' },
      ],
    },
  ],
};

export default sidebars;
