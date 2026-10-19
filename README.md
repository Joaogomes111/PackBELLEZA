# Pack Insta de Impacto — Servicios de Belleza

Landing page estática em espanhol, refeita com a copy e as imagens originais da oferta.

Os seis packs têm carrosséis independentes e infinitos, sem botão de pausa. O banner rosa usa as três artes e a composição da primeira versão, com layout responsivo. No mobile, o destaque das 400 publicações aparece logo abaixo do cabeçalho e as fotos do banner vêm depois do título. O aviso do Canva aparece após os seis packs. A página inclui seções de publicações, legendas, Stories, carrosséis, destaques, bônus, personalização, feedback e oferta, com botões de CTA intermediários. A lista da oferta aparece em tamanho legível ao lado do cartão de compra, que permanece compacto. A seção “Quiénes somos” foi removida.

## Prévia local

Você pode abrir `index.html` diretamente no navegador. Para conferir também a rota `/servicios-de-belleza/`, execute `node preview.mjs` dentro desta pasta e abra `http://127.0.0.1:3000/servicios-de-belleza/`. Não há dependências para instalar.

## Publicar no GitHub e na Vercel

1. Envie todos os arquivos desta pasta para a raiz de um repositório GitHub.
2. Na Vercel, importe o repositório. Selecione **Framework Preset: Other** e deixe o diretório de saída em branco.
3. Publique. O arquivo `index.html` será servido na raiz do domínio.

O `vercel.json` também faz a página responder em `/servicios-de-belleza/`.

Não há instalação de dependências nem etapa de build. As imagens usadas na página estão dentro de `assets/`, em sua maioria em WebP. O botão de compra usa o checkout Hotmart já vinculado à página original: `https://pay.hotmart.com/I107472581B?checkoutMode=10`.

## Antes da publicação

- Confirme com o cliente o preço exibido como `$ 9,90`, a garantia de 7 dias e a política de liberação dos bônus após 7 dias. O checkout pode mostrar outra moeda conforme o país do comprador.
- Revise a lista exata de materiais e a disponibilidade da assistência via WhatsApp.
- Se houver uma URL final, configure domínio e metadados de compartilhamento absolutos para a imagem `og:image`.
- Os links de checkout preservam parâmetros UTM e `src`. O evento `checkout_click` é enviado ao `dataLayer` apenas se já existir uma implementação de GTM.

As artes em `assets/` vieram da página original informada pelo cliente.
