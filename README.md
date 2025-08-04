# Diseño de Patrones
## Factory Method




#### Tarea 01 - Notificaciones

📝 **Enunciado:**
Crea una factoría de notificadores (por consola, correo electrónico, y SMS).
**Requisitos:**

  -  Una interfaz Notifier con método send(message: string): void.

  -  Clases concretas: ConsoleNotifier, EmailNotifier, SMSNotifier.

  -  Una clase NotifierFactory que devuelva el tipo de notificador adecuado según configuración ("console", "email", "sms").

  -  Simula una función config = getNotificationType().

✅ **Objetivo:** Entender cómo cambiar la clase concreta sin tocar la lógica del cliente.


#### Tarea 02 - Práctica web: Elementos interactivos

📝 **Enunciado:**
Simula un sistema de UI que renderiza diferentes botones según el tipo de dispositivo (desktop, mobile, tablet).
**Requisitos:**

  -  Interfaz UIElement con método render().

  -  Clases concretas: DesktopButton, MobileButton, TabletButton.

  -  Una fábrica abstracta UIFactory y subclases DesktopFactory, MobileFactory, etc.

  -  Crea un archivo HTML y usa TypeScript para inyectar los elementos.

✅ **Objetivo:** Practicar el patrón en un entorno más visual, con el DOM.


#### Tarea 03 - Backend o lógica de negocio: Envío de archivos

📝 **Enunciado:**
Crea un sistema que permita subir archivos a diferentes servicios (local, AWS S3, Google Cloud).
**Requisitos:**

  -  Interfaz Uploader con método upload(file: File): Promise<void>.

  -  Implementaciones concretas: LocalUploader, S3Uploader, GCloudUploader.

  -  Una fábrica abstracta UploaderFactory y subclases según el servicio.

  -  Simula el uso de process.env.UPLOAD_PROVIDER para decidir la fábrica.

✅ **Objetivo:** Ver cómo este patrón ayuda a separar entorno y lógica.


#### Tarea 04 - Creatividad: Creador de avatares

📝 **Enunciado:**
Genera avatares personalizados según el tipo de usuario (artista, administrador, visitante).
**Requisitos:**

  -  Interfaz Avatar con render(): HTMLElement.

  -  Clases concretas que muestren avatares distintos.

  -  Fábrica que elija el avatar según el rol.

  -  Úsalo con un array simulado de usuarios y pinta sus avatares.

✅ **Objetivo:** Integrar el patrón en estructuras de frontend + lógica de negocio.