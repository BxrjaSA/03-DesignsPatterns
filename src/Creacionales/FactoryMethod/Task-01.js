
// 📝 Enunciado:
// Crea una factoría de notificadores (por consola, correo electrónico, y SMS).
// Requisitos:
//   -  Una interfaz Notifier con método ```send(message: string): void```.
//   -  Clases concretas: `ConsoleNotifier`, `EmailNotifier`, `SMSNotifier`.
//   -  Una clase ```NotifierFactory``` que devuelva el tipo de notificador adecuado según configuración ("console", "email", "sms").
//   -  Simula una función ```config = getNotificationType()```.
// ✅ Objetivo: Entender cómo cambiar la clase concreta sin tocar la lógica del cliente.



// --------------------------------------------
// --------------  INTERFAZ  ------------------
// --------------------------------------------
// Interfaz Notifier
class Notifier {
  send () {
   throw new Error('Metodo send() no implementado'); 
  }
}

// --------------------------------------------
// -----------  CREADOR CONCRETO  -------------
// --------------------------------------------
// Creador concreto CosoleNotifier
class ConsoleNotifier extends Notifier {
  send(message) {
    console.log(`Notificación por Consola: ${message}`);
  }
}


// Creador concreto EmailNotifier
class EmailNotifier extends Notifier {
  send(message) {
    console.log(`Notificación por Email: ${message}`);
  }
  
}


// Creador concreto SMSNotifier
class SMSNotifier extends Notifier {
  send(message) {
    console.log(`Notificación por SMS: ${message}`);
  }
  
}

// --------------------------------------------
// ---------  CLASE CREADORA ABST.  -----------
// --------------------------------------------
// Clase creadora abstracta 
class NotifierFactory {
  createNotifier() {
    throw new Error(`Método createNotifier() no implementado`);
  }
}

// --------------------------------------------
// --------  CLASE CONCRETA CREADORA  ---------
// --------------------------------------------
// Clase concreta creadora ConsoleNotifierFactory
class ConsoleNotifierFactory extends NotifierFactory {
  createNotifier() {
    return new ConsoleNotifier();
  }
}

// Clase concreta creadora ConsoleEmailFactory
class EmailNotifierFactory extends NotifierFactory {
  createNotifier() {
    return new EmailNotifier();
  }
}

// Clase concreta creadora ConsoleSMSFactory
class SMSNotifierFactory extends NotifierFactory {
  createNotifier() {
    return new SMSNotifier();
  }
}


// --------------------------------------------
// -------------  SIMULADOR  ------------------
// --------------------------------------------
function exampleType() {
  return { type: 'sms' }; // Simula la función ggetNotificationType()
}

// --------------------------------------------
// ------------  INICIALIZADOR  ---------------
// --------------------------------------------
// Main
class Main {

  initialize() {
    const config = exampleType();
    
    let factory;

    switch (config.type) {
      case 'console':
        factory = new ConsoleNotifierFactory();
        break;
      case 'email':  
        factory = new EmailNotifierFactory();
        break;
      case 'sms':
        factory = new SMSNotifierFactory();
        break;
      default:
        throw new Error(`Tipo de notificación no registrada: ${config.type}`);
    }

    const notifier = factory.createNotifier();
    const msg = `Mensaje de prueba enviado.`;
    console.log(`config.type = ${config.type}`)
  
    notifier.send(msg);
  }
}

const app = new Main();


export { app };