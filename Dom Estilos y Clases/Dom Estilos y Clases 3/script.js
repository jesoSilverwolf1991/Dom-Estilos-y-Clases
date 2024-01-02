document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        if (!validarFormulario()) {
            event.preventDefault();
        }
    });

    formulario.addEventListener('input', function (event) {
        validarCampo(event.target);
    });

    function validarFormulario() {
        let camposValidos = true;

        formulario.querySelectorAll('input').forEach(function (input) {
            if (!validarCampo(input)) {
                camposValidos = false;
            }
        });

        return camposValidos;
    }

    function validarCampo(input) {
        const valor = input.value.trim();
        const esRequerido = input.hasAttribute('required');

        if (esRequerido && valor === '') {
            marcarCampoInvalido(input);
            return false;
        } else {
            limpiarEstilos(input);
            return true;
        }
    }

    function marcarCampoInvalido(input) {
        input.classList.add('invalid');
    }

    function limpiarEstilos(input) {
        input.classList.remove('invalid');
    }
});
