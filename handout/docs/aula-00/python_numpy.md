# Python e NumPy

Python se tornou a linguagem padrão para Machine Learning por um motivo simples: é fácil de escrever, tem uma comunidade enorme e um ecossistema de bibliotecas maduro. O **NumPy** é a base desse ecossistema — quase tudo em ML, por baixo dos panos, é uma operação sobre arrays NumPy.

---

## Listas vs. Arrays

Em Python puro, usamos listas para guardar coleções de valores. O problema é que listas não foram feitas para matemática:
```python
a = [1, 2, 3]
b = [4, 5, 6]

a + b        # [1, 2, 3, 4, 5, 6] — concatenou, não somou!
a * 2        # [1, 2, 3, 1, 2, 3] — repetiu, não multiplicou!
```

Com NumPy, operações matemáticas funcionam como esperado:
```python
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

a + b        # array([5, 7, 9])
a * 2        # array([2, 4, 6])
a ** 2       # array([1, 4, 9])
```

!!! tip "Por que isso importa para ML?"
    Um dataset é uma matriz NumPy. Cada linha é uma amostra, cada coluna é uma feature. Todas as operações do modelo (multiplicações, somas, médias) acontecem sobre essa estrutura.

---

## Operações Essenciais

**Criando arrays:**
```python
np.zeros((3, 4))       # matriz 3x4 de zeros
np.ones((2, 2))        # matriz 2x2 de uns
np.arange(0, 10, 2)    # array([0, 2, 4, 6, 8])
np.linspace(0, 1, 5)   # array([0, 0.25, 0.5, 0.75, 1.0])
```

**Formato e reshape:**
```python
a = np.arange(12)
a.shape          # (12,)

m = a.reshape(3, 4)
m.shape          # (3, 4) — 3 linhas, 4 colunas
```

**Slicing:**
```python
m[0]         # primeira linha
m[:, 1]      # segunda coluna inteira
m[1:3, 0:2]  # submatriz linhas 1-2, colunas 0-1
```

**Estatísticas básicas:**
```python
a = np.array([2, 4, 4, 4, 5, 5, 7, 9])

np.mean(a)    # 5.0
np.std(a)     # 2.0
np.min(a)     # 2
np.max(a)     # 9
```

---

## Produto Escalar

O produto escalar pega dois vetores do mesmo tamanho, multiplica elemento a elemento e soma os resultados. Em ML, essa operação aparece o tempo todo porque ela transforma uma lista de features em uma única pontuação:

$$
\mathbf{w}^T \mathbf{x} = \sum_{i=1}^{n} w_i x_i
$$

Ele está no coração da regressão linear, das redes neurais e de vários outros algoritmos:
```python
pesos    = np.array([0.5, 0.3, 0.2])
features = np.array([10.0, 5.0, 2.0])

np.dot(pesos, features)   # 6.9
features @ pesos          # 6.9
```

!!! note "O que isso representa?"
    Em regressão linear, a previsão começa exatamente assim: cada feature é multiplicada pelo seu peso, e depois tudo é somado. O modelo aprende **quais pesos usar** para que essa soma produza boas previsões.

Se abrirmos a conta acima, fica mais claro:

```python
0.5 * 10.0 + 0.3 * 5.0 + 0.2 * 2.0   # 6.9
```

Cada termo responde à pergunta: **quanto esta feature contribui para a previsão?**

- Peso alto e positivo: empurra a previsão para cima.
- Peso negativo: empurra a previsão para baixo.
- Peso perto de zero: quase não influencia o resultado.

Na prática, quase sempre existe também um termo de viés (`bias` ou `b`):

```python
bias = 1.2
previsao = features @ pesos + bias   # 8.1
```

Quando temos várias amostras ao mesmo tempo, aplicamos o mesmo vetor de pesos a cada linha da matriz:

```python
X = np.array([
    [10.0, 5.0, 2.0],
    [ 8.0, 4.0, 1.0],
    [12.0, 6.0, 3.0],
])

pesos = np.array([0.5, 0.3, 0.2])

X @ pesos   # array([6.9, 5.4, 8.4])
```

!!! warning "Cuidado com os shapes"
    Para o produto escalar funcionar, o número de features precisa bater com o número de pesos. Se `X` tem shape `(n_amostras, n_features)`, então `pesos` precisa ter shape `(n_features,)`.
