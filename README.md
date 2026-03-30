# Courts Booking Demo UI

Demo visual frontend de un sistema de reservas de canchas deportivas, creada para portfolio y despliegue rápido en Netlify.

## Demo online

[Ver demo publicada](https://courts-booking-demo-ui.netlify.app)

## Objetivo

Esta aplicación muestra de forma navegable el flujo principal de un sistema de reservas deportivas:

- reserva de cancha
- generación de token y QR
- validación por token
- panel administrativo
- demo de consultas tipo IA

Esta versión es **solo visual/frontend**, separada del proyecto real fullstack.

## Tecnologías usadas

- React
- Vite
- Tailwind CSS
- React Router
- Netlify

## Rutas disponibles

- `/`
- `/login`
- `/validate`
- `/admin/bookings`
- `/ai-demo`

## Nota importante

Este repositorio contiene una **demo visual** pensada para mostrar navegación, diseño e interfaz.

No usa backend real ni base de datos en producción.  
El proyecto completo fullstack fue trabajado por separado en otro repositorio.

## Ejecución local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```