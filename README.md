# Master Piscinas Litoral

Landing page institucional da Master Piscinas Litoral, com foco em captacao de contatos via WhatsApp, SEO local e deploy estatico.

## Objetivo

Este projeto foi estruturado para:

- apresentar servicos de manutencao e limpeza de piscinas
- reforcar autoridade local em Praia Grande
- manter navegacao simples e foco em conversao
- facilitar publicacao no Vercel e indexacao no Google

## Paginas

- `/` (Home principal)
- `/cidade-praia-grande/` (Landing SEO local)

## Principais recursos

- botao flutuante de WhatsApp com CTA direto
- animacoes de scroll e parallax suave
- layout responsivo (desktop e mobile)
- fundo premium com gradientes e camadas visuais
- metadados SEO (title, description, canonical, Open Graph)
- `robots.txt` e `sitemap.xml` prontos para producao

## Estrutura de pastas

```text
.
├── assets/
│   ├── css/
│   │   └── premium.css
│   ├── images/
│   └── js/
│       ├── premium.js
│       └── slideshow.js
├── cidade-praia-grande/
│   └── index.html
├── index.html
├── robots.txt
├── sitemap.xml
└── vercel.json
```

## Deploy no Vercel

1. Crie um novo projeto no Vercel apontando para este repositorio.
2. Configure o dominio principal `masterpiscinaslitoral.com.br`.
3. Publique com build estatico (sem framework).
4. Valide os endpoints:
   - `/robots.txt`
   - `/sitemap.xml`
   - `/cidade-praia-grande/`

## Google Search Console

Depois do deploy:

1. Adicione a propriedade do dominio no Search Console.
2. Envie `https://masterpiscinaslitoral.com.br/sitemap.xml`.
3. Solicite indexacao da home e da landing de Praia Grande.
4. Monitore cobertura e desempenho das URLs.

## Contato comercial

- WhatsApp: +55 13 98112-1258
- Site: https://masterpiscinaslitoral.com.br/

---

Projeto da marca Master Piscinas Litoral.
