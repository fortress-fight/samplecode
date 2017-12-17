import './src/js/script.js';
import './src/sass/style.scss';
import './src/css/style.css';

const babel = 'ceshi';

if(module.hot){
    module.hot.accept('./src/sass/style.scss', function () {
        alert(change);
        console.log(55);
    });
}