# 📸 Como Adicionar Sua Foto

## Passos para substituir a foto:

1. **Salve sua foto** como `jorge-photo.jpg`
2. **Copie o arquivo** para: `public/assets/images/jorge-photo.jpg`
3. **Substitua o arquivo existente**

## Recomendações para a foto:

- ✅ **Formato**: JPG ou PNG
- ✅ **Tamanho**: Quadrada (1:1) - ex: 400x400px
- ✅ **Qualidade**: Boa resolução, mas não muito pesada
- ✅ **Fundo**: Preferencialmente com boa iluminação

## O que foi alterado no código:

```jsx
// ANTES (quadrado branco):
<div className="w-6 h-6 bg-white rounded-lg"></div>

// DEPOIS (sua foto):
<img 
  src="/assets/images/jorge-photo.jpg" 
  alt="Jorge Luis" 
  className="w-full h-full object-cover rounded-lg"
/>
```

## Resultado:

- 🎯 **Bordas arredondadas** - `rounded-lg`
- 🎯 **Ajuste automático** - `object-cover` (corta proporcionalmente)
- 🎯 **Gradiente de fundo** - Mantém o gradiente roxo/azul como moldura
- 🎯 **Responsivo** - Funciona em mobile e desktop

Após salvar a foto, o site atualizará automaticamente! 🚀