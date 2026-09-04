# Tasks: Upload de Imagen

## Componente

- [x] Crear archivo `UploadImage.jsx` en `src/components/`
- [x] Definir estados: file, preview, error, isValid

## Input de Archivo

- [x] Crear input de archivo oculto (type="file")
- [x] Configurar accept="image/*"
- [x] Crear función para abrir el input programáticamente

## Zona de Upload

- [x] Crear zona clickable con icono de upload
- [x] Agregar texto guía: "Selecciona una foto de tu rostro"
- [x] Mostrar vista previa cuando haya imagen seleccionada
- [x] Estilizar zona con borde punteado y fondo gris

## Validaciones

- [x] Crear función validateFile(file)
- [x] Validar formato: solo .jpg, .jpeg, .png
- [x] Validar tamaño: máximo 10MB
- [x] Retornar objeto { valid, error }

## Errores

- [x] Mostrar error "Formato no válido. Usa JPG o PNG"
- [x] Mostrar error "La imagen supera los 10MB"
- [x] Limpiar error al seleccionar nueva imagen

## Botón Analizar

- [x] Agregar botón "Analizar"
- [x] Deshabilitar cuando no hay imagen válida
- [x] Estilo deshabilitado: opacity-50, cursor-not-allowed

## Estilos

- [ ] Estilizar zona de upload con Tailwind
- [ ] Hacer responsive (móvil y escritorio)
- [ ] Agregar hover states

## Pruebas manuales

- [ ] Probar con archivo JPG válido
- [ ] Probar con archivo PNG válido
- [ ] Probar con archivo GIF (debe fallar)
- [ ] Probar con archivo PDF (debe fallar)
- [ ] Probar con archivo de 11MB (debe fallar)
- [ ] Probar con archivo de 9MB (debe pasar)
- [ ] Probar en móvil y escritorio
