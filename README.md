# 🚀 NestJS Template con SOLID + Husky + Linting

Este template proporciona una base sólida para proyectos de 0, o ya hechos en **NestJS con TypeScript**, incluyendo herramientas que refuerzan buenas prácticas como los principios **SOLID** y código limpio.

## 📦 Contenido

- ✅ Estructura básica de proyecto NestJS
- ✅ ESLint con:
  - `@typescript-eslint`
  - `eslint-plugin-sonarjs`
  - `eslint-plugin-clean-code`
- ✅ Prettier integrado
- ✅ Hooks de pre-commit con Husky y lint-staged

---

## ⚙️ Instalación desde cero (nuevo proyecto)

1. **Clona el repositorio** o descarga el zip:

```bash
npx degit tu-usuario/nest-solid-template nombre-proyecto
cd nombre-proyecto
npm install
npx husky install
```

2. **Haz tu primer commit** para que se active Husky:

```bash
git init
git add .
git commit -m "chore: primera configuración"
```

---

## 🛠️ Integración en proyecto existente

1. **Instala las dependencias**:

```bash
npm install --save-dev \
  eslint \
  prettier \
  husky \
  lint-staged \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-sonarjs \
  eslint-plugin-clean-code \
  eslint-plugin-prettier \
  eslint-config-prettier
```

2. **Agrega los archivos de configuración**:

- `.eslintrc.js`
- `.prettierrc`
- `.husky/pre-commit`

> Puedes copiar los archivos de este template o adaptarlos.

3. **Agrega los scripts en `package.json`:**

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts",
    "format": "prettier --write ."
  },
  "lint-staged": {
    "*.{ts,js}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

4. **Inicializa Husky**:

```bash
npx husky install
```

5. **Verifica el hook**:

El hook en `.husky/pre-commit` debe contener:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "🔍 Corriendo ESLint y Prettier antes del commit..."
npx lint-staged
```

---

## 📚 Recomendaciones de buenas prácticas

- Mantén la arquitectura modular (por features)
- Aplica separación de capas (domain, infra, app, interfaces)
- Usa principios SOLID para tus servicios y controladores
- Usa DTOs para validación y tipado fuerte

---

## 🧪 Scripts útiles

```bash
npm run lint      # Corre ESLint
npm run format    # Formatea el código con Prettier
```

---
