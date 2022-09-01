
# Eskeleton blog

## lista de rutas Users
- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery (no implementado)
- /api/v1/auth/verify-account (no implementado)

- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET 
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

## lista de rutas por agregar

 **1) /api/v1/posts**
 -  Crear posts
 -  Ver los posts de todos los usuarios


**2) /api/v1/posts/:id**
 -  Ver un post en especifico

**3) /api/v1/users/me/posts**

 - Ver unicamente los posts del usuario loggeado

**4) /api/v1/users/me/posts/:id**

 - Ver un post en especifico pero solo los del usuario loggeado
 - Editar un post
 - Eliminar un post
