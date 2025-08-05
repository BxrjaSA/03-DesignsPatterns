// 📝 Enunciado:
// Simula un sistema de UI que renderiza diferentes botones según el tipo de dispositivo (desktop, mobile, tablet).
// Requisitos:

//   -  Interfaz UIElement con método `render()`.

//   -  Clases concretas: `DesktopButton`, `MobileButton`, `TabletButton`.

//   -  Una fábrica abstracta `UIFactory` y subclases `DesktopFactory`, `MobileFactory`, etc.

//   -  Crea un archivo HTML y usa TypeScript para inyectar los elementos.

// ✅ Objetivo: Practicar el patrón en un entorno más visual, con el DOM.



// --------------------------------------------
// --------------  INTERFAZ  ------------------
// --------------------------------------------
class UIElement {
  render() {
    throw new Error('Método render() no implementado');
  }
}


// --------------------------------------------
// ------------  Clase CONCRETO  --------------
// --------------------------------------------
class DesktopButton extends UIElement {
  render() {
    console.log('Renderizando botón de escritorio');
  }
}

class MobileButton extends UIElement {
  render() {
    console.log('Renderizando botón de móvil');
  }
}

class TabletButton extends UIElement {
  render() {
    console.log('Renderizando botón de tablet');
  }
}


// --------------------------------------------
// ---------  CLASE CREADORA ABST.  -----------
// --------------------------------------------
class UIFactory {
  createUIElement() {
    throw new Error('Método createUIElement() no implementado');
  }
}



// --------------------------------------------
// --------  CLASE CONCRETA CREADORA  ---------
// --------------------------------------------
class DesktopFactory extends UIFactory {
  createUIElement() {
    return new DesktopButton();
  }
}


class MobileFactory extends UIFactory {
  createUIElement() {
    return new MobileButton();
  }
}


class TabletFactory extends UIFactory {
  createUIElement() {
    return new TabletButton();
  }
}



// --------------------------------------------
// -------------  SIMULADOR  ------------------
// --------------------------------------------
function exampleType() {
  return { type : 'mobile' };
}

// --------------------------------------------
// ------------  INICIALIZADOR  ---------------
// --------------------------------------------
class App {
  initialize() {
    const config = exampleType();

    let factory;

    switch (config.type) {
      case 'desktop':
        factory = new DesktopFactory();
        break;
      case 'mobile':
        factory = new MobileFactory();
        break;
      case 'tablet':
        factory = new TabletFactory();
        break;
      default :
        throw new Error(`Tipo de dispositivo no registrado: ${config.type}`);
    }

    const uiElement = factory.createUIElement();
    uiElement.render();
  }
}



export const app = new App();