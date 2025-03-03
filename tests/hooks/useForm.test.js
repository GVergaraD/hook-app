

import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm'
describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Gabriel',
        email: 'gabriel@google.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })
    test('Debe de cambiar el nombre del formulario', () => {
        const value = 'Juan';
        // montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(()=>{
            onInputChange({ target: { name: 'name', value } });
        })
        // onInputChange({ target: { name: 'name', value } });
        expect(result.current.name).toBe(value);
        expect(result.current.formState.name).toBe(value);
    })

    test('Debe de realizar el reset del formulario', () => {
        const value = 'Juan';
        // montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(()=>{
            onInputChange({ target: { name: 'name', value } });
            onResetForm();
        })
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    })
})