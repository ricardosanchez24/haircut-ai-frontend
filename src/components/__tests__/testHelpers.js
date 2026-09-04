import { fireEvent } from '@testing-library/react'

export const selectFile = (fileInput, file) => {
  fireEvent.change(fileInput, { target: { files: [file] } })
}

export const createFile = (name, type, size = 1024) => {
  return new File(['x'.repeat(size)], name, { type })
}
