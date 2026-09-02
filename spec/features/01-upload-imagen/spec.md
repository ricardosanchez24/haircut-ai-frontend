# Feature 01: Upload de Imagen

## Descripción

El usuario selecciona una foto de su rostro desde su dispositivo, ve una vista previa y puede enviarla para análisis.

## Criterios de Aceptación

1. El usuario puede hacer click en un botón/zona para seleccionar una imagen
2. Se muestra una vista previa de la imagen seleccionada
3. Solo se aceptan archivos JPG y PNG
4. El archivo no puede pesar más de 5MB
5. Si el formato es inválido, se muestra error: "Formato no válido. Usa JPG o PNG"
6. Si pesa más de 5MB, se muestra error: "La imagen supera los 5MB"
7. Hay un botón "Analizar" que está deshabilitado hasta que haya una imagen válida
8. El diseño es responsive (móvil y escritorio)

## Flujo

```
Usuario hace click en zona de upload
        ↓
Selecciona archivo
        ↓
   ¿Es JPG/PNG?
    ↓         ↓
   Sí        No → Muestra error de formato
    ↓
 ¿Pesa ≤ 5MB?
  ↓         ↓
  Sí        No → Muestra error de tamaño
  ↓
Muestra vista previa
Botón "Analizar" habilitado
```

## Stack

- React (useState para estados)
- Tailwind CSS (estilos)
- Lucide Icons (icono de upload)
