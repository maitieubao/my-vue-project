import { reactive } from 'vue'

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export function useAuthValidation() {
  const errors = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const validateField = (
    field: 'name' | 'email' | 'password' | 'confirmPassword',
    value: string,
    compareValue?: string,
  ) => {
    switch (field) {
      case 'name':
        errors.name = value.trim() === '' ? 'Name is required' : ''
        break

      case 'email':
        errors.email =
          value.trim() === ''
            ? 'Email is required'
            : !emailRegex.test(value)
              ? 'Please enter a valid email address'
              : ''
        break

      case 'password':
        errors.password =
          value.trim() === ''
            ? 'Password is required'
            : value.length < 6
              ? 'Password must be at least 6 characters'
              : ''
        break

      case 'confirmPassword':
        errors.confirmPassword =
          value.trim() === ''
            ? 'Please confirm your password'
            : value !== compareValue
              ? 'Passwords do not match'
              : ''
        break
    }
  }

  const clearErrors = () => {
    errors.name = ''
    errors.email = ''
    errors.password = ''
    errors.confirmPassword = ''
  }

  return {
    errors,
    validateField,
    clearErrors,
  }
}
