---
id: from-project-editor
title: Desde el editor del proyecto
---

Puede suceder que encuentre problemas al utilizar el editor de proyectos 4D mobile o al usar su aplicación Android. La lectura de los archivos de historial puede ofrecer información útil en estos casos.

Para acceder a los archivos de historial, presione la tecla **Alt** y seleccione **Proyecto** en el panel CREAR del editor de proyectos:

![Depuración](img/project.png)

Aparecen elementos del menú de depuración adicionales para el [simulador seleccionado en ese momento](../project-definition/build-panel#using-the-simulator):


* **Registros del Simulador Abierto**: donde se encuentra la carpeta `CrashReporter MobileInstallation`

* **Abrir los informes de diagnóstico del simulador**

* **Abrir la carpeta del simulador actual**

* **Abrir carpeta del simulador de aplicaciones**: abre un submenú para cada aplicación


## Cómo depurar su aplicación

Una vez que la aplicación esté completa y el resultado del simulador sea satisfactorio, tal vez quiera probarlo en su smartphone, si está trabajando en 4D for iOS o 4D for Android.

Para ello, en el editor del proyecto, asegúrese de que ha conectado su smartphone, luego seleccione su dispositivo físico de la lista y haga clic en el botón “Compilar y ejecutar”.

![AndroidDevice](img/phone-selection.png)

:::nota

El botón **Actualizar la lista de dispositivos...** permite actualizar la lista de dispositivos disponibles.

:::

4D creará entonces la aplicación y la instalará en el dispositivo conectado.

:::nota

Si es un desarrollador Android, necesita añadir un paso extra al proceso de depuración. Más detalles [aquí](from-your-android-device-and-android-studio.md).

:::
