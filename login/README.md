# Login App structure

Esta app `login` contiene:

- `templates/login/login.html`: página de inicio de sesión.
- `templates/login/signup.html`: página de registro.
- `templates/login/home.html`: página de bienvenida después del login.
- `static/login/auth.css`: estilos compartidos para login y signup.
- `static/login/home.css`: estilos del panel de inicio.
- `static/login/js/login.js`: lógica de validación y navegación del login.
- `static/login/js/signup.js`: lógica de validación y navegación del registro.

## Organización

- Las páginas HTML están en `login/templates/login/`.
- El CSS y JavaScript externo están en `login/static/login/`.
- El archivo `auth.css` se usa en `login.html` y `signup.html`.

## Notas

Para ejecutar el proyecto en modo desarrollo, usa:

```bash
python manage.py runserver
```

Abre `http://127.0.0.1:8000/` en el navegador.
