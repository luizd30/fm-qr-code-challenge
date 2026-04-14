# QR Code Component - React Implementation

Esta é a implementação em **React + TypeScript** do desafio QR Code Component do Frontend Mentor.

---

## 🚀 Desafio

[Frontend Mentor - QR Code Component](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H)

---

## Sobre a implementação

Esta versão foi construída utilizando React com foco em:

- Componentização simples e reutilizável
- Uso de TypeScript para tipagem de props
- Estrutura limpa e previsível
- CSS puro para estilização

O componente principal (`Card`) recebe os dados via props e renderiza o layout do QR Code conforme o design proposto.

## Estrutura do componente

```tsx
<Card
  title="Title"
  desc="Description"
  imgSrc={qrCodeImg}
  imgAlt="QR Code"
/>
```

### Por que NÃO usar Compound Components aqui?

Uma alternativa seria o padrão de Compound Components:

```tsx
<Card>
  <Card.Img src={qrCodeImg} alt="qrCodeImg" />
  <Card.Body>
    <Card.Title>
      Title
    </Card.Title>
    <Card.Description>
      Description
    </Card.Description>
  </Card.Body>
</Card>
```

###  Porém, neste contexto isso seria overkill

O uso desse pattern neste projeto:

- Aumenta complexidade sem necessidade real
- Não traz ganho significativo de flexibilidade
- Deixa o código mais verboso para um layout fixo

---

## Como rodar

1. Clone o repositório principal:

```bash
git clone https://github.com/luizd30/fm-qr-code-challenge.git
```

2. Entre na pasta React:

```bash
cd react
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

---

## Tecnologias utilizadas

- React
- TypeScript
- CSS puro (BEM)
- Vite

---

##  Conclusão

Mesmo padrões avançados como Compound Components são poderosos, eles não são necessários em todos os contextos.

Neste projeto, a abordagem simples com props diretas foi a escolha mais adequada, mantendo o código limpo, previsível e fácil de manter.
