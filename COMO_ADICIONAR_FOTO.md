# 📸 Como Adicionar Sua Foto - Guia Completo

## 🎯 Situação Atual
- ✅ Código configurado
- ✅ Placeholder "JL" funcionando
- 🔄 Falta apenas a imagem real

## 📁 Onde colocar a foto:

### Opção 1 (Recomendada):
```
portfolio-jorge/public/jorge-photo.jpg
```

### Opção 2 (Alternativa):
```
portfolio-jorge/public/assets/images/jorge-photo.jpg
```

## 🛠️ Passos para adicionar:

### 1. Prepare sua foto:
- **Formato**: JPG, PNG ou WEBP
- **Tamanho**: Quadrada (ex: 400x400px)
- **Nome**: `jorge-photo.jpg`

### 2. Copie para a pasta:
- Arraste a foto para `portfolio-jorge/public/`
- Ou use o explorador de arquivos

### 3. Atualize o código (se necessário):
Se usar a Opção 1, o código já está pronto!
Se usar a Opção 2, mude no Navbar.tsx:
```jsx
src="/assets/images/jorge-photo.jpg"
```

## 🔧 Código atual (funcionando):
```jsx
<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center p-0.5">
  <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-xs font-bold text-gray-700">
    JL
  </div>
</div>
```

## 🔄 Código final (com foto):
```jsx
<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center p-0.5">
  <img 
    src="/jorge-photo.jpg" 
    alt="Jorge Luis" 
    className="w-full h-full object-cover rounded-lg"
  />
</div>
```

## ✅ Resultado esperado:
- 🎭 Moldura gradiente (roxo → azul)
- 📸 Sua foto no centro
- 🔄 Bordas arredondadas
- 📱 Responsivo

## 🚨 Se não funcionar:
1. Verifique se o nome está correto: `jorge-photo.jpg`
2. Verifique se está na pasta `public/`
3. Recarregue a página (Ctrl+F5)
4. Abra o console do navegador (F12) para ver erros

O site está rodando em: **http://localhost:5173/**