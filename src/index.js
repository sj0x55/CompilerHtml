import Compiler from './modules/compiler';
import Tags from './modules/tags';
import Directives from './modules/directives';
import Attributes from './modules/attributes';

let compiler = new Compiler({
  preprocessors: [Tags, Directives, Attributes]
});

let result = compiler.compile(`
  <div a b test c="ccc">
    <div directive>
      <div class="div">Test 1</div>
      <div>Test 2</div>
      <div>
        Test 3
        <div directive directive2 ddd_ddd class="abc"></div>
      </div>
    </div>
    <div>
      <div directive></div>
    </div>
  </div>
`);

console.log(result);
