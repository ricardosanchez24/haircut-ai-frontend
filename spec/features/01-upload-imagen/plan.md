# Plan: Upload de Imagen

## Componente

`UploadImage.jsx`

## Estados

| Estado | Tipo | Descripción |
|--------|------|-------------|
| `file` | File | Archivo seleccionado por el usuario |
| `preview` | string | URL de vista previa (URL.createObjectURL) |
| `error` | string | Mensaje de error (vacío si no hay error) |
| `isValid` | boolean | true si la imagen es válida |

## Funciones

### handleFileSelect(e)
- Obtiene el archivo del input
- Limpia errores anteriores
- Ejecuta validaciones
- Si es válido, genera vista previa

### validateFile(file)
- Validar formato: solo .jpg, .jpeg, .png
- Validar tamaño: máximo 10MB (10 * 1024 * 1024 bytes)
- Retorna `{ valid: boolean, error: string }`

### formatFileSize(bytes)
- Convierte bytes a formato legible (KB, MB)
- Ejemplo: 2097152 → "2 MB"

## Estructura JSX

```jsx
<div className="upload-zone">
  {/* Zona de click/drag */}
  <input type="file" accept="image/*" hidden />
  <div onClick={openFilePicker}>
    {preview ? (
      <img src={preview} alt="Vista previa" />
    ) : (
      <UploadIcon />
      <p>Selecciona una foto de tu rostro</p>
    )}
  </div>

  {/* Mensaje de error */}
  {error && <p className="error">{error}</p>}

  {/* Botón Analizar */}
  <button disabled={!isValid}>Analizar</button>
</div>
```

## Estilos (Tailwind)

- Zona de upload: borde punteado, fondo gris claro, rounded-lg
- Hover: cambio de color de borde
- Error: texto rojo
- Botón deshabilitado: opacity-50, cursor-not-allowed
- Responsive: width 100%, max-w-lg en desktop
