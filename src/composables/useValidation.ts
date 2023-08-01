import { ref, Ref } from 'vue';

interface ValidationResult {
    isValid: Ref<boolean>,
    error: Ref<string| null>,
    validate: () => void,
}

const useValidation = (value: Ref<string>, minLength: number, maxLength: number): ValidationResult => {
    const isValid = ref(true)
    
    const error = ref<string | null>(null)

    const errorMessages = {
        required: "Field is required",
        stringMax: "Field has to be shorter than {parameter} characters",
        stringMin: "Field has to be longer than {parameter} characters",
        minMax: "Field has to be {parameter} characters",
        invalid: "Invalid value"
    }

    const validate = (): void => {
        if (!value.value) {
            isValid.value = false
            error.value = errorMessages.required
        } else if (value.value.length > maxLength) {
            isValid.value = false
            error.value = errorMessages.minMax.replace('{parameter}', maxLength.toString())
        } else if (value.value.length < minLength) {
            isValid.value = false
            error.value = errorMessages.minMax.replace('{parameter}', minLength.toString())
        } else if(value.value.length === 12 && !validateISIN(value.value)){
            isValid.value = false
            error.value = errorMessages.invalid;
        } else {
            isValid.value = true
            error.value = null
        }
    }

    const validateISIN = (isin: string): boolean => {
        // Perform ISIN validation logic here
        // Return true if the ISIN is valid, false otherwise
        return /^[A-Za-z]{2}[A-Za-z0-9]{9}[0-9]$/.test(isin);
    }

    return {
        isValid,
        error,
        validate,
    }
}

export default useValidation;