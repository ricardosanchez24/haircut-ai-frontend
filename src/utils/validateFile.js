const MAX_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

export function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { valid: false, error: 'Formato no válido. Usa JPG o PNG' }
  }

  if (file.size > MAX_SIZE) {
    return { valid: false, error: 'La imagen supera los 10MB' }
  }

  return { valid: true, error: '' }
}
