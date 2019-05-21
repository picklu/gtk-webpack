import path from 'path';
import { add, subtract } from './models/model';
import { display } from './views/view';

console.log(__dirname);
console.log(__filename);
console.log(path.resolve(__dirname, __filename));
console.log(path.join(__dirname, __filename));

display(add, 10, 20);
display(subtract, 20, 10);
