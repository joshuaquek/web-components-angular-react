export class AppComponent {
    hello = 'Angular One Web Component';

    static $inject = ['$http', 'config'];

    constructor ($http, config) {
      this.$http = $http
      this.config = config
    }

    static component = {
      template: `
            <div>
                <h3>Title: {{ $ctrl.config.title }}</h3>
                <p>Greeting: {{ $ctrl.hello }}</p>
            </div>
        `,
      controller: AppComponent
    }
}
