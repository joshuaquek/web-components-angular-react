// class Application {
//     root = null;
//     title = 'Web Components';

//     bootstrap (root) {
//       this.root = root
//       this.root.innerHTML = ` 
//             <div class="row">
//                 <h1>Hello web-components</h1>

//                 <div style="margin-top: 3rem">
//                     <label for="title">Title:</label>
//                     <input id="title" name="title" value="${this.title}">
//                 </div>
//             </div>

//             <div class="row">
//                 <div>
//                     <h2>Separately Running Multiple Apps</h2>
//                     <angular-app title="Angular Separate Running App"></angular-app>
//                     <react-app title="React Separate Running App"></react-app>
//                 </div>
//             </div>
//         `
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   let rootDomElement = document.getElementById('app')
//   const application = new Application()
//   application.bootstrap(rootDomElement)
// })
