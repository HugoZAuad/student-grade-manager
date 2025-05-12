# Student Grade Manager

## Descrição do Projeto

Este projeto é uma API simples para gerenciar notas de estudantes. Ele foi desenvolvido em Node.js utilizando o módulo nativo `http` para criar um servidor que manipula dados de notas em memória. A API permite criar, ler, atualizar e deletar registros de notas de estudantes.

## Tecnologias Utilizadas

- Node.js (módulo nativo `http`)
- Biblioteca `uuid` para geração de identificadores únicos (UUID v4)

## Como Instalar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório ou faça o download dos arquivos.
3. No terminal, navegue até a pasta do projeto.
4. Execute o comando abaixo para instalar as dependências:

```bash
npm install
```

## Como Rodar o Projeto

Para iniciar o servidor, execute o comando:

```bash
node index.js
```

O servidor estará rodando na porta `3000`.

## Rotas da API

A API oferece as seguintes rotas para manipulação das notas:

### 1. Obter todas as notas

- **Método:** GET
- **URL:** `/grades`
- **Descrição:** Retorna um array com todas as notas cadastradas.
- **Resposta:** JSON com a lista de notas.

### 2. Criar uma nova nota

- **Método:** POST
- **URL:** `/grades`
- **Descrição:** Adiciona uma nova nota.
- **Corpo da requisição:** JSON com os campos:
  - `studentName` (string): Nome do estudante
  - `subject` (string): Matéria
  - `grade` (número): Nota do estudante
- **Resposta:** JSON com a nota criada, incluindo o `id` gerado.

### 3. Atualizar uma nota existente

- **Método:** PUT
- **URL:** `/grades/:id`
- **Descrição:** Atualiza a nota com o `id` especificado.
- **Corpo da requisição:** JSON com os campos:
  - `studentName` (string): Nome do estudante
  - `subject` (string): Matéria
  - `grade` (número): Nota do estudante
- **Resposta:** JSON com a nota atualizada.
- **Erro:** Retorna status 404 se a nota não for encontrada.

### 4. Deletar uma nota

- **Método:** DELETE
- **URL:** `/grades/:id`
- **Descrição:** Remove a nota com o `id` especificado.
- **Resposta:** Status 204 (sem conteúdo) em caso de sucesso.
- **Erro:** Retorna status 404 se a nota não for encontrada.

## Exemplos de Uso das Rotas

### Criar uma nova nota

```bash
curl -X POST http://localhost:3000/grades -H "Content-Type: application/json" -d "{\"studentName\":\"João\",\"subject\":\"Matemática\",\"grade\":9.5}"
```

### Obter todas as notas

```bash
curl http://localhost:3000/grades
```

### Atualizar uma nota

```bash
curl -X PUT http://localhost:3000/grades/{id} -H "Content-Type: application/json" -d "{\"studentName\":\"João\",\"subject\":\"Matemática\",\"grade\":10}"
```

### Deletar uma nota

```bash
curl -X DELETE http://localhost:3000/grades/{id}
```

Substitua `{id}` pelo identificador da nota que deseja atualizar ou deletar.

## Informações Adicionais

- O servidor roda na porta `3000`.
- As notas são armazenadas em memória, ou seja, ao reiniciar o servidor, os dados são perdidos.
- A dependência principal é a biblioteca `uuid` para geração de IDs únicos.

---

Este projeto é ideal para aprendizado e testes simples de APIs RESTful em Node.js.
