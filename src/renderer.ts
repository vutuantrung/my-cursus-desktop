/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./assets/styles/css/vertical-responsive-menu.min.css";
import "./assets/styles/css/style.css";
import "./assets/styles/css/responsive.css";
import "./assets/styles/css/night-mode.css";
import "./assets/vendor/unicons-2.0.1/css/unicons.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/OwlCarousel/assets/owl.carousel.css";
import "./assets/vendor/OwlCarousel/assets/owl.theme.default.min.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/semantic/semantic.min.css";

import "./index.css";
import "./App";

// import "./assets/js/vertical-responsive-menu.js";
// import "./assets/js/vertical-responsive-menu.min.js";
// import "./assets/js/jquery-3.3.1.min.js";
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/vendor/OwlCarousel/owl.carousel.js";
// import "./assets/vendor/semantic/semantic.min.js";
// import "./assets/js/custom.js";
// import "./assets/js/night-mode.js";

console.log(
    '👋 This message is being logged by "renderer.js", included via webpack'
);
