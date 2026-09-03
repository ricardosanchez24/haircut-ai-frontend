# Tasks: Upload de Imagen

## Componente

- [ ] Crear archivo `UploadImage.jsx` en `src/components/`
- [ ] Definir estados: file, preview, error, isValid

## Input de Archivo

- [ ] Crear input de archivo oculto (type="file")
- [ ] Configurar accept="image/*"
- [ ] Crear función para abrir el input programáticamente

## Zona de Upload

- [ ] Crear zona clickable con icono de upload
- [ ] Agregar texto guía: "Selecciona una foto de tu rostro"
- [ ] Mostrar vista previa cuando haya imagen seleccionada
- [ ] Estilizar zona con borde punteado y fondo gris

## Validaciones

- [ ] Crear función validateFile(file)
- [ ] Validar formato: solo .jpg, .jpeg, .png
- [ ] Validar tamaño: máximo 10MB
- [ ] Retornar objeto { valid, error }

## Errores

- [ ] Mostrar error "Formato no válido. Usa JPG o PNG"
- [ ] Mostrar error "La imagen supera los 10MB"
- [ ] Limpiar error al seleccionar nueva imagen

## Botón Analizar

- [ ] Agregar botón "Analizar"
- [ ] Deshabilitar cuando no hay imagen válida
- [ ] Estilo deshabilitado: opacity-50, cursor-not-allowed

## Estilos

- [ ] Estilizar zona de upload con Tailwind
- [ ] Hacer responsive (móvil y escritorio)
- [ ] Agregar hover states

## Pruebas manuales

- [ ] Probar con archivo JPG válido
- [ ] Probar con archivo PNG válido
- [ ] Probar con archivo GIF (debe fallar)
- [ ] Probar con archivo PDF (debe fallar)
- [ ] Probar con archivo de 6MB (debe fallar)
- [ ] Probar con archivo de 4MB (debe pasar)
- [ ] Probar en móvil y escritorio
