# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build
RUN npm run build:ssr

# Etapa de producción
FROM node:20-alpine

# Crear usuario no root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instalar solo las dependencias de producción
RUN npm ci --only=production

# Cambiar al usuario no root
USER appuser

# Exponer el puerto
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "dist/alimatic-web/server/server.mjs"]
