# Diseño de Patrones

Sitio oficial de referencia [Refactoring Guru](https://refactoring.guru/es/design-patterns/)

# Patrones Creacionales

## Builder

  El patrón permite producir distintos tipos y representaciones de un objeto
  empleando el mismo código de construcción.

  El patrón Builder sugiere que saques el código de construcción del objeto de su propia clase
  y lo coloques dentro de objetos independientes (constructores).


|      <interface> CharacterBuilder    |
|------------------------|
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

      La clase `CharacterBuilder` construye el PJ con las propiedades y atributos que se le indican,
      y la clase `CharacterSheetBuilder` utiliza los atributos para definir la hoja del PJ, 
      entregando el objeto `Sheet` a diferencia del objeto `Character`. 
    
      > NOTE: No olvidar **implementar un método para extraer el resultado de la construcción**. La razón por la que este método no se puede declarar dentro de la interfaz constructora es que varios constructores pueden construir productos sin una interfaz común. Por lo tanto, no se sabe cuál será el tipo de retorno para un método como éste. Aunque, **si se trabaja con productos de una única jerarquía**, el método de extracción puede añadirse sin problemas a la interfaz base.

  
      **PRODUCTOS Y SUS PROPIEDADES**

      |       Character    |               Sheet               |
      |--------------------|-----------------------------------|
      |  class: string     |  tittle: string                   |
      |  name: string      |  description: string              |
      |  level: number     |  stats: Record <string, number>   |
      |  power: number     |  skills: string[]                 | 
      |  defense: number   |  items: string[]                  |
      |  health: number    |                                   |
      |  exp: number       |                                   |
      |  skills: string[]  |                                   |
      |  items: string[]   |                                   |

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
  
### Ejemplo de implementación desde el CLIENTE  

  ```ts
    // ---------------  CLIENTE  ------------------
    // 1. Instanciamos el Director
    const director = new Director();

    // OBTENER UN PJ GUERRERO
    // 2. Creamos un CharBuilder
    const charBuilder = new CharacterBuilder();
    // 3. Pasamos el Builder al Director para crear un Guerrero
    director.constructorWarrior(charBuilder);
    // 4. Creamos el Guerrero y lo obtenemos con el método .build() del constructor
    const warrior = charBuilder.build();


    // OBTENER UNA HOJA DE PJ MAGO
    // 2. Creamos un sheetBuilder
    const sheetBuilder = new CharacterSheetBuilder();
    // 3. Pasamos el Builder al Director para crear un Mago
    director.constructorMage(sheetBuilder);
    // 4. Creamos la hoja del Mago y lo obtenemos con el método .build() del constructor
    const mageSheet = sheetBuilder.build();

  ```


#### Tarea 01 - Construcción de pizzas 🍕

📝 **Enunciado:**
Crea un sistema para construir pizzas personalizadas paso a paso.
**Requisitos:**
  -  Crea una clase Pizza con propiedades: tamaño, masa, ingredientes.
  -  Define un PizzaBuilder con métodos como:
      ``` ts   
        setSize(size: string)
        setCrust(type: string)
        addIngredient(ingredient: string)
        build(): Pizza
      ```
  -  Permite construir diferentes tipos de pizzas sin usar constructores largos.

✅ **Objetivo:** Comprender la diferencia entre constructor directo y construcción paso a paso.


#### Tarea 02 - Generador de personajes de videojuego 🧙‍♂️

📝 **Enunciado:**
Crea un sistema para construir personajes (clase, raza, armas, habilidades).
**Requisitos:**
  -  Clase Character con propiedades: nombre, clase (mago, guerrero), raza (elfo, orco), armas, habilidades.
  -  Crea un CharacterBuilder con métodos encadenables:
      -  `.setName("Gandalf").setClass("Mago").addSkill("Fuego")...`
  -  Al final, usa .build() para crear el personaje.

✅ **Objetivo:** Practicar fluent API y cómo el Builder separa la lógica de construcción del objeto final.


#### Tarea 03 - Generador de HTML / UI

📝 **Enunciado:**
Crea un sistema que construya elementos HTML usando un builder.
**Requisitos:**
  - Crea un HTMLElementBuilder con métodos como:
      ``` ts
        setTag(tagName)
        setText(text)
        addAttribute(name, value)
        addChild(childBuilder)
        build(): HTMLElement
      ```
  -  Permite construir estructuras anidadas (como un árbol DOM).

✅ **Objetivo:** Usar recursividad o composición para crear estructuras complejas.


#### Tarea 04 - Generador de documentos PDF / Markdown / JSON

📝 **Enunciado:**
Crea un builder que genere distintos tipos de documentos desde un mismo modelo de datos.
**Requisitos:**
  -  Define una clase DocumentBuilder abstracta.
  -  Implementa sub-builders: MarkdownBuilder, PDFBuilder, JSONBuilder.
  -  Todos aceptan datos comunes (title, sections, footer) y generan formatos distintos.

✅ **Objetivo:** Aplicar el patrón Builder en combinación con el patrón Director (ver más abajo).


#### Tarea 05 - Usa un Director

El Director es opcional en el patrón Builder, pero útil para reutilizar procesos de construcción.
📝 **Enunciado:**
Crea una clase PizzaDirector o CharacterDirector que use un builder y tenga métodos como:
```ts
  createMargherita(builder: PizzaBuilder): Pizza
  createOrcWarrior(builder: CharacterBuilder): Character
```

✅ **Objetivo:** Separar el cómo construir de qué se construye.


## Factory Method





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