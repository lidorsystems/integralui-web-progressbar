# IntegralUI Web - ProgressBar, v22.2

IntegralUI Web - ProgressBar is a native Web Component that visualize the progression of an operation. 

![IntegralUI Web - ProgressBar, 22.2 - a native Web Component for JavaScript, Angular, React and Vue. It visualizes the progression of an operation.](https://www.lidorsystems.com/products/web/studio/images/integralui-web-progressbar.png)

<b>Note</b> This component is part of [IntegralUI Web](https://github.com/lidorsystems/integralui-web.git) library.

Here is a brief overview of what is included:


## Components

[ProgressBar](https://www.lidorsystems.com/products/web/studio/samples/#/progressbar) - Visualize the progression of an operation


## Services

<b>Common</b> - Includes a set of common functions usable in most applications


## Dependencies

IntegralUI Web is built on top of [LitElement](https://github.com/Polymer/lit-element). All necessary files from that library are already included in the /external subfolder of this repository.


## DEMO

[Online QuickStart App](https://www.lidorsystems.com/products/web/studio/samples/) - An online demo of ProgressBar component is included


## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-web-progressbar.git
```

or directly from NPM

```bash
npm i integralui-web-progressbar
```


## How to Use

<b>Note</b> A detailed information is available here: [How to Use IntegralUI Web Components](https://www.lidorsystems.com/help/integralui/web-components/introduction/installation/). Explains how to setup and use components for each framework: Angular, React or Vanilla JavaScript.

In general, you need to open your application and add a reference to a component you want to use. For example, if you are using the IntegralUI ProgressBar component:</p>

### Angular

```bash
import 'integralui-web-progressbar/components/integralui.progressbar.js';

@Component({
    selector: '',
    templateUrl: './progressbar-overview.html',
    styleUrls: ['./progressbar-overview.css']
})
export class ProgressBarOverviewSample {
    public ctrlSize: any = { width: 300 };
    public progressValue1: number = 50;
}
```

Then, place the component in HTML using its tag. Here is an example:


```bash
<div class="sample-block" id="progressbar-overview">
    <iui-progressbar id="progress-1" [allowAnimation]="true" [size]="ctrlSize" [value]="progressValue1"></iui-progressbar>
</div>
```

Depending on current version of TypeScript, you may need to add some settings in tsconfig.json, under "angularCompilerOptions":

```bash
"angularCompilerOptions": {

    . . .

    "suppressImplicitAnyIndexErrors": true,     // solves implicit any values
    "noImplicitAny": false,             // solves angular could not find a declaration file for module implicitly has an 'any' type
    "strictNullChecks": false           // solves type null is not assignable to type

}
```


### React

Currently [ReactJS doesn't have full support for Web Components](https://custom-elements-everywhere.com/#react). Mainly because of the way data is passed to the component via attributes and their own synthetic event system. For this reason, you can use available wrappers located under /wrappers directory, which are ReactJS components that provide all public API from an IntegralUI component.</p>

```bash
import IntegralUIProgressBarComponent from 'integralui-web-progressbar/wrappers/react.integralui.progressbar.js';
```

Then, place the component in HTML using its tag. Here is an example:

```bash
class ProgressBarOverview extends Component {

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300 },
            isAnimationAllowed: true,
            progressValue1: 50
        }
    }

    render() {
        return (
            <div className="sample-block" id="progressbar-overview">
                <IntegralUIProgressBarComponent id="progress-1" allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} value={this.state.progressValue1}></IntegralUIProgressBarComponent>
            </div>
        );
    }
}
```


### Vanilla JavaScript

```bash
<script type="module" src="integralui-web-progressbar/components/integralui.progressbar.js"></script>
```

Then, place the component in HTML using its tag. Here is an example:

```bash
<div class="sample-block">
    <iui-progressbar id="progress-1" allow-animation="true" value="50"></iui-progressbar>
</div>
```

## How to Change Appearance

To modify the ProgressBar appearance, you can use CSS custom properties:

```bash
iui-progressbar {
    --progressbar-border: 0;
    --progressbar-margin: 7px 0;
    --progressbar-padding: 0;

    --progressbar-track-border-width: 0;
    --progressbar-track-border-radius: 15px;
    --progressbar-label-border-radius: 0 15px 15px 0;
}
[id="progress-1"] {
    --progressbar-content-background: #cc2b2b;
    --progressbar-content-border-radius: 15px;
    --progressbar-content-height: 12px;
}
```

## QuickStart App

There is a demo application with source code that contains samples for each component included in the IntegralUI Web library. It can help you to get started quickly with learning about the components and write tests immediatelly. 

From [IntegralUI Web - QuickStart](https://github.com/lidorsystems/integralui-web-quickstart) you can download a demo app for Angular, AngularJS, React and Vanilla JavaScript. A detailed information about each of these quick-start demos is available in ReadMe file, located in the root folder of the demo app.


## License Information

You are FREE to use this product to develop Internet and Intranet web sites, web applications and other products, with no-charge.

This project has been released under the IntegralUI Web Lite License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](https://www.lidorsystems.com/products/web/lite/integralui-web-lite-license-agreement.pdf).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.