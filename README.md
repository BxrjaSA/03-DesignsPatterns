# Diseño de Patrones
Sitio oficial de referencia [Refactoring Guru](https://refactoring.guru/es/design-patterns/)
## Patrones Creacionales
### Builder
  El patrón permite producir distintos tipos y representaciones de un objeto
  empleando el mismo código de construcción.

  El patrón Builder sugiere que saques el código de construcción del objeto de su propia clase
  y lo coloques dentro de objetos independientes (constructores).

--------------------------
|      < interface >     |
|    CharacterBuilder    |
--------------------------
|  + reset(): void       |
|  + setClass(): void    |
|  + setName(): void     |
|  + setLevel(): void    |
|  + setPower(): void    |
|  + setDefense(): void  |
|  + setHealth(): void   |
|  + setExp(): void      |
|  + addSkills(): void   |
|  + addItems(): void    |
--------------------------

  1.  Definir claramente los pasos comunes de construcción para todas 
  las representaciones disponibles del producto.

  2.  Declara estos pasos en la interfaz constructora base.

  3.  Crea una clase constructora concreta para cada una de las 
  representaciones de producto e implementa sus pasos de construcción.
  
  Los métodos que utiliza la clase constructura serán los mismos que se 
  definen en la interfaz constructora base, pero estos se aplican de forma 
  diferente para obtener objetos diferentes.

  Por ejemplo: Tenemos la interfaz `IntefaceCharacterBuilder` que es la constructora base. 
  Luego tenemos dos constructores concretos, uno será para crear PJs y otro para crear 
  las Hojas de los PJs, estas serán `CharacterBuilder` y `CharacterSheetBuilder`. 
  Estas dos **clases constructoras concretas** utilizan los mismos métodos para producir 
  dos objetos diferentes. Una entrega el objeto `Character` y la otra el objeto `Sheet`
  que interpreta los datos en un objeto totalmente diferente.

  ----------------------------------------------------------
  |               PRODUCTOS Y SUS PROPIEDADES              |
  ----------------------------------------------------------
  |       Character    |               Sheet               |
  ----------------------------------------------------------
  |  class: string     |  tittle: string                   |
  |  name: string      |  description: string              |
  |  level: number     |  stats: Record <string, number>   |
  |  power: number     |  skills: string[]                 | 
  |  defense: number   |  items: string[]                  |
  |  health: number    |                                   |
  |  exp: number       |                                   |
  |  skills: string[]  |                                   |
  |  items: string[]   |                                   |
  ----------------------------------------------------------

  La clase `CharacterBuilder` construye el PJ con las propiedades y atributos que se 
  le indican, y la clase `CharacterSheetBuilder` utiliza los atributos para definir
  la hoja del PJ, entregando el objeto `Sheet` a diferencia del objeto `Character`. 
  
  
  NOTE importante no olvidar **implementar un método para extraer el resultado de la construcción**. 
  La razón por la que este método no se puede declarar dentro de la interfaz constructora es que 
  varios constructores pueden construir productos sin una interfaz común. 
  Por lo tanto, no se sabe cuál será el tipo de retorno para un método como éste. 
  Aunque, **si se trabaja con productos de una única jerarquía**, 
  el método de extracción puede añadirse sin problemas a la interfaz base.

  4.  Plantea crear una **clase directora**. Esta puede encapsular varias formas de construir 
  un producto utilizando el mismo objeto constructor.

  5.  El código cliente crea tanto el objeto constructor como el director. 
  Antes de que empiece la construcción, el cliente debe pasar un objeto constructor al director. 
  Normalmente, el cliente hace esto sólo una vez, mediante los parámetros del constructor del director. 
  El director utiliza el objeto constructor para el resto de la construcción. 
  Existe una manera alternativa, en la que el objeto constructor se pasa directamente 
  al método de construcción del director.

  6.  El resultado de la construcción tan solo se puede obtener directamente del director 
  si todos los productos siguen la misma interfaz. De lo contrario, 
  el cliente deberá extraer el resultado del constructor.



### Factory Method





#### Tarea 01 - Notificaciones

📝 **Enunciado:**
Crea una factoría de notificadores (por consola, correo electrónico, y SMS).
**Requisitos:**

  -  Una interfaz Notifier con método `send(message: string): void`.

  -  Clases concretas: `ConsoleNotifier`, `EmailNotifier`, `SMSNotifier`.

  -  Una clase `NotifierFactory` que devuelva el tipo de notificador adecuado según configuración ("console", "email", "sms").

  -  Simula una función `config = getNotificationType()`.

✅ **Objetivo:** Entender cómo cambiar la clase concreta sin tocar la lógica del cliente.


#### Tarea 02 - Práctica web: Elementos interactivos

📝 **Enunciado:**
Simula un sistema de UI que renderiza diferentes botones según el tipo de dispositivo (desktop, mobile, tablet).
**Requisitos:**

  -  Interfaz `UIElement` con método `render()`.

  -  Clases concretas: `DesktopButton`, `MobileButton`, `TabletButton`.

  -  Una fábrica abstracta `UIFactory` y subclases `DesktopFactory`, `MobileFactory`, etc.

  -  Crea un archivo HTML y usa TypeScript para inyectar los elementos.

✅ **Objetivo:** Practicar el patrón en un entorno más visual, con el DOM.


#### Tarea 03 - Backend o lógica de negocio: Envío de archivos

📝 **Enunciado:**
Crea un sistema que permita subir archivos a diferentes servicios (local, AWS S3, Google Cloud).
**Requisitos:**

  -  Interfaz `Uploader` con método `upload(file: File): Promise<void>`.

  -  Implementaciones concretas: `LocalUploader`, `S3Uploader`, `GCloudUploader`.

  -  Una fábrica abstracta `UploaderFactory` y subclases según el servicio.

  -  Simula el uso de `process.env.UPLOAD_PROVIDER` para decidir la fábrica.

✅ **Objetivo:** Ver cómo este patrón ayuda a separar entorno y lógica.


#### Tarea 04 - Creatividad: Creador de avatares

📝 **Enunciado:**
Genera avatares personalizados según el tipo de usuario (artista, administrador, visitante).
**Requisitos:**

  -  Interfaz `Avatar` con `render(): HTMLElement`.

  -  Clases concretas que muestren avatares distintos.

  -  Fábrica que elija el avatar según el rol.

  -  Úsalo con un array simulado de usuarios y pinta sus avatares.

✅ **Objetivo:** Integrar el patrón en estructuras de frontend + lógica de negocio.